import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Discover from './Discover';
import Stocks from './Stocks';
import StockDetail from './StockDetail';
import Signup from '../login/Signup';
import SignInEmail from '../login/SigninEmail';
import Header from '../template/Header';
import Footer from '../template/Footer';

import './MainPage.css';
import '../../styles/Help.css';

const importAll = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((key) => {
        const imageName = key.match(/[^/]+$/)[0]; // Extracts the file name
        images[imageName] = requireContext(key);
    });
    return images;
};

const images = importAll(require.context('../../assets/image', false, /\.(png|jpe?g|avif|gif)$/));

const MainPage = () => {
    const [isSignupDialogOpen, setSignupDialogOpen] = useState(false);
    const [isSigninEmailOpen, setSigninEmailOpen] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    const handleSignupOpenDialog = () => setSignupDialogOpen(true);
    const handleSignupCloseDialog = () => setSignupDialogOpen(false);

    const investingRef = useRef(null);
    const discover = useRef(null);
    const observerTarget = useRef(null);

    const [visibleItems, setVisibleItems] = useState([]);
    const [page, setPage] = useState(1);

    const observer = useRef();


    const itemsPerPage = 20; // Number of items to load per scroll

    const loadMoreItems = () => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newItems = Object.keys(images).slice(startIndex, endIndex);

        setVisibleItems((prevItems) => [...prevItems, ...newItems]);
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        const target = observerTarget.current; // Get the current observer target element

        if (!target) return;

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreItems();
                }
            },
            { threshold: 1.0 }
        );

        observer.current.observe(target);

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [page]);

    useEffect(() => {
        if (discover.current) {
            discover.current.click();
        }

        if (localStorage.getItem('token')) {
            setSession(localStorage.getItem('token'));
        } else {
            setSession('')
        }
    }, [])

    useEffect(() => {
        if (investingRef.current) {
            investingRef.current.click();
        }
    }, [])

    const tablistfunc = (evt) => {
        const tablist_btn = document.getElementsByClassName("tablist-btn");
        for (var i = 0; i < tablist_btn.length; i++) {
            tablist_btn[i].className = tablist_btn[i].className.replace(" tabactive", "");
        }
        evt.currentTarget.className += " tabactive";
    }

    return (
        <div className='main-container'>
            <Header
                handleSignupOpenDialog={handleSignupOpenDialog}
                session={session}
                setSession={setSession} />
            <div className='section-wrap'>
                <section className='section-container'>
                    <Routes>
                        <Route path="/" element={
                            <Discover
                                images={images}
                                investingRef={investingRef}
                                observerTarget={observerTarget}
                                tablistfunc={tablistfunc}
                                visibleItems={visibleItems}
                            />} />
                        <Route path="/stocks/:id" element={
                            <Stocks />} />
                        <Route path="/stocks/:id/detail/:stock_id" element={
                            <StockDetail />
                        } />
                    </Routes>
                </section>
            </div>
            <Footer />
            {isSignupDialogOpen && <Signup
                setSigninEmail={setSigninEmailOpen}
                setIsSignup={setIsSignup}
                setSession={setSession}
                onClose={handleSignupCloseDialog}
            />}
            {isSigninEmailOpen && <SignInEmail
                onClose={setSigninEmailOpen}
                signinOption={isSignup}
                setSession={setSession}
            />}
        </div>
    )
}

export default MainPage
