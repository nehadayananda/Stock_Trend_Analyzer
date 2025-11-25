import React, { useState } from 'react';
import axios from 'axios';
import './StockAnalyzer.css';
import StockChart from './StockChart';
import TechnicalIndicators from './TechnicalIndicators';
import PredictionChart from './PredictionChart';
import SentimentAnalysis from './SentimentAnalysis';

const API_BASE_URL = 'http://localhost:5000/api';

const StockAnalyzer = () => {
  const [symbol, setSymbol] = useState('AAPL');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [stockData, setStockData] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [sentiment, setSentiment] = useState(null);
  const [smsStatus, setSmsStatus] = useState('');

  const analyzeStock = async () => {
    setLoading(true);
    setError('');
    setSmsStatus('');
    
    try {
      const response = await axios.post(`${API_BASE_URL}/stock/analyze`, {
        symbol: symbol.toUpperCase()
      });
      
      setStockData(response.data);
      
      // Fetch predictions
      const predResponse = await axios.post(`${API_BASE_URL}/stock/predict`, {
        symbol: symbol.toUpperCase()
      });
      setPredictions(predResponse.data);
      
      // Fetch sentiment
      try {
        const sentResponse = await axios.post(`${API_BASE_URL}/stock/sentiment`, {
          symbol: symbol.toUpperCase()
        });
        setSentiment(sentResponse.data);
      } catch (err) {
        console.log('Sentiment analysis failed:', err);
      }
      
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch stock data');
    } finally {
      setLoading(false);
    }
  };

  const sendSMS = async () => {
    if (!phoneNumber || !phoneNumber.startsWith('+')) {
      setError('Please enter a valid phone number with country code (e.g., +1234567890)');
      return;
    }
    
    setLoading(true);
    setSmsStatus('');
    
    try {
      const response = await axios.post(`${API_BASE_URL}/notifications/sms`, {
        phone_number: phoneNumber,
        symbol: symbol.toUpperCase()
      });
      
      setSmsStatus(response.data.message);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send SMS');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="stock-analyzer">
      <div className="input-section">
        <div className="input-group">
          <label>Stock Symbol</label>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            placeholder="e.g., AAPL, MSFT, GOOGL"
            className="input-field"
          />
        </div>
        
        <div className="input-group">
          <label>Phone Number (Optional)</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+1234567890"
            className="input-field"
          />
        </div>
        
        <div className="button-group">
          <button 
            onClick={analyzeStock} 
            disabled={loading || !symbol}
            className="btn btn-primary"
          >
            {loading ? 'Analyzing...' : 'Analyze Stock'}
          </button>
          
          {stockData && phoneNumber && (
            <button 
              onClick={sendSMS} 
              disabled={loading}
              className="btn btn-secondary"
            >
              Send SMS Report
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}
      
      {smsStatus && (
        <div className="alert alert-success">
          {smsStatus}
        </div>
      )}

      {stockData && (
        <div className="results-section">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Latest Close</h3>
              <p className="stat-value">${stockData.latest.close.toFixed(2)}</p>
            </div>
            
            <div className="stat-card">
              <h3>Moving Average</h3>
              <p className="stat-value">
                {stockData.latest.moving_avg ? `$${stockData.latest.moving_avg.toFixed(2)}` : 'N/A'}
              </p>
            </div>
            
            <div className="stat-card">
              <h3>RSI</h3>
              <p className="stat-value">
                {stockData.latest.rsi ? stockData.latest.rsi.toFixed(2) : 'N/A'}
              </p>
            </div>
            
            <div className="stat-card">
              <h3>Volume</h3>
              <p className="stat-value">
                {stockData.latest.volume.toLocaleString()}
              </p>
            </div>
          </div>

          <StockChart data={stockData.historical_data} symbol={stockData.symbol} />
          
          <TechnicalIndicators data={stockData.historical_data} />
          
          {predictions && (
            <PredictionChart data={predictions.predictions} symbol={stockData.symbol} />
          )}
          
          {sentiment && (
            <SentimentAnalysis sentiment={sentiment.sentiment} symbol={stockData.symbol} />
          )}
        </div>
      )}
    </div>
  );
};

export default StockAnalyzer;
