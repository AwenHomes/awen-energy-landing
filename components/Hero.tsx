'use client';

import SocialShare from './SocialShare';
import { scrollToForm } from '@/lib/utils';
import { CheckIcon } from '@/components/icons/CheckIcon';

const OFFER_END_DATE = new Date('2025-12-01T23:59:59');

export default function Hero() {
  const isOfferActive = new Date() < OFFER_END_DATE;

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
              <CheckIcon className="w-5 h-5 text-green-500" />
              <span className="font-medium">Free Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-green-500" />
              <span className="font-medium">No Upfront Guarantee Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-green-500" />
              <span className="font-medium">Nationwide Service</span>
            </div>
          </div>

          {/* Black Friday Special Notice */}
          {isOfferActive && (
            <div className="mb-6 inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg shadow-lg animate-bounce">
              🎉 Black Friday Special: Get Started FREE (Save $500!)
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="btn-primary text-lg"
          >
            {isOfferActive ? 'Claim Your Free Start' : 'Schedule Your Free Consultation'}
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
