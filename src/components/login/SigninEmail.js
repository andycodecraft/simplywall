import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

import axios from "axios"

import './Login.css'
import { signinUser, registerUser, getSignToken } from '../../helpers/api'

const SigninEmail = ({ onClose, signinOption, setSession }) => {

  const [isSignup, setIsSignup] = useState(signinOption);

  const [signinButtonText, setSigninButtonText] = useState('Sign in')
  const [googleButtonDescription, setGoogleButtonDescription] = useState("Or Sign in With:")
  const [linkButtonText, setLinkButtonText] = useState("Sign up");
  const [linkButtonDescription, setLinkButtonDescription] = useState("Not a member?")

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSignup) {
      setSigninButtonText("Sign up")
      setGoogleButtonDescription("Or Sign up With:");
      setLinkButtonDescription("Already have an account?");
      setLinkButtonText("Sign in");
    } else {
      setSigninButtonText("Sign in")
      setGoogleButtonDescription("Or Sign in With:");
      setLinkButtonDescription("Not a member?");
      setLinkButtonText("Sign up");
    }
    setMessage('');
  }, [isSignup])

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
          localStorage.setItem('email', response.data.email);
          setSession(response.response.token);
          onClose();
        }

      } catch (err) {
        console.log(err)
      }
    }
  });

  const handleError = () => {
    console.error('Login Failed');
    setIsSignup(false)
    setMessage('');
    onClose();
  };

  const handleSignupEmailOpenDialog = () => {
    setIsSignup(!isSignup);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setMessage('');
      setLoading(true);

      let response;
      if (isSignup) {
        response = await registerUser(email, password);
      } else {
        response = await signinUser(email, password);
      }

      if (response.status) {
        localStorage.setItem('token', response.response.token);
        localStorage.setItem('email', email);
        setSession(response.response.token);
        onClose();
      }

      setMessage('');
      setLoading(false);

    } catch (error) {
      setMessage(error.message);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign-up-in-dialog">
        <div>
          <div className="dialog-overlay">
            <div className="dialog">
              <button
                className="dialog-close"
                type="button"
                onClick={handleError}>
                &times;
              </button>
              <div className="dialog-content">
                {message && <div className='notification-error'>
                  <p>{message}</p>
                </div>}
                <div className="description-label">
                  <span>Email Address</span>
                </div>
                <input
                  className={loading ? 'credential-input loading' : 'credential-input'}
                  autoComplete="email"
                  type="email"
                  placeholder="e.g. you@example.com"
                  onChange={(e) => setEmail(e.target.value)} />
                <div className="description-label">
                  <span>Password</span>
                </div>
                <input
                  className={loading ? 'credential-input loading' : 'credential-input'}
                  type="password"
                  placeholder="e.g. *********"
                  onChange={(e) => setPassword(e.target.value)} />
                <a href="" className="recovery-link">Forgot password?</a>
                <button
                  type="submit"
                  className={loading ? 'sign-in-button loading' : 'sign-in-button'}
                >
                  {signinButtonText}
                </button>
                <div className="description-label strong-label">
                  <span>{googleButtonDescription}</span>
                </div>
                <div className="google-button-container">
                  <img className="google-button"
                    src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                    alt="google button"
                    onClick={googleLogin} />
                </div>
                <div className="description-label strong-label">
                  <span>{linkButtonDescription}</span>
                  <button
                    type="button"
                    className="link-button"
                    onClick={handleSignupEmailOpenDialog}>
                    {linkButtonText}
                  </button>
                </div>
                <p className="agree-terms">By using Investor's Club you are agreeing to our <a rel="noopener noreferrer" href="https://simplywall.st/terms-and-conditions" target="_blank" data-cy-id="link-terms-and-conditions" data-focus="solid" className="agree-terms-link">terms and conditions</a>. Investor's Club provides general investment advice only.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SigninEmail;
