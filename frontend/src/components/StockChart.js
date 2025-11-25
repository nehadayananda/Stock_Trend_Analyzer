import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';

const StockChart = ({ data, symbol }) => {
  const chartData = data.map(item => ({
    date: new Date(item.index).toLocaleDateString(),
    close: item.Close,
    open: item.Open,
    high: item.High,
    low: item.Low
  }));

  return (
    <div className="chart-container">
      <h2 className="chart-title">Stock Price History - {symbol}</h2>
      <ResponsiveContainer width="100%" height={400}>
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
          <Line type="monotone" dataKey="high" stroke="#60a5fa" strokeWidth={2} name="High" />
          <Line type="monotone" dataKey="low" stroke="#1e40af" strokeWidth={2} name="Low" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
