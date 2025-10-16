import React, { useEffect, useState } from 'react';

import { getStocks, getTopStocks, getNews } from 'helpers/api'
import { getEncryptData } from 'helpers/url';
import { apiPath } from 'config';
import { Link } from 'react-router-dom';
import logo from 'assets/image/download.svg'
import './MainPage.css'

const Discover = () => {
  const Menu = {
    TOPS: 1,
    PITCHES: 2,
    NEWS: 3,
    ACCOUNT: 4,
    PREMIUM: 5,
    PICKS: 6,
    NEWSLETTER: 7
  };
  const [activeTab, setActiveTab] = useState(Menu.TOPS);
  const [stocks, setStocks] = useState([]);
  const [topStocks, setTopStocks] = useState([]);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

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

    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response);
      } catch (err) {
        setError(err);
        console.log(error);
      }
    }

    fetchStocks();
    fetchTopStocks();
    fetchNews();
  }, []);

  return (
    <div className='page-container'>
      <div className='nav-menu'>
        <ul className="menu-items">
          <li className={`menu-item ${activeTab === Menu.TOPS ? 'selected' : ''}`} onClick={() => setActiveTab(Menu.TOPS)}>Top AI Stock Ideas</li>
          <li className={`menu-item ${activeTab === Menu.PITCHES ? 'selected' : ''}`} onClick={() => setActiveTab(Menu.PITCHES)}>View All Stock Ideas</li>
          <li className={`menu-item ${activeTab === Menu.NEWS ? 'selected' : ''}`} onClick={() => setActiveTab(Menu.NEWS)}>Relevant News</li>
          <li className={`menu-item ${activeTab === Menu.ACCOUNT ? 'selected' : ''}`} onClick={() => setActiveTab(Menu.ACCOUNT)}>Account</li>
          <li className={`menu-item ${activeTab === Menu.PREMIUM ? 'selected' : ''}`} onClick={() => setActiveTab(Menu.PREMIUM)}>About Premium</li>
          <li className={`menu-item ${activeTab === Menu.PICKS ? 'selected' : ''}`} onClick={() => setActiveTab(Menu.PICKS)}>Explore Top Picks</li>
          <li className={`menu-item ${activeTab === Menu.NEWSLETTER ? 'selected' : ''}`} onClick={() => setActiveTab(Menu.NEWSLETTER)}>Free Newsletter</li>
        </ul>
      </div>
      <div className='sub-page'>
        {/* <div className='sticky-bar lg-none'>
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
        </div> */}
        {activeTab === Menu.TOPS && (
          <div className='top-ideas-wrapper'>
            <h1 className='discover-header-title'>
              Top AI Stock Ideas
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
        {activeTab === Menu.PITCHES && (
          <div>
            <h1 className='discover-header-title'>
              All Stock Ideas
            </h1>
            <div className='stocks-table-container'>
              <table className='stocks-table'>
                <thead className='stocks-table-header'>
                  <tr>
                    <th className='long-header'>Company Name</th>
                    <th>Ticker</th>
                    <th>AI Score</th>
                    <th>% Est. Upside</th>
                    <th>Stock Direction</th>
                    <th className='long-header'>Specific Industry</th>
                    <th>Pitch Date</th>
                    <th>$ Price at Pitch</th>
                    <th>$ Price Today</th>
                    <th>% Return - Today</th>
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
                        <div className='positive'>{stock.ai_score}</div>
                      </td>
                      <td className='cell-ideas'>
                        <div className='positive'>{stock.est_update}%</div>
                      </td>
                      <td className='cell-ideas'>
                        <div tabIndex="-1">{stock.stock_direction}</div>
                      </td>
                      <td className='cell-ideas'>
                        <div tabIndex="-1">{stock.spec_industry}</div>
                      </td>
                      <td className='cell-ideas'>
                        <div tabIndex="-1">{formatDate(stock.pitch_date)}</div>
                      </td>
                      <td className='cell-ideas'>
                        <div tabIndex="-1">{stock.price_pitch}</div>
                      </td>
                      <td className='cell-ideas'>
                        <div tabIndex="-1">{stock.price_today}</div>
                      </td>
                      <td className='cell-ideas'>
                        <div tabIndex="-1" className={stock.return_today > 0 ? 'positive' : 'negative'}>{stock.return_today}%</div>
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
          </div>
        )}
        {activeTab === Menu.NEWS && (
          <div>
            <h1 className='discover-header-title'>Relevant News</h1>
            <div className='news-wrapper'>
              {news.map((item, index) => (
                <div className='news-item-wrapper'>
                  <a className='news-link'>
                    <img className='news-image' src={item['image_url']} alt='news image' />
                    <div className='news-detail'>
                      <h3>{item['title']}</h3>
                      <span className='company-link-style'>{item['ticker']}</span>
                      <span> </span>
                      <span className='negative'>{item['trend']}%</span>
                      <span className='spacer'></span>
                      <span className='news-date'>{item['date']}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Discover;
