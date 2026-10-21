import React, { useState } from 'react';
import { APP_CONFIG } from '../config';
import {
  UserX,
  Mail,
  CheckCircle2,
  Send,
  Copy
} from 'lucide-react';

export default function DeleteAccount() {
  const [userIdentifier, setUserIdentifier] = useState('');
  const [accountType, setAccountType] = useState('phone'); // 'phone' or 'email'
  const [userName, setUserName] = useState('');
  const [deletionReason, setDeletionReason] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [actionNotice, setActionNotice] = useState(false);

  // Generate dynamic subject and body
  const getEmailContent = () => {
    const subject = `Account Deletion Request - Celebrity Talk Hub${userIdentifier ? ` (${userIdentifier})` : ''}`;
    const body =
      `Hello Celebrity Talk Hub Support Team,\n\n` +
      `I am requesting the permanent deletion of my Celebrity Talk Hub account and associated personal data.\n\n` +
      `Account Information:\n` +
      `- Registered ${accountType === 'phone' ? 'Phone Number' : 'Email'}: ${userIdentifier || '[Enter your registered phone or email]'}\n` +
      `- Name / Display Name: ${userName || '[Enter your name or in-app username]'}\n` +
      `- Reason for Deletion: ${deletionReason || 'Account closure request'}\n\n` +
      `Confirmation:\n` +
      `I understand that this action is irreversible, my profile and calling records will be deleted, and any unused balances will be forfeited in accordance with the terms.\n\n` +
      `Please confirm once the account deletion has been processed.\n\n` +
      `Thank you,\n${userName || 'Celebrity Talk Hub User'}`;

    return { subject, body };
  };

  const getMailtoUrl = () => {
    const { subject, body } = getEmailContent();
    return `mailto:${APP_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getGmailWebUrl = () => {
    const { subject, body } = getEmailContent();
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(APP_CONFIG.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleOpenGmailDirectly = (e) => {
    if (e) e.preventDefault();
    const gmailUrl = getGmailWebUrl();
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setActionNotice(true);
  };

  const handleLaunchEmailClient = (e) => {
    if (e) e.preventDefault();
    const mailtoUrl = getMailtoUrl();
    window.location.href = mailtoUrl;
    setActionNotice(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(APP_CONFIG.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <main>
      <div className="legal-page-header">
        <div className="container">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--accent-gold)',
              marginBottom: '0.75rem',
              fontWeight: 600,
            }}
          >
            <UserX size={20} />
            <span>Account Management & Privacy</span>
          </div>
          <h1 className="legal-page-title">Delete Account Request</h1>
          <p className="legal-page-meta">
            Permanent account deletion instructions, verification process, and email submission.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="legal-content-container">
          {/* Section 1 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">1.</span> Right to Request Account Deletion
            </h2>
            <p className="legal-paragraph">
              At <strong>Celebrity Talk Hub</strong>, operated by <strong>{APP_CONFIG.businessName}</strong>,
              users possess full control over their account data. You may request permanent deletion of your
              registered account, calling profile, and associated personal information at any time.
            </p>
          </div>

          {/* Interactive Deletion Request Generator Card */}
          <div
            style={{
              background: 'linear-gradient(145deg, #1C1916 0%, #25201A 100%)',
              border: '1px solid var(--accent-gold)',
              borderRadius: '20px',
              padding: '2.25rem',
              margin: '2rem 0',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4), 0 0 24px rgba(205, 165, 82, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div className="feature-icon-wrap" style={{ margin: 0, width: '42px', height: '42px' }}>
                <Mail size={20} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                Request Account Deletion via Email
              </h3>
            </div>

            <p style={{ color: '#c7c1ba', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
              Provide your account identifier below (optional, helps our team locate your account faster),
              then tap <strong>"Open Email to Request Deletion"</strong> to open your device’s mail client with
              a pre-addressed, formatted deletion request.
            </p>

            <form onSubmit={handleOpenGmailDirectly} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="userName">
                    Your Full Name / Username
                  </label>
                  <input
                    type="text"
                    id="userName"
                    className="form-input"
                    placeholder="e.g. Rahul Sharma"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="userIdentifier">
                    Registered Mobile or Email *
                  </label>
                  <input
                    type="text"
                    id="userIdentifier"
                    className="form-input"
                    placeholder="e.g. +91 98765 43210 or user@example.com"
                    value={userIdentifier}
                    onChange={(e) => setUserIdentifier(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="deletionReason">
                  Reason for Deletion (Optional)
                </label>
                <input
                  type="text"
                  id="deletionReason"
                  className="form-input"
                  placeholder="e.g. No longer using the service, switching devices, privacy preference"
                  value={deletionReason}
                  onChange={(e) => setDeletionReason(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={handleOpenGmailDirectly}
                  className="btn-primary"
                  style={{ flex: '1 1 240px', padding: '0.9rem 1.4rem' }}
                >
                  <Send size={18} />
                  <span>Open Directly in Gmail</span>
                </button>

                <button
                  type="button"
                  onClick={handleLaunchEmailClient}
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.25rem' }}
                  title="Open in your default mail application"
                >
                  <Mail size={16} />
                  <span>Open Mail App</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.25rem' }}
                  title="Copy email address to clipboard"
                >
                  <Copy size={16} />
                  <span>{isCopied ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              {actionNotice && (
                <div
                  className="callout-box info"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '1rem', marginBottom: 0 }}
                >
                  <CheckCircle2 size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Ready to send!</strong> Your pre-filled email draft has been generated for{' '}
                    <strong style={{ color: 'var(--text-primary)' }}>{APP_CONFIG.email}</strong>.
                    Review the details in Gmail / your email window and click <strong>Send</strong>. If a popup was blocked by your browser, you can also click{' '}
                    <a
                      href={getGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent-gold)', textDecoration: 'underline', fontWeight: 600 }}
                    >
                      here to open Gmail compose
                    </a>.
                  </div>
                </div>
              )}
            </form>

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}
            >
              <span>Target Desk: <strong style={{ color: 'var(--text-primary)' }}>{APP_CONFIG.email}</strong></span>
              <span>Verification Phone: <strong style={{ color: 'var(--text-primary)' }}>{APP_CONFIG.phoneDisplay}</strong></span>
            </div>
          </div>

          {/* Section 2 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">2.</span> How Account Deletion Works
            </h2>
            <p className="legal-paragraph">
              You can initiate an account deletion through either of the following two procedures:
            </p>

            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>
              Method A: In-App Deletion (When Available)
            </h3>
            <p className="legal-paragraph">
              If your current build of the mobile application supports in-app self-service deletion:
            </p>
            <ul className="legal-list">
              <li>Open the <strong>Celebrity Talk Hub</strong> mobile application on your device.</li>
              <li>Go to <strong>Settings</strong> or tap your profile avatar.</li>
              <li>Select <strong>Account & Security</strong> &gt; <strong>Delete Account</strong>.</li>
              <li>Read the confirmation warning and complete the in-app confirmation prompt.</li>
            </ul>

            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
              Method B: Direct Email Deletion Request
            </h3>
            <p className="legal-paragraph">
              If in-app deletion is not yet available in your current mobile build, you can send your deletion request to{' '}
              <a href={`mailto:${APP_CONFIG.email}`} style={{ color: 'var(--accent-gold)' }}>
                {APP_CONFIG.email}
              </a>.
            </p>
            <div className="callout-box info">
              <strong>Guidelines for Email Requests:</strong>
              <ul style={{ margin: '0.5rem 0 0 1.25rem' }}>
                <li>Include your registered email address or mobile phone number associated with the account.</li>
                <li>State clearly that you request the permanent deletion of your Celebrity Talk Hub account.</li>
                <li>
                  <strong style={{ color: '#ef4444' }}>Security Notice:</strong> Never include passwords, PINs, or SMS OTP codes in your email. Our team will never ask you for secret authentication credentials.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">3.</span> Verification Process Before Deletion
            </h2>
            <p className="legal-paragraph">
              To protect your account against unauthorized or malicious deletion by third parties, our support desk will verify your ownership before executing the deletion. This verification may involve:
            </p>
            <ul className="legal-list">
              <li>A verification email sent to your registered email address requiring confirmation.</li>
              <li>Or an SMS verification link sent to your registered phone number.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">4.</span> What Data is Deleted
            </h2>
            <p className="legal-paragraph">
              Upon successful verification and completion of the deletion process:
            </p>
            <ul className="legal-list">
              <li>Your account profile, username, display name, avatar photo, and bio are permanently erased.</li>
              <li>Authentication credentials and active device session tokens are invalidated.</li>
              <li>In-app friend associations, preferences, and call log histories are removed from active databases.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">5.</span> Data Retention Exceptions
            </h2>
            <p className="legal-paragraph">
              Certain minimal records may be retained temporarily or longer where required by applicable Indian law:
            </p>
            <ul className="legal-list">
              <li>Financial transaction records kept to comply with statutory accounting and tax regulations.</li>
              <li>Logs strictly necessary for ongoing security investigations, fraud prevention, or unresolved dispute resolution.</li>
              <li>Standard encrypted backup archives, which are continuously overwritten and purged on routine server rotation cycles.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">6.</span> Processing Timeline
            </h2>
            <p className="legal-paragraph">
              Following successful identity verification, our technical team processes account deletion within standard business timelines (typically within 30 days of verification, subject to technical processing schedules).
            </p>
          </div>

          {/* Section 7 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">7.</span> Irreversibility and Loss of Benefits
            </h2>
            <div className="callout-box" style={{ borderLeftColor: '#f59e0b' }}>
              <strong>Permanent Action Notice:</strong> Account deletion is permanent and cannot be undone. Once deleted, the account cannot be recovered. Any unused calling credits, virtual balances, or active features linked to the account will be forfeited upon completion.
            </div>
          </div>

          {/* Section 8 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">8.</span> Contact for Deletion Assistance
            </h2>
            <p className="legal-paragraph">
              If you have any questions or require guidance with account deletion, reach out to our team:
            </p>
            <div className="callout-box">
              <strong>{APP_CONFIG.businessName}</strong><br />
              Email:{' '}
              <a href={`mailto:${APP_CONFIG.email}`} style={{ color: 'var(--accent-gold)' }}>
                {APP_CONFIG.email}
              </a><br />
              Phone:{' '}
              <a href={`tel:${APP_CONFIG.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--accent-gold)' }}>
                {APP_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
