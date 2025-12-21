/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Security Headers Configuration
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Prevents clickjacking attacks
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevents MIME-sniffing attacks
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // Legacy XSS protection (for older browsers)
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Controls referrer information
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // Disables unnecessary browser features
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // Forces HTTPS (only enable if using HTTPS)
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://js.stripe.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://www.google-analytics.com https://*.stripe.com",
              "frame-src https://docs.google.com https://js.stripe.com https://hooks.stripe.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://api.stripe.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
