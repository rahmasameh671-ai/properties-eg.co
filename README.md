# properties-eg.co — Architectural & Corporate Landing Page

Official web architecture for **properties-eg.co**, an **Authorized Real Estate Brokerage & Strategic Partner** operating in the Arab Republic of Egypt with a decade of proven market leadership.

---

## 🏛️ Aesthetic Architecture & Strict Guidelines

### Strict Zero Gold Policy
- **Absolute Exclusion**: Zero gold, bronze, brass, or yellow tones across any part of the site (backgrounds, borders, shadows, typography, or iconography).
- **Calm Luxury Architectural Palette**:
  - **Dominant**: Crisp pure white (`#FFFFFF`), clean alabaster (`#FAFAFB`), and subtle stone grey (`#F4F5F7` / `#EAECEF` / `#E2E8F0`).
  - **Accents**: Deep rich charcoal / slate (`#1A202C` / `#2D3748` / `#0F172A`) for razor-sharp typography and high contrast.
  - **Cards & Modules**: Translucent frosted white cards (`rgba(255, 255, 255, 0.94)`) with delicate 1px cool borders (`#E2E8F0`).
  - **WhatsApp Integration**: Solid vibrant WhatsApp Green (`#25D366`, hover `#20BD5A`) for all direct contact triggers.

### Typography
- **Headlines**: High-end editorial Serif headlines using **Cinzel** and **Playfair Display**.
- **Body & Data Points**: Clean, ultra-readable modern Sans-serif using **Plus Jakarta Sans**.

### Layout Rules
- **No Sticky/Fixed White Bar**: The Hero section begins at the absolute top (`top: 0`), seamlessly integrating the brand signature into the architectural backdrop.
- **Mobile-First Responsiveness**: 100% thumb-friendly, smoothly collapsing into a centered single-column layout on mobile devices.

---

## 📂 Project Architecture

```
properties-eg/
├── index.html                 # Main Landing Page (Hero, 10 Years Legacy, Value Pillars, Lead Capture)
├── hyde-park/
│   └── index.html             # Standalone Dedicated /hyde-park Internal Route (One Hyde Park, Sea Shore, Central)
├── hyde-park.html             # Standalone Dedicated /hyde-park Internal Route Alias
├── sodic/
│   └── index.html             # Standalone Dedicated /sodic Internal Route (The Lakes, Ogami, East Vale)
├── sodic.html                 # Standalone Dedicated /sodic Internal Route Alias
├── privacy.html               # Standalone Routed Privacy Policy (100% White on Solid Black)
├── privacy-policy.html        # Direct URL routing alias
├── terms.html                 # Standalone Routed Terms & Conditions (100% White on Solid Black)
├── terms-conditions.html      # Direct URL routing alias
├── css/
│   ├── style.css              # Main corporate Calm Luxury stylesheet (Zero Gold)
│   ├── styles.css             # Architectural SODIC page stylesheet (Strict Zero Gold)
│   ├── hyde-park.css          # Hyde Park Portfolio Calm Luxury stylesheet (Strict Zero Gold)
│   └── legal.css              # Standalone dark legal stylesheet (#000000 background)
├── js/
│   ├── country-codes.js       # International country dataset with pure vector SVG flags (Zero Mojibake)
│   ├── main.js                # Form processing, country selector, modal engine & WhatsApp triggers
│   ├── sodic.js               # Multi-channel lead capture, Zapier webhook & conversion engine
│   └── hyde-park.js           # Hyde Park lead capture, country code selector & conversion engine
├── images/                    # High-resolution architectural photography & brand assets
│   ├── hero-masterview.jpg
│   ├── luxury-architecture.jpg
│   ├── villas-exterior.jpg
│   ├── sodic-logo.png
│   ├── sodic-east-logo.png
│   ├── sodic-east-lakes.jpg
│   ├── ogami-logo.png
│   ├── ogami-villa.webp
│   ├── eastvale-logo.png
│   ├── eastvale-architecture.jpg
│   └── the-lakes-architecture.jpg
├── .assetsignore              # Cloudflare Workers static assets ignore configuration
├── .gitignore                 # Standard clean gitignore
├── .wranglerignore            # Additional Wrangler upload ignore rules
├── package.json               # Cloudflare deployment & script configuration
├── wrangler.jsonc             # Cloudflare Workers static assets binding configuration
└── README.md                  # Comprehensive architectural & compliance documentation
```

---

## 📄 Key Sections

1. **Hero Section (10 Years of Excellence)**:
   - Starts at absolute top (`top: 0`)
   - Badge: `AUTHORIZED BROKERAGE & STRATEGIC PARTNER`
   - Headline: *A Decade of Real Estate Excellence*
   - Core Highlight: *"Backed by 10 Years of Market Expertise, Trust, and Premium Real Estate Investments."*
   - Frosted Glass Lead Capture Form:
     - Title: `REGISTER YOUR INTEREST`
     - Fields: `Full Name` (blank, NO placeholder like 'John Doe') and `Phone Number` (split layout with searchable country code dropdown, visible SVG flags, zero mojibake, and clean blank number input)
     - Submit Button: Solid dark charcoal button reading `SUBMIT`
     - Legal Disclaimer: *"By submitting, you agree to receive communications from properties-eg.co. This platform is operated by properties-eg.co, an authorized real estate brokerage."*

2. **Our Expertise Section (10 Years Highlight)**:
   - Headline: *10 Years of Unmatched Market Insight*
   - Narrative: *"For a decade, properties-eg.co has been the trusted strategic partner and authorized brokerage for elite real estate investments in Egypt. With 10 years of experience, we provide expert guidance to help you secure the perfect property."*
   - Value Pillars (3-Column Grid):
     1. **10 Years of Experience**: A decade of trust and proven market leadership.
     2. **Authorized Brokerage**: Official strategic partners with top-tier developers.
     3. **Tailored Consultation**: Step-by-step guidance for your investment.
   - CTA: Solid Green WhatsApp button (`#25D366`) reading `Speak to an Expert` linked to `+201033373331`.

3. **Hyde Park Portfolio Dedicated Route (`/hyde-park`)**:
   - Starts at absolute top (`top: 0`), zero sticky top navbar.
   - Global Sub-Branding: `By properties-eg.co` & `Independent Real Estate Consultancy`.
   - Hero Badge: `CURATED RESIDENTIAL PORTFOLIO` & Eyebrow: `BY PROPERTIES-EG.CO`.
   - Headline: *Exclusive Launch: One Hyde Park*.
   - Highlights: *Three Iconic Destinations: New Cairo & Ras El Hekma | Starting From 5.9M EGP | Installments Up to 10 Years*.
   - Strict Clean Lead Form: Title `PRIVATE ENQUIRY`, Subtitle `Request the curated portfolio`, blank Full Name input, split Phone input with pure vector SVG flags (zero mojibake, default Egypt `+20`), solid dark charcoal button reading `SUBMIT`, and legal disclaimer.
   - Dedicated Project Sections:
     - **One Hyde Park**: 2 Minutes From AUC • New Cairo, installments up to 10 years, pricing cards (1 BR: 6.4M EGP, 2 BR: 9.3M EGP, 3 BR: 11.7M EGP), solid green WhatsApp button (`#25D366`).
     - **Sea Shore**: Ras El Hekma Coastal Sanctuary, 5% down payment | 8 years installments, starting from 8M EGP, key highlights (Tiered Sea Views • Mediterranean Loggias • Direct Beach Access), solid green WhatsApp button (`#25D366`).
     - **Hyde Park Central**: Private Gated Community, 5% down payment | 10 years installments, starting from 5.9M EGP, key highlights (15-Acre Central Park • Full-Service Clubhouse • Single Secure Perimeter), solid green WhatsApp button (`#25D366`).
   - **Private Consultation Section**: Speak with a property consultant + solid green WhatsApp button reading `Chat on WhatsApp`.
   - **Authorized Consultancy Strip**: *Why Inquire Through properties-eg.co?* establishing strategic advisory status.
   - **Google Ads Policy & Legal Compliance**:
     - Business verification block: Registered operating company (properties-eg.co), office address in New Cairo, direct telephone (+20 100 508 0951), official WhatsApp, and official email.
     - Official Trademark & Developer Disclosure: Disclaiming official website status of Hyde Park Developments, crediting trademarks, and stating developer authority on pricing and availability.
     - Dual-location standalone clickable links to Privacy Policy and Terms & Conditions (under lead capture form & centered at absolute bottom).
     - Signature: © 2026 properties-eg.co — Strategic Partners.
   - Fixed floating round WhatsApp button linking to `+201033373331`.

4. **Technical Footer & Compliance**:
   - Centered branding: `By properties-eg.co`
   - Mandatory Disclaimer: *"This landing page is operated by properties-eg.co, an authorized real estate brokerage, and is not the official website of any specific developer. Prices and availability are subject to change."*
   - Clickable Standalone Legal Links: `Privacy Policy` and `Terms & Conditions`.
   - Signature: `© 2026 properties-eg.co — Authorized Real Estate Brokerage`.

4. **Standalone Legal Pages (Routed Pages)**:
   - Designed with 100% pure white text on solid black background (`#000000`).
   - Privacy Policy states data is collected solely for consultation purposes and shared strictly with authorized developers.
   - Terms & Conditions states operations as an authorized real estate brokerage with 10 years of operational expertise.

---

## 🚀 Deployment

The project is pure static HTML5/CSS3/JavaScript with zero build step dependencies. It is instantly deployable via:
- GitHub Pages
- Cloudflare Pages / Vercel / Netlify
- Any standard HTTP web server or CDN

© 2026 properties-eg.co — Authorized Real Estate Brokerage & Strategic Partner.
