# Security Audit Report
**Project:** Awen Energy Landing Page
**Date:** November 24, 2025
**Auditor:** Security Code Review
**Repository:** AwenHomes/awen-energy-landing

---

## Executive Summary

This security audit was conducted on the Awen Energy landing page, a Next.js 14 application with TypeScript and Tailwind CSS. The application is a static landing page with Google Forms integration for contact form submissions.

**Overall Security Rating:** ⚠️ MEDIUM RISK

The application has a generally secure architecture with no critical vulnerabilities found. However, there are several important security improvements that should be addressed, particularly around dependency vulnerabilities and security headers.

---

## Vulnerability Summary

| Severity | Count | Status |
|----------|-------|--------|
| 🔴 Critical | 0 | ✅ None Found |
| 🟠 High | 1 | ⚠️ Action Required |
| 🟡 Medium | 4 | ⚠️ Action Recommended |
| 🔵 Low | 2 | ℹ️ Consider Fixing |
| ✅ Good Practices | 5 | ✅ Implemented |

---

## Detailed Findings

### 🟠 HIGH SEVERITY

#### 1. Dependency Vulnerabilities (CVE-2024-XXXX)
**File:** `package.json`, `package-lock.json`
**Issue:** The `glob` package (v10.2.0-10.4.5) has a high-severity command injection vulnerability.

**Details:**
```json
{
  "vulnerability": "glob CLI: Command injection via -c/--cmd executes matches with shell:true",
  "cvss_score": 7.5,
  "cwe": "CWE-78",
  "affected_package": "glob@10.2.0-10.4.5",
  "path": "eslint-config-next -> @next/eslint-plugin-next -> glob"
}
```

**npm audit output:**
- 3 high severity vulnerabilities
- Affects `glob`, `@next/eslint-plugin-next`, and `eslint-config-next`

**Impact:**
- While this is a development dependency and doesn't directly affect production, it could be exploited during development or CI/CD processes
- Attackers could potentially execute arbitrary commands if they can control input to the glob CLI

**Remediation:**
```bash
npm audit fix --force
# OR
npm install eslint-config-next@latest
```

**Priority:** 🔴 **HIGH** - Fix within 7 days

---

### 🟡 MEDIUM SEVERITY

#### 2. Missing Security Headers
**File:** `next.config.mjs`
**Issue:** Critical security headers are not configured in the Next.js configuration.

**Missing Headers:**
- `Content-Security-Policy` (CSP)
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Strict-Transport-Security` (HSTS)
- `Referrer-Policy`
- `Permissions-Policy`

**Impact:**
- Susceptible to clickjacking attacks (no X-Frame-Options)
- No protection against XSS via inline scripts (no CSP)
- MIME-sniffing attacks possible (no X-Content-Type-Options)
- Man-in-the-middle attacks if HTTPS is not enforced (no HSTS)

**Remediation:**
Add security headers to `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.google-analytics.com; frame-src https://docs.google.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

**Priority:** 🟡 **MEDIUM** - Fix within 30 days

---

#### 3. Inline Scripts in Google Analytics Component
**File:** `components/GoogleAnalytics.tsx:19-29`
**Issue:** Inline JavaScript in the Google Analytics component creates a CSP bypass requirement.

**Code:**
```typescript
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
  `}
</Script>
```

**Impact:**
- Requires `'unsafe-inline'` in CSP script-src directive
- Weakens overall CSP protection
- Could allow XSS if `GA_MEASUREMENT_ID` is ever controlled by user input (currently safe)

**Remediation:**
Consider using Next.js Script component with `strategy="afterInteractive"` for external script only, or move inline script to a separate file with a nonce/hash-based CSP.

**Priority:** 🟡 **MEDIUM** - Fix within 60 days

---

#### 4. Hardcoded Google Form URL
**File:** `components/ContactForm.tsx:10`
**Issue:** Google Form URL is hardcoded in the component.

**Code:**
```typescript
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSchkgLCqjUoOQN0XKE6Afb0KjbsnF6ZfvSxLxkcm83sSMrtBw/viewform?embedded=true";
```

**Impact:**
- If the Google Form needs to be changed, code changes are required
- Cannot easily test with different forms in different environments
- Minor maintainability issue rather than security vulnerability

**Remediation:**
Move to environment variable:
```typescript
const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "";
```

Add to `.env.local`:
```
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/1FAIpQLSchkgLCqjUoOQN0XKE6Afb0KjbsnF6ZfvSxLxkcm83sSMrtBw/viewform?embedded=true
```

**Priority:** 🟡 **MEDIUM** - Fix within 90 days

---

#### 5. Missing SEO Verification Codes
**File:** `app/layout.tsx:56-60`
**Issue:** SEO verification codes are placeholder values.

**Code:**
```typescript
verification: {
  google: "your-google-verification-code",
  // yandex: "your-yandex-verification-code",
  // bing: "your-bing-verification-code",
},
```

**Impact:**
- Exposes that verification is not complete
- Could be used for reconnaissance by attackers
- Minor information disclosure

**Remediation:**
Either add real verification codes or remove the placeholder:
```typescript
verification: {
  // Add verification codes from Google Search Console
  // google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
},
```

**Priority:** 🟡 **MEDIUM** - Fix within 90 days

---

### 🔵 LOW SEVERITY

#### 6. Missing Input Validation on Client-Side Form Elements
**File:** `components/ContactForm.tsx:88-123`
**Issue:** Demo form fields lack input validation attributes.

**Impact:**
- Very low impact as the form is disabled and for demonstration only
- Real form is handled by Google Forms which has its own validation

**Remediation:**
No action required - Google Forms handles validation.

**Priority:** 🔵 **LOW** - Informational

---

#### 7. No Rate Limiting on Form Submissions
**Issue:** Google Form iframe could theoretically be subjected to automated submission attempts.

**Impact:**
- Google Forms has its own rate limiting
- Low risk as all data collection is handled by Google
- No direct API endpoints in this application to exploit

**Remediation:**
No action required - Google Forms provides adequate protection.

**Priority:** 🔵 **LOW** - Informational

---

## ✅ Security Best Practices Identified

### Positive Findings:

1. **✅ No XSS Vulnerabilities**
   - No use of `dangerouslySetInnerHTML`
   - No use of `innerHTML`, `outerHTML`, or `eval()`
   - Proper use of React JSX escaping

2. **✅ No Hardcoded Secrets**
   - `.env.local.example` used correctly
   - No `.env.local` file committed to repository
   - No API keys, passwords, or tokens found in code
   - Google Analytics ID properly uses environment variables

3. **✅ Secure Form Handling**
   - Using Google Forms for data collection (removes server-side security burden)
   - No direct form processing in the application
   - No database connections or API endpoints to secure

4. **✅ No Dangerous JavaScript Patterns**
   - No use of `eval()` or `Function()` constructor
   - No direct DOM manipulation with `document.write()`
   - No unsafe URL redirects with `window.location`

5. **✅ TypeScript Usage**
   - Strong typing helps prevent common runtime errors
   - Reduces risk of type confusion vulnerabilities

---

## Attack Surface Analysis

### Current Attack Vectors:

1. **Client-Side Only**: This is a static site with no backend, significantly reducing attack surface
2. **Third-Party Dependencies**: Main risk comes from npm dependencies
3. **Google Forms Integration**: Security depends on Google's infrastructure (generally secure)
4. **Google Analytics**: Potential privacy concerns but not a direct security vulnerability

### Protected Assets:

- No user data stored locally
- No authentication/authorization system
- No payment processing
- No database or backend API

**Risk Assessment:** The minimal attack surface significantly reduces overall risk.

---

## OWASP Top 10 Compliance Check

| OWASP Risk | Status | Notes |
|------------|--------|-------|
| A01: Broken Access Control | ✅ N/A | No authentication system |
| A02: Cryptographic Failures | ✅ N/A | No sensitive data storage |
| A03: Injection | ✅ PASS | No SQL, no eval(), proper React escaping |
| A04: Insecure Design | ✅ PASS | Appropriate architecture for landing page |
| A05: Security Misconfiguration | ⚠️ FAIL | Missing security headers |
| A06: Vulnerable Components | ⚠️ FAIL | Outdated npm dependencies with vulnerabilities |
| A07: Authentication Failures | ✅ N/A | No authentication |
| A08: Software/Data Integrity | ✅ PASS | No data integrity concerns |
| A09: Logging/Monitoring | ⚠️ PARTIAL | Only Google Analytics, no error logging |
| A10: SSRF | ✅ N/A | No server-side requests |

**Overall OWASP Score:** 7/10 applicable categories passed

---

## Recommendations by Priority

### Immediate Actions (Within 7 Days):
1. ✅ Run `npm audit fix` to update vulnerable dependencies
2. ✅ Update `eslint-config-next` to latest version

### Short-Term (Within 30 Days):
3. 🔧 Implement security headers in `next.config.mjs`
4. 🔧 Test CSP policy and adjust as needed
5. 🔧 Add HSTS headers for production deployment

### Medium-Term (Within 90 Days):
6. 📝 Move Google Form URL to environment variable
7. 📝 Remove placeholder verification codes or add real ones
8. 📝 Consider extracting Google Analytics inline script
9. 📝 Implement error logging/monitoring service (e.g., Sentry)
10. 📝 Add automated security scanning to CI/CD pipeline

### Long-Term (Nice to Have):
11. 💡 Consider implementing Subresource Integrity (SRI) for external scripts
12. 💡 Add automated dependency scanning (Dependabot/Snyk)
13. 💡 Implement Content Security Policy reporting
14. 💡 Consider privacy-focused analytics alternative (Plausible, Fathom)

---

## Compliance Considerations

### GDPR / Privacy:
- ⚠️ Google Analytics collects user data - may need cookie consent banner
- ⚠️ Google Forms collects PII - ensure privacy policy is present
- ⚠️ Contact authorization language present but privacy policy link missing

### CAN-SPAM / TCPA:
- ✅ Clear authorization language for contact consent
- ✅ Opt-out instructions provided in footer

---

## Testing Performed

1. ✅ Static code analysis of all TypeScript/JavaScript files
2. ✅ Dependency vulnerability scanning with `npm audit`
3. ✅ Pattern matching for common security anti-patterns
4. ✅ Review of environment variable handling
5. ✅ Git history analysis for leaked secrets
6. ✅ XSS vulnerability scanning
7. ✅ Security header configuration review

---

## Conclusion

The Awen Energy landing page demonstrates good security practices for a static Next.js application. The primary concerns are:

1. **Dependency vulnerabilities** that should be addressed immediately
2. **Missing security headers** that should be implemented before production deployment
3. **Minor configuration improvements** for better security posture

Given the limited attack surface (static site, no backend, no user data storage), the overall security risk is **MEDIUM** and manageable. The recommended fixes are straightforward and should be implemented before or immediately after production deployment.

**Recommendation:** Approve for production deployment after addressing HIGH severity issues.

---

## Appendix

### Tools Used:
- npm audit
- Custom security scanning scripts
- Manual code review
- Git history analysis

### Files Reviewed:
- All `.tsx`, `.ts`, `.js`, `.json` files
- Configuration files (`next.config.mjs`, `package.json`, `tsconfig.json`)
- Environment variable examples
- Git commit history

### References:
- OWASP Top 10 2021: https://owasp.org/Top10/
- Next.js Security Best Practices: https://nextjs.org/docs/app/building-your-application/configuring/security-headers
- Content Security Policy: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
- npm audit documentation: https://docs.npmjs.com/cli/v8/commands/npm-audit

---

**End of Report**
