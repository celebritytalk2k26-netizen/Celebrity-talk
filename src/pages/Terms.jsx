import React from 'react';
import { APP_CONFIG } from '../config';
import { Shield, FileText } from 'lucide-react';

export default function Terms() {
  return (
    <main>
      <div className="legal-page-header">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '0.75rem', fontWeight: 600 }}>
            <FileText size={20} />
            <span>Legal Documentation</span>
          </div>
          <h1 className="legal-page-title">Terms & Conditions</h1>
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
              <span className="section-num">1.</span> Introduction and Acceptance of Terms
            </h2>
            <p className="legal-paragraph">
              Welcome to <strong>Celebrity Talk Hub</strong>. These Terms & Conditions ("Terms") govern your access to and use of the Celebrity Talk Hub mobile application, website, and related audio and video communication services ("Services"), operated by <strong>{APP_CONFIG.businessName}</strong> ("we", "us", or "our").
            </p>
            <p className="legal-paragraph">
              By downloading, accessing, registering, or using our Services, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must immediately discontinue using our application and website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">2.</span> Eligibility and Minimum Age Requirements
            </h2>
            <p className="legal-paragraph">
              You must be at least 18 years of age (or the minimum legal age of majority in your jurisdiction) to create an account and use Celebrity Talk Hub. By using our Services, you represent and warrant that you have the full legal capacity to enter into these Terms and comply with all applicable local, national, and international laws.
            </p>
            <p className="legal-paragraph">
              If you are using the Services on behalf of any entity or organization, you represent that you have legal authorization to bind that entity to these Terms.
            </p>
          </div>

          {/* Section 3 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">3.</span> Account Registration and Security
            </h2>
            <p className="legal-paragraph">
              To access calling features, you may be required to register an account using the authentication options provided in the mobile application. You agree to:
            </p>
            <ul className="legal-list">
              <li>Provide accurate, current, and complete registration information.</li>
              <li>Maintain and promptly update your account profile information.</li>
              <li>Safeguard your authentication credentials and device access.</li>
              <li>Notify us immediately at <a href={`mailto:${APP_CONFIG.email}`} style={{ color: 'var(--accent-gold)' }}>{APP_CONFIG.email}</a> if you detect or suspect unauthorized access to your account.</li>
            </ul>
            <p className="legal-paragraph">
              You are solely responsible for all activities, actions, and communications conducted through your registered account.
            </p>
          </div>

          {/* Section 4 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">4.</span> Description of Audio & Video Calling Services
            </h2>
            <p className="legal-paragraph">
              Celebrity Talk Hub provides mobile-based communication tools enabling users to initiate and participate in:
            </p>
            <ul className="legal-list">
              <li><strong>Audio Calling:</strong> Real-time voice calls with other registered users.</li>
              <li><strong>Video Calling:</strong> Real-time face-to-face visual and voice interactions.</li>
            </ul>
            <p className="legal-paragraph">
              Calling functionality requires active device permissions (such as microphone and camera access) and an adequate internet connection (Wi-Fi or cellular data). We do not warrant that calling features will be uninterrupted, error-free, or compatible with all network environments and mobile hardware.
            </p>
          </div>

          {/* Section 5 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">5.</span> User Responsibilities and Acceptable Use
            </h2>
            <p className="legal-paragraph">
              You agree to use Celebrity Talk Hub in a respectful, lawful, and ethical manner. You agree that you will not:
            </p>
            <ul className="legal-list">
              <li>Misuse audio or video calling features to harass, intimidate, stalk, threaten, defame, or cause distress to any individual.</li>
              <li>Impersonate any person, celebrity, public figure, or brand, or falsely state or misrepresent an affiliation with any individual or entity.</li>
              <li>Transmit, display, or broadcast obscene, pornographic, sexually explicit, violent, hateful, or otherwise unlawful material during calls or on your profile.</li>
              <li>Engage in fraudulent activities, scamming, commercial solicitation, unsolicited spam, or deceptive practices.</li>
              <li>Record audio or video calls without the express, informed consent of all participating parties where required by applicable law.</li>
              <li>Attempt to reverse engineer, decompile, intercept, tamper with, or compromise the security and stability of our servers, networks, or applications.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">6.</span> Prohibited Activities & Zero-Tolerance Policy
            </h2>
            <p className="legal-paragraph">
              We enforce a strict zero-tolerance policy against unlawful conduct, sexual exploitation, abuse, hate speech, extortion, and harassment. We reserve the immediate right to investigate reports, suspend calling privileges, terminate accounts, and cooperate with law enforcement authorities whenever unlawful activities or severe violations are identified.
            </p>
          </div>

          {/* Section 7 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">7.</span> User Safety, Reporting, and Blocking
            </h2>
            <p className="legal-paragraph">
              Where available in the mobile application, users may utilize built-in blocking and reporting tools to prevent unwanted contacts from initiating calls. In addition, users may submit violation reports directly to our safety and support team at <a href={`mailto:${APP_CONFIG.email}`} style={{ color: 'var(--accent-gold)' }}>{APP_CONFIG.email}</a>.
            </p>
          </div>

          {/* Section 8 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">8.</span> User Content and Intellectual Property
            </h2>
            <p className="legal-paragraph">
              You retain ownership of any profile picture, display name, or bio you upload. However, you grant Celebrity Talk Hub a worldwide, non-exclusive, royalty-free license to host, display, and process your profile data strictly as necessary to operate and deliver the calling services.
            </p>
            <p className="legal-paragraph">
              All intellectual property rights in the Celebrity Talk Hub application, brand, trademarks, logo, design system, and underlying software are exclusively owned by <strong>{APP_CONFIG.businessName}</strong> and its licensors.
            </p>
          </div>

          {/* Section 9 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">9.</span> Paid Features, Coins, and Payment Terms (If Applicable)
            </h2>
            <p className="legal-paragraph">
              If the application introduces optional paid features, virtual coins, or premium calling packages, the applicable pricing and billing terms will be transparently displayed prior to purchase within the application or the respective app store.
            </p>
            <div className="callout-box">
              <strong>Notice:</strong> All in-app purchases processed through the Google Play Store or Apple App Store are governed by their respective billing terms and consumer policies. Direct purchase rules and refund conditions are outlined in our dedicated Refund Policy.
            </div>
          </div>

          {/* Section 10 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">10.</span> Service Availability and Maintenance
            </h2>
            <p className="legal-paragraph">
              We strive to maintain continuous availability of our Services; however, we do not guarantee uninterrupted uptime. From time to time, calling features may experience temporary maintenance, server upgrades, telecom disruptions, or unexpected outages. We are not liable for any failure or delay resulting from matters beyond our reasonable control.
            </p>
          </div>

          {/* Section 11 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">11.</span> Suspension and Termination
            </h2>
            <p className="legal-paragraph">
              We may suspend or permanently terminate your account and access to the Services at any time, with or without notice, if you breach these Terms, engage in harmful conduct, or if required by law or judicial request.
            </p>
          </div>

          {/* Section 12 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">12.</span> Account Deletion
            </h2>
            <p className="legal-paragraph">
              You have the right to request the deletion of your account at any time. Instructions for account deletion are provided in our dedicated Delete Account section and can be initiated via in-app settings (where available) or by contacting our team at <a href={`mailto:${APP_CONFIG.email}`} style={{ color: 'var(--accent-gold)' }}>{APP_CONFIG.email}</a>.
            </p>
          </div>

          {/* Section 13 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">13.</span> Limitation of Liability
            </h2>
            <p className="legal-paragraph">
              To the maximum extent permitted by applicable law, in no event shall <strong>{APP_CONFIG.businessName}</strong>, its partners, employees, developers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, profits, goodwill, or personal distress arising from your use of or inability to use the calling services, or unauthorized access to your transmissions.
            </p>
          </div>

          {/* Section 14 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">14.</span> Governing Law and Dispute Resolution
            </h2>
            <p className="legal-paragraph">
              These Terms shall be governed by, construed, and enforced in accordance with the laws of <strong>India</strong>, without regard to its conflict of law principles. Any dispute, claim, or controversy arising out of or relating to these Terms or the breach thereof shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </div>

          {/* Section 15 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">15.</span> Amendments to These Terms
            </h2>
            <p className="legal-paragraph">
              We reserve the right to modify these Terms at any time. Updated versions will be posted on this page with a revised "Last Updated" date. Your continued use of the application after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </div>

          {/* Section 16 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">16.</span> Contact Information
            </h2>
            <p className="legal-paragraph">
              For any legal questions, clarifications, or complaints regarding these Terms, please contact us:
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
