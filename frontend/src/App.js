import React, { useState } from 'react';
import './App.css';
import StockAnalyzer from './components/StockAnalyzer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

function App() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  const handleGetStarted = () => {
    setShowAnalyzer(true);
  };

  const handleBackToHome = () => {
    setShowAnalyzer(false);
  };

  return (
    <div className="App">
      {!showAnalyzer ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <>
          <Header onBackToHome={handleBackToHome} />
          <div className="container">
            <StockAnalyzer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
