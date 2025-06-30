import './StockDetail.css'

import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FastCommentsCommentWidget } from 'fastcomments-react'
import { getTopStockById } from 'helpers/api';
import { apiPath } from 'config';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import logo from 'assets/image/download.svg'

const StockDetail = () => {
  const navItems = [
    { id: '1', label: 'Company Summary' },
    { id: '2', label: 'Core Thesis - Shortened' },
    { id: '3', label: 'Alternative Data / Signals' },
    { id: '4', label: 'Valuation & Price Targets' },
    { id: '5', label: 'Download Full Stock Pitch' },
    { id: '6', label: 'AI Advisor' },
    { id: '7', label: 'User Comments' }
  ];

  const { stock_id } = useParams();
  const sectionsRef = useRef([]);
  const [activeItem, setActiveItem] = useState(navItems[0].id);
  const [iframeShow, setIframeShow] = useState(false);
  const [stockDetail, setStockDetail] = useState([]);

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date ? new Date(date).toLocaleDateString('en-US', options) : '';
  };

  const handleNavClick = (id) => {
    const sectionIndex = navItems.findIndex(item => item.id === id);
    sectionsRef.current[sectionIndex].scrollIntoView({ behavior: 'smooth' });
    setActiveItem(id);
  };

	useEffect(() => {
		createChat({
			webhookUrl: 'https://superid.app.n8n.cloud/webhook/39d227a5-aac1-431d-9e55-20e4e44cb535/chat',
      initialMessages: ["Hi there! 👋 - I'm an Agentic AI stock picker that's trained on thousands of high-quality hedge fund analyst ideas!", 'Ask me anything such as... "What are your highest conviction stock ideas in the consumer space?" or... "What are the major drivers of the Tesla short thesis?"'],
      mode: 'fullscreen',
      target: '#aichat-container'
		});
	}, []);

  useEffect(() => {
    if (activeItem === '6') {
      setIframeShow(true);
    }
  }, [activeItem]);

  useEffect(() => {
    const preventScroll = (event) => {
      event.preventDefault();
    };

    document.addEventListener('focus', preventScroll, true);

    return () => {
      document.removeEventListener('focus', preventScroll, true);
    };
  }, []);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-70% 0px 0px 0px',
      threshold: 0.0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.indexOf(entry.target);
          setActiveItem(navItems[index].id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    const fetchTopStockById = async (stock_id) => {
      try {
        const response = await getTopStockById(stock_id);
        console.log(response)
        setStockDetail(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTopStockById(stock_id);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='detail-header-container container'>
        <div className='detail-header'>
          <header className='detail-content-container'>
            <div className='detail-container'>
              <picture className='detail-image-container'>
                <div className='detail-image-shadow'></div>
                <img src={stockDetail.background_image} className="detail-image"></img>
              </picture>
              <div className='header-description-container'>
                <div className='header-description-intro'>
                  <ul className='header-description-link'>
                    <li>
                      <a href="/main" className='child-link-0'>All ideas</a>
                    </li>
                  </ul>
                </div>
                <div className='logo-container'>
                  <div className='logo-container-1'>
                    <img src={stockDetail.logo_image} alt="TRIP logo" className="sc-1dbr7bz-1 ejnZup" />
                  </div>
                  <div className='company-title-container'>
                    <h1 className='company-title'>
                      {stockDetail.name}
                    </h1>
                    <span>{stockDetail.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className='detail-header'>
            <div className='header-button-container'>
              {/* <button className='stock-header-button watchlist'>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" data-cy-id="outline-star" opacity="1" role="presentation" className="sc-1fw3rv4-0 fNZXbt"><path fillRule="evenodd" clipRule="evenodd" d="M13.3997 10.4935L12.0001 6.21582L10.6004 10.4935L6.09517 10.4935L9.73999 13.1232L8.34319 17.3922L12.0001 14.7538L15.6569 17.3922L14.2601 13.1232L17.9049 10.4935H13.3997ZM9.87544 9.49352H6.09517C5.12476 9.49352 4.72311 10.7367 5.51007 11.3045L8.56236 13.5067L7.39277 17.0813C7.09173 18.0013 8.14321 18.7696 8.92829 18.2032L12.0001 15.9869L15.0718 18.2032C15.8569 18.7696 16.9084 18.0013 16.6073 17.0813L15.4377 13.5067L18.49 11.3045C19.277 10.7367 18.8753 9.49352 17.9049 9.49352H14.1247L12.9505 5.90485C12.6499 4.98614 11.3502 4.98614 11.0496 5.90485L9.87544 9.49352Z"></path></svg>
                Add to watchlist (Alerts)
              </button> */}
              {/* <button className='stock-header-button other'>Add to Portfolio</button> */}
              {/* <button className='stock-header-button other download'>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sc-9nudij-0 bwXXkQ"><path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12ZM17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11Z"></path></svg>
              </button> */}
            </div>
            <div className='header-info-container'>
              <div className='header-info-container1'>
                <div className='header-info-cell'>
                  <div className='cell-container'>
                    <p className='cell top'>LAST PRICE</p>
                  </div>
                  <div className='cell-container'>
                    <p className='cell bottom'>US${stockDetail.last_price}</p>
                  </div>
                </div>
                <div className='header-info-cell'>
                  <div className='cell-container'>
                    <p className='cell top'>MARKET CAP</p>
                  </div>
                  <div className='cell-container'>
                    <p className='cell bottom'>US${stockDetail.market_cap}</p>
                  </div>
                </div>
                <div className='header-info-cell'>
                  <div className='cell-container'>
                    <p className='cell top'>Expected Return</p>
                  </div>
                  <div className='cell-container'>
                    <p className={`cell bottom percent ${stockDetail.sevend_value < 0 ? 'negative' : 'positive'}`}>{stockDetail.sevend_value}%</p>
                  </div>
                </div>
                {/* <div className='header-info-cell'>
                  <div className='cell-container'>
                    <p className='cell top'>1Y</p>
                  </div>
                  <div className='cell-container'>
                    <p className={`cell bottom percent ${stockDetail.oney_value < 0 ? 'negative' : 'positive'}`}>{stockDetail.oney_value}%</p>
                  </div>
                </div> */}
                <div className='header-info-cell'>
                  <div className='cell-container'>
                    <p className='cell top'>AI Score</p>
                  </div>
                  <div className='cell-container'>
                    <p className='cell bottom percent'>{stockDetail.score}</p>
                  </div>
                </div>
                <div className='price-chart-container'>
                </div>
                <div className='info-final-container'>
                  <div className='info-final-container1'>
                    <div className='cell-container'>
                      <p className='cell top'>UPDATED</p>
                    </div>
                    <div className='cell-container'>
                      <p className='cell right'>{formatDate(stockDetail.posted_date)}</p>
                    </div>
                  </div>
                  <div className='info-final-container1'>
                    <div className='cell-container'>
                      <p className='cell top'>AI Recommendation</p>
                    </div>
                    <div className='cell-container'>
                      <p className='cell right'>{stockDetail.recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='detail-body-container container'>
        <div className='detail-sidebar-container'>
          <div className='sidebar-container'>
            <section className='sidebar-snowflake-wrapper'>
              <div className='sidebar-snowflake'>
                <div className='snowflake-container1'>
                  <div className='snowflake-container2'>
                    <div className='snowflake-contaner3'>
                      <div className='snowflake-container4'>
                        <div className='canvas-wrapper'>
                          <canvas width="288" height="288"></canvas>
                        </div>
                        <div className='svg-wrapper'>
                          <img
                            src={stockDetail.banner_bottom_image}
                            className="compass-img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='snowflake-detail'>
                <div className='snowflake-wrapper'>
                  <p className='company-name'>{stockDetail.name}, Inc.
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="sc-h7xi2g-0 gedxnB"><path fillRule="evenodd" d="M9 3h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1V7a2 2 0 0 0-2-2H8V4a1 1 0 0 1 1-1Zm9 16v-1h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2ZM16 6H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-8.005 8.591.707-.707a1 1 0 0 1 .966-.259l-.259.26a.5.5 0 1 0 .707.706l.26-.259a1 1 0 0 1-.26.966l-.707.707a1 1 0 1 1-1.414-1.414Zm0-1.414a2.001 2.001 0 0 1 2.43-.309l.443-.443a2.001 2.001 0 0 1 .309-2.43l.707-.707a2 2 0 0 1 2.828 2.828l-.707.707a2.001 2.001 0 0 1-2.43.31l-.443.442c.453.767.35 1.772-.309 2.43l-.707.708a2 2 0 0 1-2.828-2.829l.707-.707Zm4.596-1.06-.259.258a1 1 0 0 0 .966-.259l.707-.707a1 1 0 0 0-1.414-1.414l-.707.707a1 1 0 0 0-.259.966l.259-.259a.5.5 0 1 1 .707.707Z" clipRule="evenodd"></path></svg></span>
                  </p>
                  <p className='snowflake-text title'>{stockDetail.description}</p>
                  <p className='snowflake-text market-cup'>Market Cap: US${stockDetail.market_cap}</p>
                </div>
                {/* <section className='watchlist-sidebar'>
                  <button className='stock-header-button watchlist'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" data-cy-id="outline-star" opacity="1" role="presentation" className="sc-1fw3rv4-0 fNZXbt"><path fillRule="evenodd" clipRule="evenodd" d="M13.3997 10.4935L12.0001 6.21582L10.6004 10.4935L6.09517 10.4935L9.73999 13.1232L8.34319 17.3922L12.0001 14.7538L15.6569 17.3922L14.2601 13.1232L17.9049 10.4935H13.3997ZM9.87544 9.49352H6.09517C5.12476 9.49352 4.72311 10.7367 5.51007 11.3045L8.56236 13.5067L7.39277 17.0813C7.09173 18.0013 8.14321 18.7696 8.92829 18.2032L12.0001 15.9869L15.0718 18.2032C15.8569 18.7696 16.9084 18.0013 16.6073 17.0813L15.4377 13.5067L18.49 11.3045C19.277 10.7367 18.8753 9.49352 17.9049 9.49352H14.1247L12.9505 5.90485C12.6499 4.98614 11.3502 4.98614 11.0496 5.90485L9.87544 9.49352Z"></path></svg>
                    Add to watchlist
                  </button>
                  <button className='stock-header-button other download'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sc-9nudij-0 bwXXkQ"><path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12ZM17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11Z"></path></svg>
                  </button>
                </section> */}
              </div>
              <div className='nav-bar-wrapper'>
                <nav className='nav-bar'>
                  {navItems.map(item => (
                    <ul key={item.id}>
                      <li onClick={() => handleNavClick(item.id)} className={activeItem === item.id ? 'clicked' : ''}>
                        <a>
                          <label>{item.id}</label>
                          {item.label}
                        </a>
                      </li>
                    </ul>
                  ))}
                </nav>
              </div>
            </section>
          </div>
        </div>
        <div className='company-detail'>
          <article className='company-report'>
            <div className='detail-section-container'>
              {navItems.slice(0, 4).map((navItem, navIndex) => (
                <section className="detail-section">
                  <div key={navItem.id} ref={el => sectionsRef.current[navIndex] = el}>
                    {stockDetail.detail && stockDetail.detail
                      .filter(detail_text => detail_text.category === navItem.label)
                      .map((detail_text, index) => (
                        <React.Fragment key={`${navItem.id}-${index}`}>
                          {index > 0 && <hr />}
                          <div className="outline">
                            <h2 className={`header-section ${index === 0 ? 'parent' : 'child'} index`}>
                              {navIndex + 1}{index > 0 ? `.${index}` : ''}
                            </h2>
                            <h2 className={`header-section ${index === 0 ? 'parent' : 'child'}`}>{detail_text.title}</h2>
                          </div>
                          <p dangerouslySetInnerHTML={{ __html: detail_text.content ? detail_text.content.replace(/\n/g, '<br>') : '' }} />
                          {detail_text.chart_image && (
                            <div className='chart-image-container'>
                              <img src={detail_text.chart_image}/>
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    {stockDetail.detail &&
                      stockDetail.detail.filter(detail_text => detail_text.category === navItem.label).length === 0 && (
                        <div className="outline">
                          <h2 className="header-section parent index">{navIndex + 1}</h2>
                          <h2 className="header-section parent">{navItem.label}</h2>
                        </div>
                      )}
                  </div>
                </section>
              ))}
              <section className='detail-section' ref={el => sectionsRef.current[5] = el}>
              {stockDetail.detail && stockDetail.detail
                  .filter(detail_text => detail_text.category === 'Download Full Stock Pitch')
                  .map((detail_text, index) => (
                    <>
                      {index > 0 && <hr />}
                      <div className='outline'>
                        <h2 className={`header-section ${index === 0 ? 'parent' : 'child'} index`}>{index === 0 ? 5 : `5.${index}`}</h2>
                        <h2 className={`header-section ${index === 0 ? 'parent' : 'child'}`}>{detail_text.title}</h2>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: detail_text.content ? detail_text.content.replace(/\n/g, '<br>') : '' }} />
                    </>
                  ))}
                {stockDetail.detail &&
                  stockDetail.detail.filter(detail_text => detail_text.category === 'Download Full Stock Pitch').length === 0 && (
                    <div className='outline'>
                      <h2 className='header-section parent index'>5</h2>
                      <a href={`${apiPath}/downloadPDF?fileKey=${encodeURIComponent(stockDetail.pdf_file)}`} className='header-section parent download-link'>Download Full Stock Pitch</a>
                    </div>
                  )}
              </section>
              <section className='detail-section' ref={el => sectionsRef.current[4] = el}>
                <div className='outline'>
                  <h2 className='header-section parent index'>6</h2>
                  <h2 className='header-section parent'>AI Advisor</h2>
                </div>
                  <div id="aichat-container">
                  </div>
              </section>
              <section className='detail-section' ref={el => sectionsRef.current[6] = el}>
                <div className='outline'>
                  <h2 className='header-section parent index'>7</h2>
                  <h2 className='header-section parent'>User Comments</h2>
                </div>
                <FastCommentsCommentWidget tenantId="demo" />
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default StockDetail;
