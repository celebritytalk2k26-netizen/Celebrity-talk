# Celebrity Talk Hub Website

A responsive, modern website for **Celebrity Talk Hub**, featuring an original luxury dark & gold design, complete legal documentation suite, app-download showcase, and centralized business configuration.

---

## 🎨 Color Palette & Design System

The design strictly follows the custom dark & gold aesthetic:

- **Main background:** `#100F0E` (near-black)
- **Header & navigation:** `#1B1917` (dark charcoal with backdrop blur)
- **Content cards & panels:** `#1C1916` (warm dark brown-black)
- **Primary accent:** `#CDA552` (elegant gold)
- **Primary text:** `#F5F5F5` (soft white)
- **Secondary text:** `#7FADE0` (muted blue)
- **Borders & dividers:** `#302B25` (subtle dark brown)
- **Buttons:** Gold background (`#CDA552`) with dark text (`#100F0E`) for primary actions; dark cards with gold borders for secondary actions.

---

## ⚙️ Centralized Configuration (`src/config.js`)

All store download links, contact details, and firm identity info are centrally managed in [`src/config.js`](./src/config.js).

### Configuring App Store Links
When official app store URLs are published, update `storeLinks` in [`src/config.js`](./src/config.js):

```javascript
storeLinks: {
  googlePlay: {
    url: "https://play.google.com/store/apps/details?id=com.celebritytalkhub.app",
    badgeText: "Google Play",
    status: "Coming Soon"
  },
  appleAppStore: {
    url: "https://apps.apple.com/app/celebrity-talk-hub/id123456789",
    badgeText: "App Store",
    status: "Coming Soon"
  }
}
```

*When URLs are empty `""`, the store buttons automatically render the elegant "Coming Soon" status with the "App In Development" indicator. When URLs are supplied, the buttons automatically convert into active download links.*

---

## 📑 Pages and Routes

1. **Homepage (`/`)**:
   - Hero Section with tagline *"Make Every Conversation Special"* and *"Connect. Talk. Experience Celebrity Talk Hub."*
   - Audio and video calling visual representation with call controls preview.
   - Calling showcase highlights.
   - Core Features grid: Audio Calling, Video Calling, Simple UX, User Profiles, Secure Communication, Convenient Access.
   - About Us & Mission statement.
   - How It Works 3-step walkthrough.
   - Dedicated App Download Section with Google Play & Apple App Store cards.
   - Interactive Contact section with direct email/phone links and contact form.
2. **Terms & Conditions (`/terms`)**: 16 structured, numbered sections tailored to audio/video calling, eligibility, acceptable use, safety, dispute resolution under Indian law, and contact information.
3. **Privacy Policy (`/privacy-policy`)**: Detailed data practices including camera & microphone permissions, calling signaling metadata, storage, retention, user rights, and children's privacy.
4. **Delete Account (`/delete-account`)**: Dedicated policy with an active "Request Account Deletion via Email" button that launches a prefilled email to `Celebritytalk2k26@gmail.com`.
5. **Refund Policy (`/refund-policy`)**: Transparent billing guidelines addressing store-billed purchases (Google Play & Apple App Store), eligible refund conditions, and timelines.
6. **Cancellation Policy (`/cancellation-policy`)**: Information on call disconnections, ongoing audio/video call treatment, store subscription management, and distinguishing account deletion from subscription cancellation.
7. **Custom 404 Page**: Responsive fallback page with one-click return to homepage.

---

## 🏢 Business & Attribution Information

- **App Name:** Celebrity Talk Hub
- **Business Name:** We Brand You IT Solutions Partnership Firm
- **Email:** Celebritytalk2k26@gmail.com
- **Phone:** +91 77368 61666
- **Developer Credit:** Designed & developed by [Zartek](https://zartek.in/)
- **Copyright:** © 2026 Celebrity Talk Hub · We Brand You IT Solutions Partnership Firm. All rights reserved.

---

## 🚀 Running the Project

### Development Server:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
```

### Local Preview:
```bash
npm run preview
```
