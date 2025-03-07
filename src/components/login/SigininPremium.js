import React from 'react';

import { useGoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import axios from "axios"

import './Login.css'
import { getSignToken } from '../../helpers/api'

const SigninPremium = ({ setSigninEmail, setIsSignup, setSession, onClose }) => {
  const googleLogin = useGoogleLogin({
    onSuccess: async respose => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${respose.access_token}`
          }
        })

        if (res.data.email_verified) {
          const response = await getSignToken(res.data.email);
          localStorage.setItem('token', response.response.token);
          setSession(response.response.token);
          onClose();
        }

      } catch (err) {
        console.log(err)
      }
    }
  });

  const handleSigninEmailOpenDialog = () => {
    setSigninEmail(true)
    setIsSignup(false)
    onClose();
  }

  const handleEmailSignUp = () => {
    setSigninEmail(true)
    setIsSignup(true)
    onClose();
  };

  return (
    <div className="sign-up-in-dialog">
      <div>
        <div className="dialog-overlay">
          <div className="premium-dialog">
            <button className="dialog-close" onClick={onClose}>
              &times;
            </button>
            <div className="dialog-content">
              <div className='premium-container'>
                <div className='premium-header'>
                  <span className='white'>Become a </span>
                  <span className='orange'>Premium member</span>
                </div>
                <div className='premium-content'>
                  <h1>Only $4.95 for 1 month</h1>
                  <h2>After 1 month - Just $24.92/month ($299 billed after trial)</h2>
                  <div className='para-spacer' />
                  <span>
                    Introductory offer for new subscribers only. $4.95 charged immediatly for a 1-month paid trial to Premium. After your 1-month paid trial, $299 will be charged automatically for an annual subsription unless you cancel during your 1-month trial. Auto-renews as an annual subscription at the then current annual list price (current list price is $299/year). Plus sales tax/VAT, where applicable.
                  </span>
                </div>
              </div>
              <div className='signin-container'>
                <span className='header'>Let's get started:</span>
                <div className='sign-in-option'>
                  <span>Already have an account?</span>
                  <button
                    className="link-button"
                    onClick={handleSigninEmailOpenDialog}>
                    Sign in
                  </button>
                </div>
                <button
                  onClick={handleEmailSignUp}
                  className="continue-button create-free"
                >
                  Create Free Account
                </button>
                <button
                onClick={googleLogin}
                className="continue-button continue-google"
              >
                <FontAwesomeIcon icon={faGoogle} />
                <span>Continue with google</span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPremium;
