// pages/Settings.jsx
import React, { useState } from 'react';

const Settings = () => {
  const [thresholds, setThresholds] = useState({
    surgeAlert: 70,
    staffingCritical: 15,
    icuCritical: 5,
    aqiWarning: 100,
    aqiCritical: 150
  });

  const [integrations, setIntegrations] = useState({
    aqiSource: 'openweather',
    weatherAPI: 'enabled',
    hospitalDB: 'connected'
  });

  const handleThresholdChange = (key, value) => {
    setThresholds(prev => ({
      ...prev,
      [key]: parseInt(value)
    }));
  };

  const handleIntegrationToggle = (key, value) => {
    setIntegrations(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">System Settings</h1>
        <p className="text-gray-600">Configure AI agent parameters and integrations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alert Thresholds */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Alert Thresholds</h2>
          <div className="space-y-4">
            {[
              { key: 'surgeAlert', label: 'Surge Alert Threshold (%)', min: 50, max: 90 },
              { key: 'staffingCritical', label: 'Critical Staff Shortage', min: 5, max: 30 },
              { key: 'icuCritical', label: 'Critical ICU Beds', min: 2, max: 15 },
              { key: 'aqiWarning', label: 'AQI Warning Level', min: 50, max: 200 },
              { key: 'aqiCritical', label: 'AQI Critical Level', min: 100, max: 300 }
            ].map(setting => (
              <div key={setting.key} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {setting.label}
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min={setting.min}
                    max={setting.max}
                    value={thresholds[setting.key]}
                    onChange={(e) => handleThresholdChange(setting.key, e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-600 w-12">
                    {thresholds[setting.key]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Integrations</h2>
          <div className="space-y-4">
            {[
              { key: 'aqiSource', label: 'Air Quality Data Source', options: ['openweather', 'aqicn', 'government'] },
              { key: 'weatherAPI', label: 'Weather Data', options: ['enabled', 'disabled'] },
              { key: 'hospitalDB', label: 'Hospital Database', options: ['connected', 'disconnected'] }
            ].map(integration => (
              <div key={integration.key} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {integration.label}
                </label>
                <div className="flex space-x-2">
                  {integration.options.map(option => (
                    <button
                      key={option}
                      onClick={() => handleIntegrationToggle(integration.key, option)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        integrations[integration.key] === option
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manual Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Manual Controls</h2>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <span>🔍</span>
              <span>Run Forecast Now</span>
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <span>🔄</span>
              <span>Sync All Data</span>
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <span>🤖</span>
              <span>Generate New Playbook</span>
            </button>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-600">⚠️</span>
              <span className="font-semibold text-yellow-700">Manual Override Active</span>
            </div>
            <p className="text-sm text-yellow-600 mt-1">
              Manual controls are for testing and emergency use. AI automation is recommended for normal operations.
            </p>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-green-700">AI Agent</span>
            </div>
            <p className="text-sm text-green-600 mt-1">Running optimally</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-green-700">Data Sources</span>
            </div>
            <p className="text-sm text-green-600 mt-1">All systems connected</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-blue-700">Last Update</span>
            </div>
            <p className="text-sm text-blue-600 mt-1">{new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;