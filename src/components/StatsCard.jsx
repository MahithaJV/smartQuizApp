// components/StatsCard.jsx
import React from 'react';

const StatsCard = ({ title, value, change, trend, icon, color }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
    yellow: 'from-yellow-500 to-yellow-600'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
          <div className={`flex items-center space-x-1 mt-2 ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            <span>{trend === 'up' ? '↗' : '↘'}</span>
            <span className="text-sm font-medium">{change}</span>
            <span className="text-sm">from yesterday</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[color]}`}>
          <span className="text-2xl text-white">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;