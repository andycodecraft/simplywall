import React from 'react';
import './StockAdTable.css'; // Assuming you have a separate CSS file for styling

const data = [
  { stockPitch: "Long ThredUp - October 2024", hedgeFund: "Fund A", return: "135.0%", days: 281 },
  { stockPitch: "Long Carvana - May 2024", hedgeFund: "Fund A", return: "84.5%", days: 355 },
  { stockPitch: "Long Pathward Fin - March 2024", hedgeFund: "Fund B", return: "64.0%", days: 265 },
  { stockPitch: "Short Five Below - Nov 2024", hedgeFund: "Fund A", return: "51.0%", days: 274 },
  { stockPitch: "Short Tesla - Feb 2025", hedgeFund: "Fund C", return: "47.0%", days: 42 },
  { stockPitch: "Short Dave & Buster's - Jan 2025", hedgeFund: "Fund C", return: "43.0%", days: 43 },
  { stockPitch: "Long Alibaba - April 2024", hedgeFund: "Fund B", return: "39.0%", days: 362 },
  { stockPitch: "Long Interactive - June 2025", hedgeFund: "Fund A", return: "29.6%", days: 59 },
  { stockPitch: "Short Apple - Dec 2023", hedgeFund: "Fund C", return: "28.2%", days: 268 },
  { stockPitch: "Long Olo - Nov 2024", hedgeFund: "Fund E", return: "25.5%", days: 73 },
  { stockPitch: "Long Netflix - Oct 2024", hedgeFund: "Fund F", return: "22.4%", days: 367 },
  { stockPitch: "Long Dollar General - Jan 2025", hedgeFund: "Fund G", return: "20.7%", days: 273 },
  { stockPitch: "Short Xpel August 2023", hedgeFund: "Fund C", return: "19.5%", days: 465 },
  { stockPitch: "Long Jackson Fin - June 2024", hedgeFund: "Fund G", return: "18.3%", days: 249 },
  { stockPitch: "Long Pactiv - August 2024", hedgeFund: "Fund G", return: "17.2%", days: 53 },
];

const StockAdTable = () => {
  return (
    <table className='stock-ad-table'>
      <thead>
        <tr>
          <th>Stock Pitch</th>
          <th>Hedge Fund</th>
          <th>% Return</th>
          <th>Days Since Write-up</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.stockPitch}</td>
            <td>{item.hedgeFund}</td>
            <td style={{ backgroundColor: getColor(item.return) }}>{item.return}</td>
            <td>{item.days}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const getColor = (returnPercentage) => {
  const value = parseFloat(returnPercentage);
  if (value >= 100) return '#63BE7B';
  if (value >= 60) return '#8FCB7E';
  if (value >= 30) return '#AFD480';
  return '#C1D981';
};

export default StockAdTable;
