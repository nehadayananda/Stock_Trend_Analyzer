import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-badge">AI-Powered Analysis</div>
            <h1 className="hero-title">
              Make Smarter Investment Decisions with
              <span className="gradient-text"> Real-Time Market Intelligence</span>
            </h1>
            <p className="hero-subtitle">
              Advanced stock analysis powered by machine learning. Get technical indicators, 
              price predictions, and sentiment analysis in seconds.
            </p>
            <div className="hero-buttons">
              <button className="btn-hero primary" onClick={onGetStarted}>
                Start Analyzing
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button className="btn-hero secondary">
                Watch Demo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Stocks Analyzed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Real-time</div>
                <div className="stat-label">Market Data</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="chart-preview">
              <div className="chart-line"></div>
              <div className="chart-bars">
                <div className="bar" style={{height: '60%'}}></div>
                <div className="bar" style={{height: '80%'}}></div>
                <div className="bar" style={{height: '45%'}}></div>
                <div className="bar" style={{height: '90%'}}></div>
                <div className="bar" style={{height: '70%'}}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-header">
          <h2 className="section-title">Powerful Features for Smart Trading</h2>
          <p className="section-subtitle">Everything you need to analyze stocks like a professional trader</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>Real-Time Stock Data</h3>
            <p>Access live market data from thousands of stocks with instant updates and historical analysis.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3>Technical Indicators</h3>
            <p>Advanced indicators including Moving Averages, RSI, and more to identify trends and opportunities.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>AI Price Predictions</h3>
            <p>Machine learning models analyze historical data to forecast future price movements with high accuracy.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3>Sentiment Analysis</h3>
            <p>Natural language processing to gauge market sentiment and investor mood around specific stocks.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon red">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18"></path>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              </svg>
            </div>
            <h3>Interactive Charts</h3>
            <p>Beautiful, responsive charts with zoom, pan, and hover interactions for detailed analysis.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon pink">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3>SMS Alerts</h3>
            <p>Get instant notifications about your stock analysis directly to your phone via SMS.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Get professional stock analysis in three simple steps</p>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Enter Stock Symbol</h3>
              <p>Type in any stock ticker symbol like AAPL, MSFT, or GOOGL</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>AI Analysis</h3>
              <p>Our algorithms analyze historical data, trends, and market sentiment</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Get Insights</h3>
              <p>View comprehensive analysis with charts, predictions, and recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Start Analyzing?</h2>
          <p>Join thousands of traders making smarter investment decisions</p>
          <button className="btn-cta" onClick={onGetStarted}>
            Get Started Now
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Stock Trend Analyzer</h4>
            <p>AI-powered stock market analysis platform</p>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Real-time Data</li>
              <li>Technical Analysis</li>
              <li>Price Predictions</li>
              <li>Sentiment Analysis</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Support</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Stock Trend Analyzer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
