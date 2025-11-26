// components/ChartCard.jsx
import React from 'react';

const ChartCard = ({ title, chartType, data, dataKey, nameKey }) => {
  // Simple chart rendering - replace with Recharts in production
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <div className="h-48 flex items-end space-x-2 justify-center">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="bg-blue-500 rounded-t w-8 transition-all duration-500"
                  style={{ height: `${item[dataKey] * 2}px` }}
                ></div>
                <span className="text-xs text-gray-600 mt-2">{item[nameKey]}</span>
              </div>
            ))}
          </div>
        );
      case 'bar':
        return (
          <div className="h-48 flex items-end space-x-4 justify-center">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t w-12 transition-all duration-500"
                  style={{ height: `${item[dataKey] * 2}px` }}
                ></div>
                <span className="text-xs text-gray-600 mt-2">{item[nameKey]}</span>
                <span className="text-sm font-semibold mt-1">{item[dataKey]}</span>
              </div>
            ))}
          </div>
        );
      case 'scatter':
        return (
          <div className="h-48 relative border-l-2 border-b-2 border-gray-300">
            {data.map((item, index) => (
              <div
                key={index}
                className="absolute w-3 h-3 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${(item[nameKey] / 300) * 100}%`,
                  bottom: `${(item[dataKey] / 100) * 100}%`
                }}
              ></div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      {renderChart()}
    </div>
  );
};

export default ChartCard;