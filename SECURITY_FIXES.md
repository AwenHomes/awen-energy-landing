# Security Fixes - Quick Action Guide

This document provides step-by-step instructions to fix the security vulnerabilities identified in the security audit.

---

## 🔴 HIGH PRIORITY - Fix Immediately

### 1. Fix Dependency Vulnerabilities

**Issue:** The `glob` package has a command injection vulnerability (CVSS 7.5)

**Steps to fix:**

```bash
# Option 1: Automatic fix (recommended)
npm audit fix

# Option 2: Update to latest Next.js and ESLint config
npm install eslint-config-next@latest

# Option 3: Force update (if Option 1 doesn't work)
npm audit fix --force

# Verify the fix
npm audit
```

**Expected result:** `npm audit` should show 0 vulnerabilities

**Time required:** 5 minutes

---

## 🟡 MEDIUM PRIORITY - Fix Before Production

### 2. Add Security Headers

**Issue:** Missing critical security headers (CSP, X-Frame-Options, HSTS, etc.)

**Steps to fix:**

1. Replace `next.config.mjs` with the recommended configuration:

```bash
# Backup current config
cp next.config.mjs next.config.mjs.backup

# Apply recommended configuration
cp next.config.mjs.recommended next.config.mjs
```

2. Test locally:

```bash
npm run dev
```

3. Check headers using browser DevTools:
   - Open DevTools (F12)
   - Go to Network tab
   - Reload page
   - Click on the main document request
   - Check Response Headers

4. Verify these headers are present:
   - ✅ `X-Frame-Options: SAMEORIGIN`
   - ✅ `X-Content-Type-Options: nosniff`
   - ✅ `Content-Security-Policy: ...`
   - ✅ `Referrer-Policy: strict-origin-when-cross-origin`

**⚠️ Important Notes:**
- **HSTS (Strict-Transport-Security):** Only enable if your site uses HTTPS
- If you encounter CSP errors in console, adjust the policy in `next.config.mjs`
- Google Analytics requires `'unsafe-inline'` and `'unsafe-eval'` in script-src

**Time required:** 15 minutes

---

### 3. Move Google Form URL to Environment Variable

**Issue:** Google Form URL is hardcoded in component

**Steps to fix:**

1. Add to `.env.local` (create if doesn't exist):

```bash
echo "NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/1FAIpQLSchkgLCqjUoOQN0XKE6Afb0KjbsnF6ZfvSxLxkcm83sSMrtBw/viewform?embedded=true" >> .env.local
```

2. Update `.env.local.example`:

```bash
cat >> .env.local.example << 'EOF'

# Google Forms Contact Form URL
# Get this from your Google Form "Send" -> "Embed HTML" -> Copy iframe src URL
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
EOF
```

3. Update `components/ContactForm.tsx`:

Replace line 10:
```typescript
// OLD:
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSchkgLCqjUoOQN0XKE6Afb0KjbsnF6ZfvSxLxkcm83sSMrtBw/viewform?embedded=true";

// NEW:
const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "";
```

4. Test:

```bash
npm run dev
# Verify form still loads correctly
```

**Time required:** 10 minutes

---

### 4. Fix SEO Verification Code Placeholders

**Issue:** Placeholder verification codes exposed in metadata

**Steps to fix:**

**Option A: Remove placeholders (recommended if not using yet)**

Edit `app/layout.tsx`, replace lines 55-60:

```typescript
// Remove or comment out until you have real codes
// verification: {
//   google: "your-google-verification-code",
// },
```

**Option B: Use environment variables (recommended for production)**

1. Add to `.env.local`:

```bash
# Add real codes from Google Search Console, Bing Webmaster Tools, etc.
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-real-code-here
```

2. Update `app/layout.tsx`:

```typescript
verification: {
  google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
},
```

**Time required:** 5 minutes

---

## 📋 Verification Checklist

After applying fixes, verify:

- [ ] `npm audit` shows 0 vulnerabilities
- [ ] Security headers are present in browser DevTools Network tab
- [ ] Google Form still loads and works correctly
- [ ] Google Analytics still tracks (check in Real-Time reports)
- [ ] No console errors related to CSP violations
- [ ] Site still builds: `npm run build`
- [ ] Site still runs: `npm start`

---

## 🚀 Deployment Checklist

Before deploying to production:

1. Environment Variables:
   - [ ] Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in production environment
   - [ ] Set `NEXT_PUBLIC_GOOGLE_FORM_URL` in production environment
   - [ ] Set `NEXT_PUBLIC_GOOGLE_VERIFICATION` if using SEO verification

2. Security:
   - [ ] All HIGH priority fixes applied
   - [ ] Security headers configured
   - [ ] Dependencies updated (npm audit clean)
   - [ ] HTTPS enabled (required for HSTS)

3. Testing:
   - [ ] Test contact form submission
   - [ ] Test Google Analytics tracking
   - [ ] Check browser console for errors
   - [ ] Verify security headers with online tools:
     - https://securityheaders.com
     - https://observatory.mozilla.org

---

## 🛠️ Automated Fix Script

You can run this script to apply some fixes automatically:

```bash
#!/bin/bash

echo "🔧 Applying security fixes..."

# 1. Fix dependencies
echo "📦 Updating dependencies..."
npm audit fix

# 2. Backup current config
echo "💾 Backing up next.config.mjs..."
cp next.config.mjs next.config.mjs.backup

# 3. Apply recommended config
echo "⚙️ Applying security headers..."
cp next.config.mjs.recommended next.config.mjs

# 4. Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
  echo "📝 Creating .env.local..."
  cp .env.local.example .env.local
  echo "NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/1FAIpQLSchkgLCqjUoOQN0XKE6Afb0KjbsnF6ZfvSxLxkcm83sSMrtBw/viewform?embedded=true" >> .env.local
fi

# 5. Run build test
echo "🧪 Testing build..."
npm run build

echo "✅ Security fixes applied! Please review changes and test thoroughly."
echo "📖 See SECURITY_FIXES.md for manual fixes still required."
```

Save as `apply-security-fixes.sh` and run:
```bash
chmod +x apply-security-fixes.sh
./apply-security-fixes.sh
```

---

## 🆘 Troubleshooting

### CSP Errors in Console

If you see CSP violation errors:

1. Check browser console for specific violations
2. Adjust CSP in `next.config.mjs` to allow the blocked resource
3. Only add `'unsafe-inline'` or `'unsafe-eval'` if absolutely necessary

### Google Analytics Not Working

If GA stops tracking:

1. Check that GA_MEASUREMENT_ID is set correctly
2. Verify CSP allows `https://www.googletagmanager.com` and `https://www.google-analytics.com`
3. Check for console errors

### Build Failures

If build fails after updates:

1. Clear cache: `rm -rf .next node_modules`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`

---

## 📞 Need Help?

If you encounter issues:

1. Review the full audit report: `SECURITY_AUDIT_REPORT.md`
2. Check Next.js security documentation: https://nextjs.org/docs/app/building-your-application/configuring/security-headers
3. Restore backup: `cp next.config.mjs.backup next.config.mjs`

---

**Last Updated:** November 24, 2025
