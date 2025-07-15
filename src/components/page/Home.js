import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SignInEmail from '../login/SigninEmail';
import StockAdTable from 'components/utils/StockAdTable';

import './Home.css';

import logo from 'assets/image/logo.svg'

const Home = () => {
  const [isSigninEmailOpen, setSigninEmailOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  const handleSignupOpenDialog = () => {
    setSigninEmailOpen(true);
    setIsSignup(true);
  }

  const handleSignupCloseDialog = () => {
    setSigninEmailOpen(false);
  }

  const handleSigninOpenDialog = () => {
    setSigninEmailOpen(true);
    setIsSignup(false);
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSession(localStorage.getItem('token'));
    } else {
      setSession('')
    }
  }, []);

  useEffect(() => {
    if (session) {
      navigate('/main');
    }
  }, [session, navigate]);

  return (
    <>
      <section className='navigation'>
        <div className="navbar w-nav">
          <a href="/" className="brand w-nav-brand">
            <img src={logo} width="70" alt="" className="logo-image-home" />
          </a>
          <div className='nav-button-wrapper'>
            <a
              data-id="create-account-link"
              className="button in-nav w-button"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                handleSignupOpenDialog(); // Call your function
              }}
            >Start For Free</a>
            <a
              data-id="log-in-link"
              className="button login in-nav w-button"
              onClick={(e) => {
                e.preventDefault();
                handleSigninOpenDialog();
              }}
            >
              Log In</a>
          </div>
        </div>
      </section>
      <section className='home-bro'>
        <div className='home-bro-wrapper'>
          <div className='home-bro-content'>
            <div className='hero-text home'>
              <h1 className='home-header'>
                <span className='normal'>AI-driven research advisor trained on thousands of proprietary hedge fund stock ideas</span>
              </h1>
              <p className="base">All-in-one platform to improve your returns, trained on the best stock pitches.</p>
              <div className='actions'>
                <a
                  className="button-primary-large"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default anchor behavior
                    handleSignupOpenDialog(); // Call your function
                  }}
                >
                  <div className="text-16">Join For Free</div>
                </a>
                <a href="/main" rel="nofollow" className="button-outline on-dark-bg"><div className="text-16">View Top Ideas</div></a>
              </div>
              <StockAdTable />
            </div>
            <div className='video-wrapper home'>
              <div className='stock-report-video-embed w-embed'>
                <video loop="" autoPlay="" muted="">
                  <source src="https://simplywall.st/static/videos/simplywall-feature-highlights.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isSigninEmailOpen && <SignInEmail
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
    </>
  )
}

export default Home;
