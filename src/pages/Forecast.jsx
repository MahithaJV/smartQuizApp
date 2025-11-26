// pages/Forecast.jsx
import React, { useState } from 'react';
import ChartCard from '../components/ChartCard';

const Forecast = () => {
  const [timeRange, setTimeRange] = useState('72h');

  const forecastData = {
    '24h': [
      { type: 'Respiratory', patients: 35 },
      { type: 'Cardiac', patients: 18 },
      { type: 'General', patients: 22 },
      { type: 'Emergency', patients: 15 }
    ],
    '48h': [
      { type: 'Respiratory', patients: 52 },
      { type: 'Cardiac', patients: 20 },
      { type: 'General', patients: 25 },
      { type: 'Emergency', patients: 18 }
    ],
    '72h': [
      { type: 'Respiratory', patients: 45 },
      { type: 'Cardiac', patients: 22 },
      { type: 'General', patients: 28 },
      { type: 'Emergency', patients: 16 }
    ]
  };

  const correlationData = [
    { aqi: 50, patients: 20 },
    { aqi: 100, patients: 35 },
    { aqi: 150, patients: 52 },
    { aqi: 200, patients: 68 },
    { aqi: 250, patients: 85 }
  ];

  const surgeJustification = `Rise in PM2.5 levels (AQI: 156) combined with sudden temperature drop and elevated humidity levels correlates with a 37% increase in respiratory cases. Historical data shows similar patterns during previous pollution spikes.`;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Surge Forecast Analysis</h1>
          <p className="text-gray-600">AI-powered patient inflow predictions and correlations</p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm border">
          {['24h', '48h', '72h'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-md transition-all ${
                timeRange === range
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Type Forecast */}
        <ChartCard
          title={`Patient Type Forecast - ${timeRange}`}
          chartType="bar"
          data={forecastData[timeRange]}
          dataKey="patients"
          nameKey="type"
        />

        {/* AQI-Patient Correlation */}
        <ChartCard
          title="AQI - Patient Correlation"
          chartType="scatter"
          data={correlationData}
          dataKey="patients"
          nameKey="aqi"
        />
      </div>

      {/* Surge Justification Panel */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-purple-100 p-2 rounded-lg">
            <span className="text-2xl">🧠</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">AI Surge Justification</h3>
            <p className="text-sm text-gray-600">Explainable AI insights behind the forecast</p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 border">
          <p className="text-gray-700 leading-relaxed">{surgeJustification}</p>
        </div>

        {/* Key Factors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-red-600">🌫️</span>
              <span className="font-semibold text-red-700">Air Quality</span>
            </div>
            <p className="text-sm text-red-600">PM2.5: 68 μg/m³ (Unhealthy)</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-blue-600">🌡️</span>
              <span className="font-semibold text-blue-700">Weather</span>
            </div>
            <p className="text-sm text-blue-600">Temp drop: 32°C → 28°C</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-yellow-600">📈</span>
              <span className="font-semibold text-yellow-700">Historical Pattern</span>
            </div>
            <p className="text-sm text-yellow-600">37% increase expected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;