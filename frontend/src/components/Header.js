import React from 'react';
import './Header.css';

const Header = ({ onBackToHome }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-top">
          {onBackToHome && (
            <button className="back-button" onClick={onBackToHome}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Home
            </button>
          )}
        </div>
        <h1 className="header-title">Stock Trend Analyzer</h1>
        <p className="header-subtitle">Real-time market analysis powered by AI and machine learning</p>
      </div>
    </header>
  );
};

export default Header;
