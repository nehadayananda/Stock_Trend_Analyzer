import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';

const TechnicalIndicators = ({ data }) => {
  const chartData = data.map(item => ({
    date: new Date(item.index).toLocaleDateString(),
    close: item.Close,
    movingAvg: item.Moving_Avg,
    rsi: item.RSI
  })).filter(item => item.movingAvg !== null);

  return (
    <div className="indicators-section">
      <div className="chart-container">
        <h2 className="chart-title">Price with Moving Average</h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" stroke="#1e293b" />
            <YAxis stroke="#1e293b" />
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.95)', 
                border: 'none', 
                borderRadius: '10px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }} 
            />
            <Legend />
            <Line type="monotone" dataKey="close" stroke="#3b82f6" strokeWidth={3} name="Close Price" />
            <Line type="monotone" dataKey="movingAvg" stroke="#60a5fa" strokeWidth={2} name="20-Day MA" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2 className="chart-title">Relative Strength Index (RSI)</h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" stroke="#1e293b" />
            <YAxis domain={[0, 100]} stroke="#1e293b" />
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.95)', 
                border: 'none', 
                borderRadius: '10px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }} 
            />
            <Legend />
            <Line type="monotone" dataKey="rsi" stroke="#3b82f6" strokeWidth={3} name="RSI" />
            <Line type="monotone" dataKey={() => 70} stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" name="Overbought (70)" />
            <Line type="monotone" dataKey={() => 30} stroke="#60a5fa" strokeWidth={2} strokeDasharray="5 5" name="Oversold (30)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TechnicalIndicators;
