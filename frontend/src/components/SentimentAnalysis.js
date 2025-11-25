import React from 'react';
import './Chart.css';

const SentimentAnalysis = ({ sentiment, symbol }) => {
  const total = sentiment.positive + sentiment.negative + sentiment.neutral;
  
  const getPercentage = (value) => {
    return total > 0 ? ((value / total) * 100).toFixed(1) : 0;
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Sentiment Analysis - {symbol}</h2>
      <div className="sentiment-grid">
        <div className="sentiment-card positive">
          <div className="sentiment-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
          </div>
          <h3>Positive</h3>
          <p className="sentiment-count">{sentiment.positive}</p>
          <p className="sentiment-percentage">{getPercentage(sentiment.positive)}%</p>
        </div>
        
        <div className="sentiment-card neutral">
          <div className="sentiment-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="15" x2="16" y2="15"></line>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <h3>Neutral</h3>
          <p className="sentiment-count">{sentiment.neutral}</p>
          <p className="sentiment-percentage">{getPercentage(sentiment.neutral)}%</p>
        </div>
        
        <div className="sentiment-card negative">
          <div className="sentiment-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
            </svg>
          </div>
          <h3>Negative</h3>
          <p className="sentiment-count">{sentiment.negative}</p>
          <p className="sentiment-percentage">{getPercentage(sentiment.negative)}%</p>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
