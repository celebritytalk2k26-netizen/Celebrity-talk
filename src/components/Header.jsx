import React, { useState } from 'react';
import { APP_CONFIG } from '../config';
import { Sparkles, Menu, X, ArrowRight, Download } from 'lucide-react';

export default function Header({ currentPath, navigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/#about' },
    { label: 'Features', path: '/#features' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Delete Account', path: '/delete-account' },
    { label: 'Refund & Cancellation', path: '/refund-policy' },
  ];

  const handleNavClick = (path, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      if (currentPath === '/') {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToDownload = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentPath === '/') {
      const el = document.getElementById('download');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('download');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            className="logo-area"
            aria-label="Celebrity Talk Hub Home"
          >
            <div className="logo-icon-box">
              <Sparkles size={22} />
            </div>
            <span>
              Celebrity <span className="logo-text-highlight">Talk Hub</span>
            </span>
          </a>

          <nav className="nav-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(link.path, e)}
                className={`nav-link ${currentPath === link.path ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <button onClick={scrollToDownload} className="nav-cta-btn">
              <Download size={16} />
              <span>Download App</span>
            </button>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            onClick={(e) => handleNavClick(link.path, e)}
            className={`nav-link ${currentPath === link.path ? 'active' : ''}`}
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={scrollToDownload}
          className="nav-cta-btn"
          style={{ justifyContent: 'center', marginTop: '0.5rem' }}
        >
          <Download size={16} />
          <span>Download App</span>
        </button>
      </div>
    </header>
  );
}
