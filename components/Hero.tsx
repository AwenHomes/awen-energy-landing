'use client';

import SocialShare from './SocialShare';

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding pt-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="heading-xl mb-6">
            Your Solar System Broke.<br />
            Your Installer Disappeared.<br />
            <span className="text-primary-600">We'll Get It Fixed.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            We navigate manufacturer warranties and get your solar equipment repaired or replaced—even when your original installer is out of business.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Free Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No Upfront Guarantee Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Nationwide Service</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="btn-primary text-lg"
          >
            Schedule Your Free Consultation
          </button>

          {/* Social Share */}
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-3">Share this with others facing the same problem:</p>
            <SocialShare size="md" />
          </div>

          {/* Trust Indicator */}
          <p className="mt-6 text-sm text-gray-500">
            Helping homeowners recover from installer bankruptcies since 2024
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary-400" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#grid-pattern)" />
        </svg>
      </div>
    </section>
  );
}
