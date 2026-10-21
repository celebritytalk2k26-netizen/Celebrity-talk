import React from 'react';
import { APP_CONFIG } from '../config';
import { Ban, PhoneOff, CalendarX, HelpCircle, Layers } from 'lucide-react';

export default function CancellationPolicy() {
  return (
    <main>
      <div className="legal-page-header">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '0.75rem', fontWeight: 600 }}>
            <Ban size={20} />
            <span>Service Terms</span>
          </div>
          <h1 className="legal-page-title">Cancellation Policy</h1>
          <p className="legal-page-meta">
            Effective Date: March 2026 | Last Updated: March 2026
          </p>
        </div>
      </div>

      <div className="container">
        <div className="legal-content-container">
          {/* Section 1 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">1.</span> Scope of Cancellation Policy
            </h2>
            <p className="legal-paragraph">
              This Cancellation Policy governs the terms and conditions under which orders, purchases, ongoing audio or video calls, and prospective recurring subscriptions (if offered) may be cancelled by users of <strong>Celebrity Talk Hub</strong>, operated by <strong>{APP_CONFIG.businessName}</strong>.
            </p>
          </div>

          {/* Section 2 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">2.</span> Cancellation of Ongoing Audio & Video Calls
            </h2>
            <p className="legal-paragraph">
              Users may terminate or disconnect any ongoing audio or video call at any time by pressing the end-call button in the application interface:
            </p>
            <ul className="legal-list">
              <li><strong>User-Initiated Disconnection:</strong> You retain complete control over your calls. You may end a call whenever you wish without penalty.</li>
              <li><strong>Call Duration Billing (If Applicable):</strong> If a call involves per-minute charges or virtual coin debits, billing terminates immediately upon call termination. Only the actual connected duration utilized is deducted.</li>
              <li><strong>Immediate Interruption / Call Failure:</strong> If a call fails to establish or disconnects within the first few seconds due to network handshake errors, no charges or coin deductions will apply.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">3.</span> Cancellation of Subscriptions (If Applicable)
            </h2>
            <p className="legal-paragraph">
              If Celebrity Talk Hub offers premium recurring subscription memberships in the future:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Google Play Subscriptions:</strong> You can manage or cancel your subscription at any time by going to your Google Play Store app &gt; Profile &gt; <em>Payments & Subscriptions</em> &gt; <em>Subscriptions</em>, and selecting <strong>Cancel Subscription</strong>.
              </li>
              <li>
                <strong>Apple App Store Subscriptions:</strong> You can manage or cancel your subscription on iOS by opening <em>Settings</em> on your iPhone/iPad &gt; your Apple ID &gt; <em>Subscriptions</em>, and selecting <strong>Cancel Subscription</strong>.
              </li>
            </ul>
            <p className="legal-paragraph">
              Upon cancellation, your subscription will remain active until the end of the current billing cycle, and you will not be billed for subsequent renewal cycles.
            </p>
          </div>

          {/* Section 4 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">4.</span> Difference Between Account Deletion and Subscription Cancellation
            </h2>
            <div className="callout-box" style={{ borderLeftColor: '#f59e0b' }}>
              <strong>Important Note:</strong> Deleting the Celebrity Talk Hub app or requesting an account deletion does <em>not</em> automatically cancel an external recurring subscription managed by Google Play or Apple App Store. You must actively cancel your subscription in your Google Play or Apple ID settings to avoid future recurring charges by the store provider.
            </div>
          </div>

          {/* Section 5 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">5.</span> Cancellation of Scheduled Calls (If Supported)
            </h2>
            <p className="legal-paragraph">
              If scheduled or pre-booked calling sessions are introduced in future releases:
            </p>
            <ul className="legal-list">
              <li>Users may cancel a scheduled call within the advance cancellation window indicated in the app prior to the scheduled start time.</li>
              <li>Detailed notification and coin refund rules for missed or late-cancelled sessions will be clearly displayed before booking.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">6.</span> Policy Inquiries and Support
            </h2>
            <p className="legal-paragraph">
              If you have any questions or require assistance with cancelling a service or purchase, our support team is available to assist you:
            </p>
            <div className="callout-box">
              <strong>{APP_CONFIG.businessName}</strong><br />
              Email: <a href={`mailto:${APP_CONFIG.email}`} style={{ color: 'var(--accent-gold)' }}>{APP_CONFIG.email}</a><br />
              Phone: <a href={`tel:${APP_CONFIG.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--accent-gold)' }}>{APP_CONFIG.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
