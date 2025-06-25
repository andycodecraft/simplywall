import './StockDetail.css'

import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FastCommentsCommentWidget } from 'fastcomments-react'
import { getTopStockById } from 'helpers/api';
import { apiPath } from 'config';
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
    if (activeItem === '6') {
      setIframeShow(true);
    }
  }, [activeItem]);

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
                {iframeShow && (
                  <div className="aichat-container">
                    <div className="aichat-header">
                      <div className="aichat-headerbar">
                        <svg width="15" height="15" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.6562 11.7478L12.9799 10.0238L11.2521 5.34375C11.12 4.98542 10.8812 4.67621 10.5679 4.45781C10.2546 4.2394 9.88186 4.12231 9.49994 4.12231C9.11803 4.12231 8.7453 4.2394 8.43199 4.45781C8.11869 4.67621 7.87988 4.98542 7.74775 5.34375L6.02369 10.0238L1.34369 11.7478C0.98536 11.8799 0.676151 12.1187 0.457749 12.432C0.239347 12.7454 0.122253 13.1181 0.122253 13.5C0.122253 13.8819 0.239347 14.2546 0.457749 14.568C0.676151 14.8813 0.98536 15.1201 1.34369 15.2522L6.01994 16.9762L7.74775 21.6562C7.87988 22.0146 8.11869 22.3238 8.43199 22.5422C8.7453 22.7606 9.11803 22.8777 9.49994 22.8777C9.88186 22.8777 10.2546 22.7606 10.5679 22.5422C10.8812 22.3238 11.12 22.0146 11.2521 21.6562L12.9762 16.98L17.6562 15.2522C18.0145 15.1201 18.3237 14.8813 18.5421 14.568C18.7605 14.2546 18.8776 13.8819 18.8776 13.5C18.8776 13.1181 18.7605 12.7454 18.5421 12.432C18.3237 12.1187 18.0145 11.8799 17.6562 11.7478ZM11.7143 15.0441C11.5616 15.1003 11.4229 15.1891 11.3079 15.3042C11.1928 15.4192 11.104 15.5579 11.0478 15.7106L9.49994 19.9012L7.95588 15.7106C7.8996 15.5579 7.81086 15.4192 7.69578 15.3042C7.5807 15.1891 7.44202 15.1003 7.28932 15.0441L3.09869 13.5L7.28932 11.9559C7.44202 11.8997 7.5807 11.8109 7.69578 11.6958C7.81086 11.5808 7.8996 11.4421 7.95588 11.2894L9.49994 7.09875L11.044 11.2894C11.1003 11.4421 11.189 11.5808 11.3041 11.6958C11.4192 11.8109 11.5579 11.8997 11.7106 11.9559L15.9012 13.5L11.7143 15.0441ZM12.1249 3.75C12.1249 3.45163 12.2435 3.16548 12.4544 2.9545C12.6654 2.74353 12.9516 2.625 13.2499 2.625H14.3749V1.5C14.3749 1.20163 14.4935 0.915483 14.7044 0.704505C14.9154 0.493526 15.2016 0.375 15.4999 0.375C15.7983 0.375 16.0845 0.493526 16.2954 0.704505C16.5064 0.915483 16.6249 1.20163 16.6249 1.5V2.625H17.7499C18.0483 2.625 18.3345 2.74353 18.5454 2.9545C18.7564 3.16548 18.8749 3.45163 18.8749 3.75C18.8749 4.04837 18.7564 4.33452 18.5454 4.5455C18.3345 4.75647 18.0483 4.875 17.7499 4.875H16.6249V6C16.6249 6.29837 16.5064 6.58452 16.2954 6.7955C16.0845 7.00647 15.7983 7.125 15.4999 7.125C15.2016 7.125 14.9154 7.00647 14.7044 6.7955C14.4935 6.58452 14.3749 6.29837 14.3749 6V4.875H13.2499C12.9516 4.875 12.6654 4.75647 12.4544 4.5455C12.2435 4.33452 12.1249 4.04837 12.1249 3.75ZM22.6249 8.25C22.6249 8.54837 22.5064 8.83452 22.2954 9.0455C22.0845 9.25647 21.7983 9.375 21.4999 9.375H21.1249V9.75C21.1249 10.0484 21.0064 10.3345 20.7954 10.5455C20.5845 10.7565 20.2983 10.875 19.9999 10.875C19.7016 10.875 19.4154 10.7565 19.2044 10.5455C18.9935 10.3345 18.8749 10.0484 18.8749 9.75V9.375H18.4999C18.2016 9.375 17.9154 9.25647 17.7044 9.0455C17.4935 8.83452 17.3749 8.54837 17.3749 8.25C17.3749 7.95163 17.4935 7.66548 17.7044 7.4545C17.9154 7.24353 18.2016 7.125 18.4999 7.125H18.8749V6.75C18.8749 6.45163 18.9935 6.16548 19.2044 5.9545C19.4154 5.74353 19.7016 5.625 19.9999 5.625C20.2983 5.625 20.5845 5.74353 20.7954 5.9545C21.0064 6.16548 21.1249 6.45163 21.1249 6.75V7.125H21.4999C21.7983 7.125 22.0845 7.24353 22.2954 7.4545C22.5064 7.66548 22.6249 7.95163 22.6249 8.25Z" fill="#7600BC" />
                        </svg>
                        <span>Ask our AI Stock Bot:</span>
                      </div>
                    </div>
                    <iframe
                      id="chat-bot-container"
                      src="https://chainlit-llm-polished-sun-2054.fly.dev/"
                      width="100%"
                      height="600px"
                      title="Embedded Webpage"
                      style={{ border: 'none' }}
                    />
                  </div>
                )}
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
