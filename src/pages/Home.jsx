import React, { useState } from 'react';
import { APP_CONFIG } from '../config';
import {
  PhoneCall,
  Video,
  Layout,
  UserCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Download,
  ArrowRight,
  Mic,
  Camera,
  Volume2,
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Home({ navigate }) {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: 'Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    // Since no backend service is configured, open a pre-filled mailto directly as required by prompt
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name} - Celebrity Talk Hub`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${APP_CONFIG.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormStatus({
      submitted: true,
      error: ''
    });
  };

  const scrollToDownload = () => {
    const el = document.getElementById('download');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge">
                <Sparkles size={16} />
                <span>{APP_CONFIG.heroSubtitle}</span>
              </div>
              <h1 className="hero-title">{APP_CONFIG.tagline}</h1>
              <p className="hero-desc">{APP_CONFIG.description}</p>
              <div className="hero-actions">
                <button onClick={scrollToFeatures} className="btn-secondary">
                  <span>Explore Features</span>
                  <ArrowRight size={18} />
                </button>
                <button onClick={scrollToDownload} className="btn-primary">
                  <Download size={18} />
                  <span>Download App</span>
                </button>
              </div>
            </div>

            {/* Interactive Call Preview Visual */}
            <div className="hero-visual-card">
              <div className="call-card-preview">
                <div className="preview-call-header">
                  <div className="preview-status">
                    <span className="pulse-dot"></span>
                    <span>High Fidelity Voice & Video Ready</span>
                  </div>
                  <Sparkles size={18} color="var(--accent-gold)" />
                </div>

                <div className="preview-caller-box">
                  <div className="avatar-ring">
                    <Sparkles size={36} color="var(--accent-gold)" />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Celebrity Talk Hub</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                    Seamless Calling Experience
                  </p>

                  <div className="call-controls-preview">
                    <div className="control-circle" title="Microphone Active">
                      <Mic size={20} />
                    </div>
                    <div className="control-circle active" title="Video Calling">
                      <Camera size={20} />
                    </div>
                    <div className="control-circle" title="Speaker">
                      <Volume2 size={20} />
                    </div>
                    <div className="control-circle end-call" title="End Call">
                      <PhoneCall size={20} style={{ transform: 'rotate(135deg)' }} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <div style={{ background: '#141210', padding: '0.85rem', borderRadius: '12px', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                    <div style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '1rem' }}>Audio Calls</div>
                    <div style={{ color: '#a8a29e', fontSize: '0.8rem' }}>Crystal Clear Sound</div>
                  </div>
                  <div style={{ background: '#141210', padding: '0.85rem', borderRadius: '12px', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                    <div style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '1rem' }}>Video Calls</div>
                    <div style={{ color: '#a8a29e', fontSize: '0.8rem' }}>Face-to-Face Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Calling Highlight Cards */}
      <section className="section" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="calling-showcase">
            <div className="calling-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div className="feature-icon-wrap" style={{ margin: 0 }}>
                  <PhoneCall size={26} />
                </div>
                <h3 style={{ fontSize: '1.4rem' }}>Audio Calling</h3>
              </div>
              <p style={{ color: '#c7c1ba', lineHeight: '1.65' }}>
                Connect seamlessly with other users through streamlined audio calls. Designed for low latency, smooth voice quality, and effortless daily communication wherever you are.
              </p>
            </div>

            <div className="calling-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div className="feature-icon-wrap" style={{ margin: 0 }}>
                  <Video size={26} />
                </div>
                <h3 style={{ fontSize: '1.4rem' }}>Video Calling</h3>
              </div>
              <p style={{ color: '#c7c1ba', lineHeight: '1.65' }}>
                Enjoy immersive face-to-face conversations through video calls. Responsive video transmission built to adapt smoothly to your mobile network and device capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section id="features" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Capabilities</span>
            <h2 className="section-title">Built for Effortless Social Connection</h2>
            <p className="section-desc">
              Discover the essential features of Celebrity Talk Hub tailored for real-time mobile audio and video communication.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <PhoneCall size={26} />
              </div>
              <h3 className="feature-card-title">Audio Calling</h3>
              <p className="feature-card-desc">
                Connect with other users through audio calls. Experience stable and clear voice connectivity engineered for mobile devices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <Video size={26} />
              </div>
              <h3 className="feature-card-title">Video Calling</h3>
              <p className="feature-card-desc">
                Enjoy face-to-face conversations through video calls. Interact visually with friends and contacts with smooth real-time video rendering.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <Layout size={26} />
              </div>
              <h3 className="feature-card-title">Simple User Experience</h3>
              <p className="feature-card-desc">
                Navigate the application through an intuitive and user-friendly interface designed for straightforward communication without complexity.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <UserCheck size={26} />
              </div>
              <h3 className="feature-card-title">User Profiles</h3>
              <p className="feature-card-desc">
                View and manage profiles according to the functionality available in the application, keeping your account details accurate and accessible.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <ShieldCheck size={26} />
              </div>
              <h3 className="feature-card-title">Secure Communication</h3>
              <p className="feature-card-desc">
                Built with industry-standard network protocols and access controls to safeguard your account sessions and protect your communication data.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <Smartphone size={26} />
              </div>
              <h3 className="feature-card-title">Convenient Access</h3>
              <p className="feature-card-desc">
                Connect using supported mobile devices and account authentication options provided by the application for quick, reliable sign-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Us Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-tag">About Our Platform</span>
              <h2 className="section-title">About Celebrity Talk Hub</h2>
              <p style={{ color: '#c7c1ba', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                {APP_CONFIG.aboutContent}
              </p>
              <div className="mission-box">
                "{APP_CONFIG.mission}"
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                Celebrity Talk Hub is owned and maintained by{' '}
                <strong style={{ color: 'var(--text-primary)' }}>{APP_CONFIG.businessName}</strong>, dedicated to building dependable digital communication solutions.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', color: 'var(--accent-gold)' }}>
                Platform Principles
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>Simplicity First</h4>
                  <p style={{ color: '#a8a29e', fontSize: '0.925rem' }}>
                    Straightforward controls that allow you to start talking without cumbersome setups.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>Reliable Calling Quality</h4>
                  <p style={{ color: '#a8a29e', fontSize: '0.925rem' }}>
                    Engineered to prioritize voice clarity and responsive video connections.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>Responsible User Environment</h4>
                  <p style={{ color: '#a8a29e', fontSize: '0.925rem' }}>
                    Clear community guidelines and support channels ensuring respectful and safe user interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Easy Onboarding</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-desc">
              Get started with Celebrity Talk Hub in three straightforward steps.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number-badge">1</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Download and Install</h3>
              <p style={{ color: '#a8a29e', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Download and install the application from your device's official app store once the public release is live.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number-badge">2</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Register or Log In</h3>
              <p style={{ color: '#a8a29e', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Register or log in using the available authentication options provided within the mobile application.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number-badge">3</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Connect & Enjoy</h3>
              <p style={{ color: '#a8a29e', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Explore the application and connect through supported audio and video calling features whenever you want to talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dedicated App Download Section */}
      <section id="download" className="download-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Mobile Application</span>
            <h2 className="section-title">Get Started with Celebrity Talk Hub</h2>
            <p className="section-desc">
              Your next conversation is just a step away. Download Celebrity Talk Hub and experience audio and video calling.
            </p>
          </div>

          <div className="download-cards-grid">
            {/* Google Play Card */}
            <div className="store-card">
              <div className="store-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a2.008 2.008 0 0 1-.61-1.442V3.256c0-.55.228-1.05.609-1.442zm11.235 11.237l2.25 2.25-11.458 6.616 9.208-8.866zm0-2.102L5.636 2.083l11.457 6.616-2.249 2.25zM18.5 12l2.67-1.542a1.5 1.5 0 0 1 0 2.6L18.5 12z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Google Play</h3>
              <p style={{ color: '#a8a29e', fontSize: '0.925rem', marginBottom: '1.25rem' }}>
                For Android smartphones and tablets
              </p>

              {APP_CONFIG.storeLinks.googlePlay.url ? (
                <a
                  href={APP_CONFIG.storeLinks.googlePlay.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  <Download size={18} />
                  <span>Get on Google Play</span>
                </a>
              ) : (
                <div style={{ width: '100%' }}>
                  <button
                    disabled
                    className="btn-secondary"
                    style={{ width: '100%', opacity: 0.75, cursor: 'not-allowed' }}
                  >
                    <span>Google Play: Coming Soon</span>
                  </button>
                  <span className="store-badge-tag">App In Development</span>
                </div>
              )}
            </div>

            {/* Apple App Store Card */}
            <div className="store-card">
              <div className="store-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.03.63-2.67 1.38-.56.65-1.06 1.71-.93 2.74 1.04.08 2.07-.5 2.68-1.25z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Apple App Store</h3>
              <p style={{ color: '#a8a29e', fontSize: '0.925rem', marginBottom: '1.25rem' }}>
                For iPhone and iOS devices
              </p>

              {APP_CONFIG.storeLinks.appleAppStore.url ? (
                <a
                  href={APP_CONFIG.storeLinks.appleAppStore.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  <Download size={18} />
                  <span>Download on App Store</span>
                </a>
              ) : (
                <div style={{ width: '100%' }}>
                  <button
                    disabled
                    className="btn-secondary"
                    style={{ width: '100%', opacity: 0.75, cursor: 'not-allowed' }}
                  >
                    <span>App Store: Coming Soon</span>
                  </button>
                  <span className="store-badge-tag">App In Development</span>
                </div>
              )}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Official store URLs are centrally managed and will activate real download buttons once the application is approved and published on Google Play and Apple App Store.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Contact Celebrity Talk Hub</h2>
            <p className="section-desc">
              Have questions regarding our calling app, support, or partnership inquiries? Reach out directly to our team.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Details */}
            <div className="contact-info-card">
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--accent-gold)' }}>
                Official Contact Information
              </h3>
              <p style={{ color: '#c7c1ba', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                We are available to assist with general questions, feedback, account deletion support, and technical assistance.
              </p>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#a8a29e' }}>Support & Inquiries Email</div>
                  <a href={`mailto:${APP_CONFIG.email}`} className="contact-link" style={{ fontSize: '1.05rem' }}>
                    {APP_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#a8a29e' }}>Phone Number</div>
                  <a href={`tel:${APP_CONFIG.phone.replace(/\s+/g, '')}`} className="contact-link" style={{ fontSize: '1.05rem' }}>
                    {APP_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.85rem', color: '#a8a29e', marginBottom: '0.25rem' }}>Entity Information</div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{APP_CONFIG.businessName}</div>
              </div>
            </div>

            {/* Contact Form with Validation */}
            <form onSubmit={handleFormSubmit} className="contact-form" noValidate>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Send a Message</h3>
              <p style={{ color: '#a8a29e', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Fill out the form below to generate a direct email inquiry.
              </p>

              {formStatus.error && (
                <div className="callout-box" style={{ borderLeftColor: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertCircle size={18} />
                  <span>{formStatus.error}</span>
                </div>
              )}

              {formStatus.submitted && (
                <div className="callout-box info" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} color="var(--accent-gold)" />
                  <span>Email client opened! You can also write to us directly at {APP_CONFIG.email}.</span>
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <div className="form-notice">
                * Note: Submitting this form prepares an email inquiry addressed to {APP_CONFIG.email}.
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Send size={18} />
                <span>Submit Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
