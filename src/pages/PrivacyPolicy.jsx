import React from 'react';
import { APP_CONFIG } from '../config';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main>
      <div className="legal-page-header">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '0.75rem', fontWeight: 600 }}>
            <Lock size={20} />
            <span>Privacy & Data Protection</span>
          </div>
          <h1 className="legal-page-title">Privacy Policy</h1>
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
              <span className="section-num">1.</span> Introduction and Scope
            </h2>
            <p className="legal-paragraph">
              This Privacy Policy explains how <strong>{APP_CONFIG.businessName}</strong> ("we", "us", or "our") collects, uses, stores, and protects personal data when you interact with the <strong>Celebrity Talk Hub</strong> mobile application and website. We are dedicated to respecting your privacy and handling your information in a responsible and transparent manner.
            </p>
          </div>

          {/* Section 2 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">2.</span> Personal Information We Collect
            </h2>
            <p className="legal-paragraph">
              Depending on how you use our application and the features enabled, we may collect the following categories of information:
            </p>
            <ul className="legal-list">
              <li><strong>Account Registration & Authentication Details:</strong> Information such as your display name, email address, mobile phone number, or third-party sign-in identifiers provided during registration.</li>
              <li><strong>Profile Information:</strong> Optional profile picture, status, or bio that you choose to display within the app.</li>
              <li><strong>Technical & Diagnostic Data:</strong> IP address, device model, operating system version, app version, network connectivity status, and crash or performance logs to ensure system reliability.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">3.</span> Audio and Video Calling Data
            </h2>
            <p className="legal-paragraph">
              Celebrity Talk Hub facilitates real-time audio and video calling between users.
            </p>
            <ul className="legal-list">
              <li><strong>Call Signaling & Connection Metadata:</strong> In order to connect, route, and maintain calls, our servers process call session parameters, including caller and receiver identifiers, call initiation timestamps, call duration, and connection status.</li>
              <li><strong>Call Transmission:</strong> Audio and video streams are transmitted in real time between calling participants. Calls are designed for live interactive communication.</li>
            </ul>
            <div className="callout-box">
              <strong>Notice:</strong> We do not claim permanent recording of live conversations unless expressly notified in advance for customer support investigations or where required by law. Please conduct conversations with reasonable care and respect for privacy.
            </div>
          </div>

          {/* Section 4 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">4.</span> Device Permissions (Microphone & Camera)
            </h2>
            <p className="legal-paragraph">
              To deliver calling features, the mobile application requests specific device permissions strictly when needed:
            </p>
            <ul className="legal-list">
              <li><strong>Microphone Permission:</strong> Required to capture and transmit your voice during audio and video calls.</li>
              <li><strong>Camera Permission:</strong> Required to capture and transmit your video feed during video calls.</li>
              <li><strong>Notifications (Optional):</strong> Required to alert you to incoming audio or video calls and system updates.</li>
            </ul>
            <p className="legal-paragraph">
              You can grant or revoke these permissions at any time via your device settings. However, disabling microphone or camera permissions will prevent the corresponding audio or video calling features from functioning.
            </p>
          </div>

          {/* Section 5 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">5.</span> Payment and Transaction Information (If Applicable)
            </h2>
            <p className="legal-paragraph">
              If you purchase paid features, calling packages, or virtual items within the app, financial transactions are processed securely through official app stores (Google Play Store or Apple App Store) or authorized payment gateways. We do not directly store or view your full credit card numbers or sensitive banking details on our servers.
            </p>
          </div>

          {/* Section 6 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">6.</span> Purposes & Lawful Basis for Processing
            </h2>
            <p className="legal-paragraph">
              We process your personal information for the following legitimate purposes:
            </p>
            <ul className="legal-list">
              <li>To provide, maintain, and enhance the audio and video calling services.</li>
              <li>To authenticate user accounts and manage user sessions.</li>
              <li>To prevent fraud, spam, harassment, and abuse on the platform.</li>
              <li>To diagnose technical errors, debug network issues, and improve call quality.</li>
              <li>To respond to your inquiries, support requests, and account deletion requests.</li>
              <li>To comply with applicable legal obligations and lawful governmental requests.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">7.</span> Data Sharing with Technical Partners
            </h2>
            <p className="legal-paragraph">
              We do not sell, rent, or trade your personal data to advertisers. We may share data only with trusted technical service providers who assist us in operating our platform, including:
            </p>
            <ul className="legal-list">
              <li>Cloud hosting and real-time media streaming infrastructure providers.</li>
              <li>Crash-reporting and diagnostic analytics tools.</li>
              <li>Customer communication and email service providers.</li>
            </ul>
            <p className="legal-paragraph">
              All third-party technical partners are bound by confidentiality and data protection obligations consistent with this Privacy Policy.
            </p>
          </div>

          {/* Section 8 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">8.</span> Data Storage, Security, and Retention
            </h2>
            <p className="legal-paragraph">
              We implement industry-standard physical, organizational, and electronic safeguards to protect your personal data from unauthorized access, alteration, or disclosure.
            </p>
            <p className="legal-paragraph">
              We retain personal data for as long as your account remains active or as necessary to fulfill the purposes described in this policy. Certain basic transaction logs or records may be retained longer where required to satisfy tax, legal, security, fraud prevention, or unresolved dispute requirements under applicable law.
            </p>
          </div>

          {/* Section 9 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">9.</span> User Privacy Rights & Account Deletion
            </h2>
            <p className="legal-paragraph">
              You possess rights regarding your personal information, including the right to access, review, update, and request deletion of your account data.
            </p>
            <p className="legal-paragraph">
              To request account deletion or data removal, please visit our <a href="/delete-account" style={{ color: 'var(--accent-gold)' }}>Delete Account</a> page or email our team directly at <a href={`mailto:${APP_CONFIG.email}`} style={{ color: 'var(--accent-gold)' }}>{APP_CONFIG.email}</a>.
            </p>
          </div>

          {/* Section 10 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">10.</span> Children’s Privacy
            </h2>
            <p className="legal-paragraph">
              Celebrity Talk Hub is not intended for use by children under the age of 18. We do not knowingly collect personal data from minors. If you believe a minor has created an account, please notify us immediately so we can promptly take appropriate investigative and deletion steps.
            </p>
          </div>

          {/* Section 11 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">11.</span> Website Analytics & Cookies
            </h2>
            <p className="legal-paragraph">
              Our informational website may use essential cookies and lightweight technical analytics to understand general visitor traffic and improve page loading performance. You may configure your browser to decline cookies, though certain aspects of the website might behave differently.
            </p>
          </div>

          {/* Section 12 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">12.</span> Changes to This Privacy Policy
            </h2>
            <p className="legal-paragraph">
              We may update this Privacy Policy periodically to reflect enhancements in our application features or changes in applicable privacy regulations. We will notify users by revising the "Last Updated" date at the top of this policy.
            </p>
          </div>

          {/* Section 13 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">13.</span> Contact Details
            </h2>
            <p className="legal-paragraph">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:
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
