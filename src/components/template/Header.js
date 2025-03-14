import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './Template.css'

import logo from 'assets/image/logo-white.svg'

const Header = ({ handleSignupOpenDialog, session, setSession }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu and button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuVisible(false);
      }
    };

    // Add event listener when menu is visible
    if (menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener from document
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuVisible]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log('User logged out');
    setSession('');
    setMenuVisible(false);
    //navigate('/');
  };

  return (
    <div className='nav-bar-wrap'>
      <header className='nav-header'>
        <div className='nav-bar-container relative'>
          <div className='simply-wall-logo-header'>
          <a href="/" className="brand w-nav-brand">
            <img src={logo} width="55" alt="" className="logo-image" />
          </a>
          </div>
          <nav className='header-bar'>
            <div className='nav-list-container'>
            </div>
            <div className='search-login-container'>
              {session === null && <div>Loading...</div>}
              {session === '' && <div>
                <button className='sign-in-up-btn' onClick={handleSignupOpenDialog}>
                  Log In/ Sign Up
                </button>
              </div>}
              {session && <div className='user-icon-wrap'>
                <div className='user-opt-container'>
                  <div className='user-icon-container'>
                    <button className='user-btn' onClick={toggleMenu} ref={buttonRef}>
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="hsl(0 0% 100%)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 15C8.29547 15 6 17.1169 6 19.5C6 19.7761 5.77614 20 5.5 20C5.22386 20 5 19.7761 5 19.5C5 16.3603 7.97254 14 12 14C16.0275 14 19 16.3603 19 19.5C19 19.7761 18.7761 20 18.5 20C18.2239 20 18 19.7761 18 19.5C18 17.1169 15.7045 15 12 15Z"></path>
                      </svg>
                      <svg fill="hsl(0 0% 100%)" width="14" height="14" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" className="size-2 fill-legacy-white"><path d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"></path></svg>
                    </button>
                  </div>
                  {menuVisible && (
                    <div ref={menuRef}>
                      <nav className='user-menu-bar'>
                        <div className='user-menu'>
                          <ul className='user-menu-list'>
                            <li>
                              <a href="/membership" data-cy-id="account-nav-subscription-and-billing" className="user-menu-item">Plans &amp; Pricing</a>
                            </li>
                            <li>
                              <a href="#" onClick={handleLogout} className="user-menu-item">
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  )}
                </div>
              </div>}
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header;
