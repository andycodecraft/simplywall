import './Membership.css'
import '../template/Template.css'

import config from 'config';
import { checkoutStripe } from '../../helpers/api'
import logo from 'assets/image/logo.svg'

import React from 'react';

const Membership = () => {
  const choosePremium = async () => {
    const response = await checkoutStripe(config.premiumPriceId);
  }

  const chooseUnlimited = async () => {
    const response = await checkoutStripe(config.unlimitedPriceId);
  }

  return (
    <>
      <section className='plans-body'>
        <section className='body-section'>
          <div className='logo-container'>
            <div className='simply-wall-logo-container'>
              <div className='block'>
              <img src={logo} width="50" alt="" className="logo-image" />
              </div>
            </div>
            <div className='button-container'>
              <ul className='button-list'>
                <li>
                  <a href="/" data-cy-id="navigation-app" className="header-button-link">
                    <div data-focus="dashed" className="header-button">Top Ideas</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <header className='member-header'>
            <h2>Pick the plan that’s right for your investing needs</h2>
          </header>
          <div className='plans-container'>
            <div className='plans-container-1'>
              <div className='plan-item'>
                <div className='plan-item1'>
                  <div className='plan-item-header free'>
                    <div className='plan-item-header1'>
                      <div className='plan-item-background'>
                        <img alt="bear-illustration" srcSet="https://simplywall.st/cdn-cgi/image/format=auto,fit=cover,w=208,q=80,blur=0/https://simplywall.st/static/images/free-bear.png" width="148px" />
                      </div>
                      <div className='plan-item-content'>
                        <p className='title'>Free</p>
                        <p className='description'>Start small and learn the ropes</p>
                        <div className='price'>
                          <p>EUR <mark>€0</mark> forever</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='plan-item-body'>
                    <ul>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">5 Company Reports per Month</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">1 Portfolio, 10 Holdings</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">1 Watchlist</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">Limited Screeners & Alerts</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">Limited Risk & Reward Updates</p>
                        </li>
                      </div>
                      <div className="plan-extra-container">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#151B24" opacity="0.3"><path fillRule="evenodd" clip-rule="evenodd" d="M7.75886 6.34273C7.36834 5.9522 6.73518 5.9522 6.34465 6.34273C5.95413 6.73325 5.95413 7.36642 6.34465 7.75694L10.5869 11.9992L6.34359 16.2426C5.95307 16.6331 5.95307 17.2663 6.34359 17.6568C6.73412 18.0473 7.36728 18.0473 7.75781 17.6568L12.0012 13.4134L16.2441 17.6564C16.6347 18.047 17.2678 18.047 17.6584 17.6564C18.0489 17.2659 18.0489 16.6327 17.6584 16.2422L13.4154 11.9992L17.6573 7.75731C18.0478 7.36678 18.0478 6.73362 17.6573 6.34309C17.2668 5.95257 16.6336 5.95257 16.2431 6.34309L12.0012 10.585L7.75886 6.34273Z"></path></svg>
                        <p className='plan-extra'>Brokerage Sync</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#151B24" opacity="0.3"><path fillRule="evenodd" clip-rule="evenodd" d="M7.75886 6.34273C7.36834 5.9522 6.73518 5.9522 6.34465 6.34273C5.95413 6.73325 5.95413 7.36642 6.34465 7.75694L10.5869 11.9992L6.34359 16.2426C5.95307 16.6331 5.95307 17.2663 6.34359 17.6568C6.73412 18.0473 7.36728 18.0473 7.75781 17.6568L12.0012 13.4134L16.2441 17.6564C16.6347 18.047 17.2678 18.047 17.6584 17.6564C18.0489 17.2659 18.0489 16.6327 17.6584 16.2422L13.4154 11.9992L17.6573 7.75731C18.0478 7.36678 18.0478 6.73362 17.6573 6.34309C17.2668 5.95257 16.6336 5.95257 16.2431 6.34309L12.0012 10.585L7.75886 6.34273Z"></path></svg>
                        <p className='plan-extra'>Priority Support</p>
                      </div>
                    </ul>
                    <div className='option-button-container'>
                      <button display="block" disabled="" data-focus="dashed" className="option-button disable-btn">Current Plan</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='plan-item'>
                <div className='plan-item1'>
                  <div className='plan-item-header premium'>
                    <div className='plan-item-header1'>
                      <div className='plan-item-background'>
                        <img alt="bear-illustration" srcSet="https://simplywall.st/cdn-cgi/image/format=auto,fit=cover,w=208,q=80,blur=0/https://simplywall.st/static/images/premium-bear.png" width="148px" />
                      </div>
                      <div className='plan-item-content'>
                        <p className='title'>Premium</p>
                        <p className='description'>Grow and protect your portfolios</p>
                        <div className='price'>
                          <p>EUR <mark>€9.17</mark> /mo</p>
                        </div>
                        <div className='annual-bill'>
                          <p>€110 Billed Yearly</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='plan-item-body'>
                    <ul>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">30 Company Reports per Month</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">3 Portfolio, 30 Holdings</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">3 Watchlists</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">3 Stock Screeners & Alerts</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">Limited Risk & Reward Updates</p>
                        </li>
                      </div>
                      <div className="plan-extra-container">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2394DF"><path d="M19.7629 6.77239C19.3723 6.38186 18.7392 6.38186 18.3487 6.77239L9.58548 15.5356L6.70711 12.6572C6.31658 12.2667 5.68342 12.2667 5.29289 12.6572C4.90237 13.0477 4.90237 13.6809 5.29289 14.0714L8.82843 17.6069C9.03703 17.8155 9.31486 17.9127 9.58797 17.8985C9.85954 17.9113 10.1354 17.8141 10.3428 17.6067L19.7629 8.1866C20.1534 7.79607 20.1534 7.16291 19.7629 6.77239Z"></path></svg>
                        <p className='plan-extra active'>Brokerage Sync</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2394DF"><path d="M19.7629 6.77239C19.3723 6.38186 18.7392 6.38186 18.3487 6.77239L9.58548 15.5356L6.70711 12.6572C6.31658 12.2667 5.68342 12.2667 5.29289 12.6572C4.90237 13.0477 4.90237 13.6809 5.29289 14.0714L8.82843 17.6069C9.03703 17.8155 9.31486 17.9127 9.58797 17.8985C9.85954 17.9113 10.1354 17.8141 10.3428 17.6067L19.7629 8.1866C20.1534 7.79607 20.1534 7.16291 19.7629 6.77239Z"></path></svg>
                        <p className='plan-extra active'>Priority Support</p>
                      </div>
                    </ul>
                    <div className='option-button-container'>
                      <button display="block" disabled="" data-focus="dashed" className="option-button active-btn" onClick={choosePremium}>Choose Premium</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='plan-item'>
                <div className='plan-item1'>
                  <div className='plan-item-header premium'>
                    <div className='plan-item-header1'>
                      <div className='plan-item-background'>
                      <img alt="bear-illustration" srcSet="https://simplywall.st/cdn-cgi/image/format=auto,fit=cover,w=208,q=80,blur=0/https://simplywall.st/static/images/unlimited-bear.png" width="148px" />
                      </div>
                      <div className='plan-item-content'>
                        <p className='title'>Unlimited</p>
                        <p className='description'>All you need to invest like the best</p>
                        <div className='price'>
                          <p>EUR <mark>€18.33</mark> /mo</p>
                        </div>
                        <div className='annual-bill'>
                          <p>€220 Billed Yearly</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='plan-item-body'>
                    <ul>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">Unlimited Company Reports</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">5 Portfolios, Unlimited Holdings</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">5 Watchlists</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">10 Stock Screeners & Alerts</p>
                        </li>
                      </div>
                      <div className="plan-option-container">
                        <li>
                          <p className="plan-option">Unlimited Risk & Reward Updates</p>
                        </li>
                      </div>
                      <div className="plan-extra-container">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2394DF"><path d="M19.7629 6.77239C19.3723 6.38186 18.7392 6.38186 18.3487 6.77239L9.58548 15.5356L6.70711 12.6572C6.31658 12.2667 5.68342 12.2667 5.29289 12.6572C4.90237 13.0477 4.90237 13.6809 5.29289 14.0714L8.82843 17.6069C9.03703 17.8155 9.31486 17.9127 9.58797 17.8985C9.85954 17.9113 10.1354 17.8141 10.3428 17.6067L19.7629 8.1866C20.1534 7.79607 20.1534 7.16291 19.7629 6.77239Z"></path></svg>
                        <p className='plan-extra active'>Brokerage Sync</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2394DF"><path d="M19.7629 6.77239C19.3723 6.38186 18.7392 6.38186 18.3487 6.77239L9.58548 15.5356L6.70711 12.6572C6.31658 12.2667 5.68342 12.2667 5.29289 12.6572C4.90237 13.0477 4.90237 13.6809 5.29289 14.0714L8.82843 17.6069C9.03703 17.8155 9.31486 17.9127 9.58797 17.8985C9.85954 17.9113 10.1354 17.8141 10.3428 17.6067L19.7629 8.1866C20.1534 7.79607 20.1534 7.16291 19.7629 6.77239Z"></path></svg>
                        <p className='plan-extra active'>Priority Support</p>
                      </div>
                    </ul>
                    <div className='option-button-container'>
                      <button display="block" disabled="" data-focus="dashed" className="option-button active-btn" onClick={chooseUnlimited}>Choose Unlimited</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Membership;