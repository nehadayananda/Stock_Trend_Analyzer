import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';

const PredictionChart = ({ data, symbol }) => {
  const chartData = data.map((item, index) => ({
    index: index + 1,
    actual: item.Actual,
    predicted: item.Predicted
  }));

  return (
    <div className="chart-container">
      <h2 className="chart-title">Price Predictions - {symbol}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="index" stroke="#1e293b" label={{ value: 'Test Data Points', position: 'insideBottom', offset: -5 }} />
          <YAxis stroke="#1e293b" label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip 
            contentStyle={{ 
              background: 'rgba(255, 255, 255, 0.95)', 
              border: 'none', 
              borderRadius: '10px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }} 
          />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={3} name="Actual Price" />
          <Line type="monotone" dataKey="predicted" stroke="#60a5fa" strokeWidth={2} strokeDasharray="5 5" name="Predicted Price" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictionChart;
