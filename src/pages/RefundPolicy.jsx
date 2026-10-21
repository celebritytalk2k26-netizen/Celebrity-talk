import React from 'react';
import { APP_CONFIG } from '../config';
import { RefreshCcw, DollarSign, AlertCircle, ShoppingBag } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <main>
      <div className="legal-page-header">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '0.75rem', fontWeight: 600 }}>
            <RefreshCcw size={20} />
            <span>Customer Billing & Transparency</span>
          </div>
          <h1 className="legal-page-title">Refund Policy</h1>
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
              <span className="section-num">1.</span> Scope of Refund Policy
            </h2>
            <p className="legal-paragraph">
              This Refund Policy applies to purchases and transactions made within the <strong>Celebrity Talk Hub</strong> mobile application operated by <strong>{APP_CONFIG.businessName}</strong>. Our goal is to provide a clear, fair, and transparent process for resolving billing inquiries and refund requests regarding our audio and video communication features.
            </p>
          </div>

          {/* Section 2 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">2.</span> Google Play Store & Apple App Store Purchases
            </h2>
            <p className="legal-paragraph">
              Celebrity Talk Hub distributed through the Google Play Store and Apple App Store complies with the respective platform billing systems:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Google Play Store Purchases:</strong> In-app purchases made on Android devices are subject to Google Play’s refund terms. Users may request refunds directly through Google Play’s order history or purchase support.
              </li>
              <li>
                <strong>Apple App Store Purchases:</strong> In-app purchases made on iOS devices are processed exclusively by Apple. To request a refund for an iOS transaction, please visit Apple’s official support page at <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>reportaproblem.apple.com</a>.
              </li>
            </ul>
            <div className="callout-box info">
              Celebrity Talk Hub cannot directly cancel or refund transactions billed by Apple or Google on your behalf due to platform security guidelines. However, our support team can assist you with transaction details and dispute documentation.
            </div>
          </div>

          {/* Section 3 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">3.</span> Eligible Refund Scenarios
            </h2>
            <p className="legal-paragraph">
              Subject to verification, refund requests or balance adjustments may be considered under the following specific circumstances:
            </p>
            <ul className="legal-list">
              <li><strong>Duplicate Charges:</strong> In instances where your payment method was erroneously charged more than once for a single intended transaction.</li>
              <li><strong>Payment Deducted but Service Not Delivered:</strong> Cases where funds were successfully deducted from your bank/card, but the purchased calling package or virtual balance failed to credit to your account due to technical signaling issues.</li>
              <li><strong>Verified Technical Failures:</strong> Major app crashes or server errors attributable directly to our infrastructure that prevented you from utilizing the purchased calling service.</li>
              <li><strong>Unauthorized Transactions:</strong> Fraudulent transactions resulting from unauthorized account compromises, subject to formal investigation and bank verification.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">4.</span> Ineligible Refund Circumstances
            </h2>
            <p className="legal-paragraph">
              Refunds generally will not be granted in the following scenarios:
            </p>
            <ul className="legal-list">
              <li>Calling minutes or virtual balances that have already been consumed or spent during audio and video calls.</li>
              <li>Dissatisfaction arising from another user's personal conversation demeanor or subjective personal preferences.</li>
              <li>Poor call quality or dropped calls caused by the user’s unstable local Wi-Fi, cellular coverage, or incompatible mobile hardware.</li>
              <li>Accounts that have been suspended or terminated due to violations of our Terms & Conditions, harassment, or abusive conduct.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">5.</span> How to Submit a Refund Request
            </h2>
            <p className="legal-paragraph">
              To submit a refund inquiry regarding direct or partner transactions, please contact our support desk at <a href={`mailto:${APP_CONFIG.email}`} style={{ color: 'var(--accent-gold)' }}>{APP_CONFIG.email}</a> with the following details:
            </p>
            <ul className="legal-list">
              <li>Your registered email address or phone number in the app.</li>
              <li>Order ID or Transaction Reference number.</li>
              <li>Date and amount of the transaction.</li>
              <li>Clear description of the issue or technical error encountered.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">6.</span> Review and Processing Timelines
            </h2>
            <p className="legal-paragraph">
              Our billing support team reviews refund requests within 5–7 business days of receipt. Once an eligible refund is approved, the funds are initiated back to the original payment method through the applicable payment gateway or store processor within standard banking turnaround times (typically 7–14 business days, depending on your financial institution).
            </p>
          </div>

          {/* Section 7 */}
          <div className="legal-section-block">
            <h2 className="legal-heading">
              <span className="section-num">7.</span> Billing Support Contact
            </h2>
            <p className="legal-paragraph">
              For any billing questions or refund inquiries, please contact:
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
