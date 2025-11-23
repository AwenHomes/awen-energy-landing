# Next Steps to Launch Your Landing Page

Your Awen Energy landing page is built and running! Here's what you need to do to complete the setup and launch it.

## ✅ Completed
- [x] Next.js project initialized with TypeScript
- [x] Tailwind CSS v3 configured
- [x] All landing page components built
- [x] SEO metadata configured
- [x] Google Analytics integration setup
- [x] Responsive mobile design
- [x] Development server running at http://localhost:3001

## 🎨 1. Add Your Branding (REQUIRED)

### Logo
1. Add your Awen Energy logo to `/public/logo.png`
2. Recommended size: 400x100px or similar (transparent PNG)
3. Update the Hero component if you want to display the logo

### Brand Colors
1. Open `tailwind.config.ts`
2. Replace the placeholder color palettes with your actual brand colors:

```typescript
colors: {
  primary: {
    50: '#your-color',
    100: '#your-color',
    // ... add your brand colors
    500: '#your-main-brand-color', // Main brand color
    600: '#your-hover-color',      // Hover state
    // ... etc
  },
}
```

**Where to find your colors:**
- Use a tool like [Coolors](https://coolors.co/) or [Tailwind Color Generator](https://uicolors.app/)
- If you have a hex color (e.g., #0066CC), these tools will generate the full palette

## 📝 2. Create Your Google Form (REQUIRED)

### Form Questions to Include:
1. **Name** (Short answer, Required)
2. **Email Address** (Email validation, Required)
3. **Phone Number** (Short answer, Required)
4. **Street Address** (Short answer with City, State, ZIP, Required)
5. **How long have you had your solar system?** (Dropdown)
   - 0-3 years
   - 3-5 years
   - 5-10 years
   - 10-15 years
   - 15+ years
6. **When did your installer go out of business?** (Short answer)
7. **What brand(s) of equipment do you have?** (Checkboxes)
   - Enphase
   - SolarEdge
   - LG
   - Panasonic
   - REC
   - Qcells
   - Canadian Solar
   - Hanwha
   - Other
8. **What's not working?** (Paragraph - Describe the issue)
9. **Have you tried to get help? If so, what happened?** (Paragraph)
10. **Best time to reach you?** (Dropdown)
    - Morning (8am-12pm)
    - Afternoon (12pm-5pm)
    - Evening (5pm-8pm)
    - Anytime
11. **Consent** (Checkbox, Required):
    - "I authorize Awen Energy to contact me regarding my solar warranty recovery needs, including by phone or email, even if I am on a federal or state Do Not Call list."

### Get the Embed URL:
1. In your Google Form, click **"Send"**
2. Click the **"<>"** (Embed HTML) icon
3. Copy the URL from the `src` attribute of the iframe
4. It will look like: `https://docs.google.com/forms/d/e/[FORM_ID]/viewform?embedded=true`

### Add to Your Landing Page:
1. Open `components/ContactForm.tsx`
2. Find line 7: `const GOOGLE_FORM_URL = "YOUR_GOOGLE_FORM_EMBED_URL_HERE";`
3. Replace with your actual URL
4. Change line 10: `const hasGoogleForm = false;` to `const hasGoogleForm = true;`

## 📊 3. Set Up Google Analytics (REQUIRED)

### Create GA4 Property:
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new GA4 property for "Awen Energy"
3. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Add to Your Project:
1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
2. Edit `.env.local` and add your Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Restart your dev server (Ctrl+C, then `npm run dev`)

### Set Up Conversion Tracking:
1. In Google Analytics, go to **Admin → Events → Create Event**
2. Create a "form_submission" conversion event
3. Track when users submit the contact form

## 🌐 4. Update Domain References

Once you have your domain name, update these files:

### `app/layout.tsx` (lines 18-20):
```typescript
metadataBase: new URL("https://your-actual-domain.com"),
```

### `app/layout.tsx` (lines 27-28):
```typescript
url: "https://your-actual-domain.com",
```

### Optional - Add Google Search Console Verification:
In `app/layout.tsx` (line 47):
```typescript
google: "your-google-verification-code",
```

## 🚀 5. Deploy to Production

### Option A: Deploy to Vercel (Recommended - Easiest)
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial Awen Energy landing page"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Click "Deploy"
   - Your site will be live at: `your-project.vercel.app`

3. **Add Custom Domain:**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `awenenergy.com`)
   - Update DNS records as instructed

### Option B: Deploy to Other Hosting
- **Netlify**: Similar to Vercel, connect GitHub repo
- **AWS Amplify**: Connect GitHub and deploy
- **Traditional Hosting**: Run `npm run build`, upload `/out` folder

## 📱 6. Test Everything

### Before Launch Checklist:
- [ ] Test on desktop browser (Chrome, Safari, Firefox)
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Verify all sections load correctly
- [ ] Test "Schedule Your Free Consultation" button scroll
- [ ] Submit a test form and verify you receive it
- [ ] Check Google Analytics is tracking page views
- [ ] Verify all links work (email link, etc.)
- [ ] Read through all copy for typos
- [ ] Test FAQ accordion (questions expand/collapse)
- [ ] Verify footer disclaimers are present

## 🎯 7. Market Validation Goals

### Track These Metrics (2-week test):
- **Traffic:** How many people visit the page?
- **Engagement:** How far down do they scroll?
- **Conversions:** How many submit the form?
- **Qualified Leads:** How many meet your criteria?

### Success Targets:
- ✅ 10+ form submissions
- ✅ 3+ qualified leads willing to pay
- ✅ 1 warranty claim successfully filed

### Where to Drive Traffic:
1. **Local Solar Groups:** Facebook groups, NextDoor
2. **Solar Forums:** Reddit r/solar, Solar Reviews forums
3. **Search Ads:** Google Ads targeting "solar installer bankrupt", "broken solar panel warranty"
4. **Social Media:** LinkedIn posts about installer bankruptcies
5. **Direct Outreach:** Contact homeowners whose installers you know went bankrupt

## 🛠️ 8. Optional Enhancements (Later)

After validating the concept, consider:
- [ ] Add testimonials section (once you have happy customers)
- [ ] Add before/after case studies
- [ ] Create a blog with SEO content
- [ ] Add live chat widget
- [ ] Create a calculator tool ("Estimate Your Warranty Value")
- [ ] Add video explainer of the process
- [ ] Implement A/B testing for headlines

## 📞 9. Monitor and Iterate

### Week 1-2:
- Check Google Analytics daily
- Respond to all form submissions within 24 hours
- Track which traffic sources convert best
- Note common questions/objections

### After 2 Weeks:
- Review metrics vs. goals
- Decide: Continue, pivot, or stop
- If continuing: Refine copy based on feedback
- If successful: Scale up marketing efforts

## 🐛 Troubleshooting

### Development Server Won't Start:
```bash
# Kill any running processes
pkill -f "next dev"

# Restart
npm run dev
```

### Styles Not Loading:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Environment Variables Not Working:
1. Ensure `.env.local` exists (not `.env.local.example`)
2. Restart dev server after adding/changing env vars
3. Verify variable starts with `NEXT_PUBLIC_`

## 📚 Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Google Analytics 4:** https://analytics.google.com
- **Vercel Deployment:** https://vercel.com/docs

## 📧 Questions?

Your landing page is ready to validate your business idea! The development server is running at **http://localhost:3001** - open it in your browser to see your site.

Remember: The goal is to validate demand, not perfection. Get it live, drive traffic, and see if people respond!

---

**Current Status:** 🟢 Ready to customize and launch

**Immediate Next Steps:**
1. Add your brand colors to `tailwind.config.ts`
2. Create and embed your Google Form
3. Set up Google Analytics
4. Deploy to Vercel

Good luck with your market validation! 🚀
