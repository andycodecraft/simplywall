import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SignInEmail from '../login/SigninEmail';
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
            <img src={logo} width="50" alt="" className="logo-image" />
          </a>
          <div className='nav-button-wrapper'>
            <a
              data-id="create-account-link"
              className="button in-nav w-button"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                handleSignupOpenDialog(); // Call your function
              }}
            >Create free account</a>
            <a
              data-id="log-in-link"
              className="button login in-nav w-button"
              onClick={(e) => {
                e.preventDefault();
                handleSigninOpenDialog();
              }}
            >
              Log in</a>
          </div>
        </div>
      </section>
      <section className='home-bro'>
        <div className='home-bro-wrapper'>
          <div className='home-bro-content'>
            <div className='hero-text home'>
              <h1 className='home-header'>
                <span className='normal'>Proprietary AI-Stock advisor trained on thousands of the best hedge fund analysts</span>
              </h1>
              <p className="base">All-in-one platform to improve your portfolios, speed up research and find winning stocks.</p>
              <div className='actions'>
                <a
                  className="button-primary-large"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default anchor behavior
                    handleSignupOpenDialog(); // Call your function
                  }}
                >
                  <div className="text-16">Get started for free</div>
                </a>
                <a href="https://simplywall.st/portfolio/demo" rel="nofollow" className="button-outline on-dark-bg"><div className="text-16">View Top Ideas</div></a>
              </div>
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
