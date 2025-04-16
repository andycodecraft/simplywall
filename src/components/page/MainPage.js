import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import Discover from './Discover';
import StockDetail from './StockDetail';
import Signup from '../login/Signup';
import SignInEmail from '../login/SigninEmail';
import SigninPremium from '../login/SigininPremium';
import Header from '../template/Header';

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

const MainPage = () => {
    const [isSignupDialogOpen, setSignupDialogOpen] = useState(false);
    const [isSigninEmailOpen, setSigninEmailOpen] = useState(false);
    const [isPremiumSigninOpen, setPremiumSigninOpen] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [session, setSession] = useState(null);

    const handleSignupOpenDialog = () => setSignupDialogOpen(true);
    const handleSignupCloseDialog = () => setSignupDialogOpen(false);

    const handlePremiumSignCloseDialog = () => setPremiumSigninOpen(false);

    const discover = useRef(null);

    useEffect(() => {
        if (discover.current) {
            discover.current.click();
        }

        const token = localStorage.getItem('token');
        setSession(token || '');

        if (!session) {
            if (isSigninEmailOpen)
                return;
            
            const timer = setTimeout(() => {
                setPremiumSigninOpen(true);
            }, 5000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [session, isPremiumSigninOpen, isSigninEmailOpen])

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
                            <Discover />} />
                        <Route path="/detail/:stock_id" element={
                            <StockDetail />
                        } />
                    </Routes>
                </section>
            </div>
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
            {isPremiumSigninOpen && <Signup
                setSigninEmail={setSigninEmailOpen}
                setIsSignup={setIsSignup}
                setSession={setSession}
                onClose={handlePremiumSignCloseDialog}
            />}
        </div>
    )
}

export default MainPage
