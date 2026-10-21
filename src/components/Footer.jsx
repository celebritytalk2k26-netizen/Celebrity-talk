import React from 'react';
import { APP_CONFIG } from '../config';
import { Mail, Phone, ExternalLink, Sparkles } from 'lucide-react';

export default function Footer({ currentPath, navigate }) {
  const handleLinkClick = (path, e) => {
    e.preventDefault();
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      if (currentPath === '/') {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="logo-area" style={{ marginBottom: '1.25rem' }}>
              <div className="logo-icon-box">
                <Sparkles size={20} />
              </div>
              <span>
                Celebrity <span className="logo-text-highlight">Talk Hub</span>
              </span>
            </div>
            <p style={{ color: '#a8a29e', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              {APP_CONFIG.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a
                href={`mailto:${APP_CONFIG.email}`}
                className="contact-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
              >
                <Mail size={16} color="var(--accent-gold)" />
                {APP_CONFIG.email}
              </a>
              <a
                href={`tel:${APP_CONFIG.phone.replace(/\s+/g, '')}`}
                className="contact-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
              >
                <Phone size={16} color="var(--accent-gold)" />
                {APP_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/" onClick={(e) => handleLinkClick('/', e)} className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" onClick={(e) => handleLinkClick('/#about', e)} className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#features" onClick={(e) => handleLinkClick('/#features', e)} className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="/#download" onClick={(e) => handleLinkClick('/#download', e)} className="footer-link">
                  Download App
                </a>
              </li>
              <li>
                <a href="/#contact" onClick={(e) => handleLinkClick('/#contact', e)} className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Policies */}
          <div>
            <h4 className="footer-col-title">Legal & Policies</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleLinkClick('/privacy-policy', e)}
                  className="footer-link"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => handleLinkClick('/terms', e)}
                  className="footer-link"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/delete-account"
                  onClick={(e) => handleLinkClick('/delete-account', e)}
                  className="footer-link"
                >
                  Delete Account
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  onClick={(e) => handleLinkClick('/refund-policy', e)}
                  className="footer-link"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="/cancellation-policy"
                  onClick={(e) => handleLinkClick('/cancellation-policy', e)}
                  className="footer-link"
                >
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          {/* About Firm */}
          <div>
            <h4 className="footer-col-title">Entity Information</h4>
            <p style={{ color: '#a8a29e', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Owned and operated by:
              <br />
              <strong style={{ color: '#F5F5F5' }}>{APP_CONFIG.businessName}</strong>
            </p>
            <p style={{ color: '#7FADE0', fontSize: '0.85rem', lineHeight: '1.5' }}>
              Celebrity Talk Hub provides audio and video communication services for digital conversations.
            </p>
          </div>
        </div>

        {/* Footer Bottom with Exact Attribution and Copyright */}
        <div className="footer-bottom">
          <div>
            {APP_CONFIG.copyright}
          </div>
          <div>
            <a
              href={APP_CONFIG.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="developer-credit-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              {APP_CONFIG.developer.creditText}
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
