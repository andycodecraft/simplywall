import React, { useEffect, useState } from 'react';

import { getStocks, getTopStocks } from 'helpers/api'
import { getEncryptData } from 'helpers/url';
import { apiPath } from 'config';
import { Link } from 'react-router-dom';
import logo from 'assets/image/download.svg'
import './MainPage.css'

const Discover = () => {
  const [activeTab, setActiveTab] = useState('top');
  const [stocks, setStocks] = useState([]);
  const [topStocks, setTopStocks] = useState([]);
  const [error, setError] = useState(null);

  const tablistfunc = (evt, tab) => {
    evt.preventDefault();
    setActiveTab(tab);
  }

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date ? new Date(date).toLocaleDateString('en-US', options) : '';
  };

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await getStocks();
        setStocks(response);
      } catch (err) {
        setError(err);
        console.log(error);
      }
    };

    const fetchTopStocks = async () => {
      try {
        const response = await getTopStocks();
        setTopStocks(response);
      } catch (err) {
        setError(err);
        console.log(error);
      }
    }

    fetchStocks();
    fetchTopStocks();
  }, []);

  return (
    <>
      <div className='sticky-bar lg-none'>
        <div className='tablist'>
          <a href="#"
            className={`tablist-btn ${activeTab === 'top' ? 'tabactive' : ''}`}
            onClick={(e) => tablistfunc(e, 'top')}
          >
            Top Ideas
          </a>
          <a href="#"
            className={`tablist-btn ${activeTab === 'all' ? 'tabactive' : ''}`}
            onClick={(e) => tablistfunc(e, 'all')}
          >
            All Ideas
          </a>
        </div>
        <div className='ask-idea-container'>
        </div>
      </div>
      {activeTab === 'top' && (
        <div>
          <h1 className='discover-header-title'>
            Top Ideas
          </h1>
          <div className='idea-list-wrap'>
            <div className='idea-list-container'>
              <div className='idea-list'>
                {topStocks.map((topStock, index) => (
                  <Link
                    key={`topstock-link-${topStock.id}`}
                    to={`/main/detail/${getEncryptData(topStock.id)}`}
                    className="list-grid-container"
                  >
                    <div className="list-grid">
                      {/* <div className="list-image">
                        <img src={topStock.banner_top_image} className="main-img" alt={`top-stock-${index + 1}.avif`} />
                      </div> */}
                      <div className="idea-description">
                        <div className="description">
                          {topStock.name}
                          {(topStock.recommendation || topStock.sub_industry || topStock.posted_date) && 
                            <div className='spacing' />
                          }
                          {topStock.recommendation && 
                            <div className='sub-description'>
                              Recommendation: {topStock.recommendation}
                            </div>
                          }
                          {topStock.sub_industry && 
                            <div className='sub-description'>
                              Sub-Industry: {topStock.sub_industry}
                            </div>
                          }
                          {topStock.posted_date && 
                            <div className='sub-description'>
                              Idea posted: {formatDate(topStock.posted_date)}
                            </div>
                          }
                        </div>
                        <div className="compass-container">
                          <img
                            src={topStock.banner_bottom_image}
                            className="compass-img"
                          >
                          </img>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'all' && (
        <div className='stocks-table-container'>
          <table className='stocks-table'>
            <thead className='stocks-table-header'>
              <tr>
                <th className='table-header-company'>Company Name</th>
                <th>Symbol/Ticker</th>
                <th>AI Advisor Rating</th>
                <th>Advice Type</th>
                <th>$ Stock Price</th>
                <th>$ Market Cap</th>
                <th>Sub-Industry</th>
                <th>Risk Level</th>
                <th>Est. % Upside</th>
                <th>% Return Since Write-Up</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {stocks.length > 0 && stocks.map((stock, index) => (
                <tr className='stocks-table-row' key={`stock-${index}`}>
                  <td>
                    <div tabIndex="-1">{stock.company_name}</div>
                  </td>
                  <td className='cell-ideas'>
                    <div className='company-link-style'>{stock.symbol_ticker}</div>
                  </td>
                  <td className='cell-ideas'>
                    <div className='positive'>{stock.ai_rating}</div>
                  </td>
                  <td className='cell-ideas'>
                    <div tabIndex="-1">{stock.advice_type}</div>
                  </td>
                  <td className='cell-ideas'>
                    <div tabIndex="-1">${stock.stock_price}</div>
                  </td>
                  <td className='cell-ideas'>
                    <div tabIndex="-1">${stock.market_cap.toLocaleString()}</div>
                  </td>
                  <td className='cell-ideas'>
                    <div tabIndex="-1">{stock.sub_industry}</div>
                  </td>
                  <td className='cell-ideas'>
                    <div tabIndex="-1">{stock.risk_level}</div>
                  </td>
                  <td className='cell-ideas'>
                    <div tabIndex="-1" className={stock.est_upside > 0 ? 'positive' : 'negative'}>{stock.est_upside}%</div>
                  </td>
                  <td className='cell-ideas'>
                    <div tabIndex="-1" className={stock.return_rating > 0 ? 'positive' : 'negative'}>{stock.return_rating}%</div>
                  </td>
                  <td className='cell-ideas'>
                    <div tabIndex="-1">
                      <a
                        href={`${apiPath}/downloadPDF?fileKey=${encodeURIComponent(stock.pdf_file)}`}
                        className='download-link'
                      >
                        <img src={logo} width="25" alt="" className="logo-images" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export default Discover;
