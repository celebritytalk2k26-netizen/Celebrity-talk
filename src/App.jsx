import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DeleteAccount from './pages/DeleteAccount';
import RefundPolicy from './pages/RefundPolicy';
import CancellationPolicy from './pages/CancellationPolicy';
import NotFound from './pages/NotFound';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    // Normalize path by removing trailing slash if present (except for root '/')
    const normalized = currentPath.length > 1 && currentPath.endsWith('/') 
      ? currentPath.slice(0, -1) 
      : currentPath;

    switch (normalized) {
      case '':
      case '/':
        return <Home navigate={navigate} />;
      case '/terms':
        return <Terms />;
      case '/privacy-policy':
        return <PrivacyPolicy />;
      case '/delete-account':
        return <DeleteAccount />;
      case '/refund-policy':
        return <RefundPolicy />;
      case '/cancellation-policy':
        return <CancellationPolicy />;
      default:
        return <NotFound navigate={navigate} />;
    }
  };

  // Update page title dynamically
  useEffect(() => {
    const titles = {
      '/': 'Celebrity Talk Hub — Audio & Video Calling Platform',
      '/terms': 'Terms & Conditions — Celebrity Talk Hub',
      '/privacy-policy': 'Privacy Policy — Celebrity Talk Hub',
      '/delete-account': 'Delete Account Request — Celebrity Talk Hub',
      '/refund-policy': 'Refund Policy — Celebrity Talk Hub',
      '/cancellation-policy': 'Cancellation Policy — Celebrity Talk Hub',
    };
    document.title = titles[currentPath] || 'Celebrity Talk Hub';
  }, [currentPath]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header currentPath={currentPath} navigate={navigate} />
      <div style={{ flex: 1 }}>{renderPage()}</div>
      <Footer currentPath={currentPath} navigate={navigate} />
    </div>
  );
}
