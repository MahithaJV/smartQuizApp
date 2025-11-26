// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Forecast from './pages/Forecast';
import Playbook from './pages/Playbook';
import Settings from './pages/Settings';
import AlertModal from './components/AlertModal';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showAlert, setShowAlert] = useState(true); // Simulate surge alert

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'forecast':
        return <Forecast />;
      case 'playbook':
        return <Playbook />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Alert Modal - Simulating surge detection */}
      {showAlert && (
        <AlertModal 
          isOpen={showAlert} 
          onClose={() => setShowAlert(false)}
          title="🚨 Surge Alert Detected"
          message="High AQI levels detected. Respiratory patient surge expected in 48 hours. AI Playbook has been generated."
          severity="high"
        />
      )}
      
     <main className="container mx-auto px-4 py-8">
  {(() => {
    try {
      return renderPage();
    } catch (e) {
      console.error(e);
      return <div className="text-red-600 text-xl">Error: {e.message}</div>;
    }
  })()}
</main>

    </div>
  );
}

export default App;