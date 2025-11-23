# Awen Energy - Solar Warranty Recovery Service Landing Page

A Next.js landing page to validate market demand for a solar warranty recovery consulting service.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Copy the example environment file and add your Google Analytics ID:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Google Analytics 4 Measurement ID:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📋 To-Do Before Launch

### 1. **Add Your Logo and Brand Colors**
- Add your Awen Energy logo to `/public/logo.png`
- Update brand colors in `tailwind.config.ts`:
  - Replace the `primary` color palette with your brand colors
  - Replace the `secondary` color palette if needed

### 2. **Set Up Google Form**
1. Create a Google Form with these questions:
   - Name (required)
   - Email (required)
   - Phone Number (required)
   - Address (City, State, ZIP)
   - How long have you had your solar system?
   - When did your installer go out of business?
   - What brand(s) of equipment do you have?
   - What's not working?
   - Have you tried to get help?
   - Best time to reach you?
   - DNC consent checkbox (required)

2. Get the embed URL:
   - Click "Send" in your Google Form
   - Click the "<>" (Embed HTML) icon
   - Copy the URL from the iframe `src` attribute

3. Update `components/ContactForm.tsx`:
   - Replace `YOUR_GOOGLE_FORM_EMBED_URL_HERE` with your URL
   - Change `hasGoogleForm` to `true`

### 3. **Set Up Google Analytics**
1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (format: G-XXXXXXXXXX)
3. Add it to `.env.local` as `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. Set up conversion tracking for form submissions

### 4. **Update Domain References**
Update the following files with your actual domain:
- `app/layout.tsx` - Update `metadataBase` URL
- `app/layout.tsx` - Update OpenGraph URLs

### 5. **Add Verification Codes** (Optional)
In `app/layout.tsx`, add verification codes for:
- Google Search Console
- Bing Webmaster Tools
- Other services as needed

## 🏗️ Project Structure

```
/app
  ├── layout.tsx          # Root layout with SEO metadata
  ├── page.tsx            # Main landing page
  └── globals.css         # Global styles with Tailwind

/components
  ├── Hero.tsx            # Hero section with CTA
  ├── ProblemStatement.tsx # Problem/pain points
  ├── WhoThisIsFor.tsx    # Qualifying criteria
  ├── HowItWorks.tsx      # 3-stage process
  ├── Pricing.tsx         # Pricing breakdown
  ├── FAQ.tsx             # Frequently asked questions
  ├── ContactForm.tsx     # Google Form embed
  ├── Footer.tsx          # Footer with disclaimers
  └── GoogleAnalytics.tsx # GA4 integration

/public
  └── (add your logo here)
```

## 📱 Landing Page Sections

1. **Hero** - Compelling headline with CTA
2. **Problem Statement** - Address pain points of orphaned solar systems
3. **Who This Is For** - Qualifying criteria (green) and exclusions (gray)
4. **How It Works** - 3-stage process breakdown
5. **Pricing** - Transparent pricing with examples
6. **FAQ** - Common questions and answers
7. **Contact Form** - Google Form for lead capture
8. **Footer** - Contact info and legal disclaimers

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
```typescript
colors: {
  primary: { /* your brand colors */ },
  secondary: { /* accent colors */ },
}
```

### Content
All content is in the component files. Update text directly in:
- `/components/*.tsx` files

### Styling
- Global styles: `app/globals.css`
- Component-specific: inline in each component
- Tailwind utilities: used throughout components

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Build for Production
```bash
npm run build
npm start
```

## 📊 Analytics & Tracking

The site includes:
- Google Analytics 4 page view tracking
- Event tracking helpers in `components/GoogleAnalytics.tsx`
- Conversion tracking setup (configure in GA4 dashboard)

Track custom events:
```typescript
import { trackEvent } from '@/components/GoogleAnalytics';

trackEvent('button_click', {
  button_name: 'schedule_consultation',
  section: 'hero'
});
```

## 📝 Legal Disclaimers

The Footer component includes required disclaimers:
- No guarantee of warranty approval
- Service scope limitations
- DNC contact authorization
- Not legal/financial advice

## 🎯 Goal: Market Validation

Success Metrics:
- 10+ form submissions in first 2 weeks
- 3+ qualified leads
- Track conversion rates via Google Analytics

## 📞 Support

For questions about this landing page:
- Email: info@awenenergy.com

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Analytics:** Google Analytics 4
- **Form:** Google Forms (embedded)
- **Hosting:** Vercel (recommended)

## 📄 License

Private - Awen Energy
