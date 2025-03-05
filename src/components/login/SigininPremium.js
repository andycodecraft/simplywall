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
          <div className="dialog">
            <button className="dialog-close" onClick={onClose}>
              &times;
            </button>
            <div className="sign-up-content-header">
              <p className="sign-up-content-header-text">Sign up to continue.
                <br />
                Free forever.
              </p>
            </div>
            <div className="dialog-content">
              <button
                onClick={googleLogin}
                className="continue-button continue-google"
              >
                <FontAwesomeIcon icon={faGoogle} />
                <span>Continue with google</span>
              </button>
              <button
                onClick={handleEmailSignUp}
                className="continue-button continue-email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Continue with Email</span>
              </button>
              <div className='sign-in-text'>
                <span>Already have an account?</span>
                <button
                  className="link-button"
                  onClick={handleSigninEmailOpenDialog}>
                  Sign in
                </button>
              </div>
              <p className="agree-terms">By using Simply Wall St you are agreeing to our <a rel="noopener noreferrer" href="https://simplywall.st/terms-and-conditions" target="_blank" data-cy-id="link-terms-and-conditions" data-focus="solid" className="agree-terms-link">terms and conditions</a>. Simply Wall St provides general investment advice only.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPremium;
