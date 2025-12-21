'use client';

import { CheckIcon } from '@/components/icons/CheckIcon';
import { scrollToForm } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const OFFER_END_DATE = new Date('2025-12-01T23:59:59');

export default function Pricing() {
  const router = useRouter();
  const isOfferActive = new Date() < OFFER_END_DATE;

  const handleGetStarted = () => {
    if (isOfferActive) {
      // During Black Friday offer, direct to contact form since it's free
      scrollToForm();
    } else {
      // After offer expires, redirect to checkout to pay $500
      const priceId = process.env.NEXT_PUBLIC_STRIPE_CLAIM_PREP_PRICE_ID || '';
      router.push(`/checkout?priceId=${priceId}`);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. No upfront guarantees required. Pay as we progress through each stage.
          </p>
          {isOfferActive && (
            <div className="mt-4 inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full font-bold shadow-lg animate-pulse">
              🎉 Black Friday Special: Claim Prep Fee Waived!
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Free Assessment */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-300 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Stage 1
              </div>
              <h3 className="heading-md mb-2">Free Assessment</h3>
              <div className="text-5xl font-bold text-green-600 mb-2">$0</div>
              <p className="text-gray-600">30-minute consultation</p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Review your situation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Check warranty status</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Honest viability assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">No obligation to continue</span>
              </li>
            </ul>
          </div>

          {/* Claim Prep */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl border-2 border-primary-400 shadow-lg transform md:scale-105 relative overflow-hidden">
            {isOfferActive && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-1 rounded-bl-lg font-bold text-sm shadow-lg">
                BLACK FRIDAY
              </div>
            )}
            <div className="text-center mb-6">
              <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Stage 2 - Most Popular
              </div>
              <h3 className="heading-md mb-2">Claim Preparation</h3>
              {isOfferActive ? (
                <div>
                  <div className="text-3xl font-bold text-gray-400 line-through mb-1">$500</div>
                  <div className="text-5xl font-bold text-green-600 mb-2">FREE</div>
                  <p className="text-green-600 font-semibold">Black Friday Special - Save $500!</p>
                </div>
              ) : (
                <>
                  <div className="text-5xl font-bold text-primary-600 mb-2">$500</div>
                  <p className="text-gray-600">One-time flat fee</p>
                </>
              )}
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Gather all documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Contact manufacturers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Prepare complete claim packages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Submit all warranty claims</span>
              </li>
            </ul>
            <button
              onClick={handleGetStarted}
              className="w-full btn-primary py-3 text-center"
            >
              {isOfferActive ? 'Claim This Offer' : 'Get Started - Pay Now'}
            </button>
          </div>

          {/* Success Fee */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-300 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-block bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Stage 3
              </div>
              <h3 className="heading-md mb-2">Success Fee</h3>
              <div className="text-5xl font-bold text-purple-600 mb-2">10%</div>
              <p className="text-gray-600">Of recovered value only</p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Follow up until approval</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Find qualified contractors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Coordinate all parties</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Only pay when you recover value</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Example */}
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h3 className="heading-sm mb-4 text-center">
            Real Example: What You'll Pay{isOfferActive && ' (With Black Friday Offer)'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg relative">
              {isOfferActive && (
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  SAVE $500
                </div>
              )}
              <h4 className="font-semibold text-gray-800 mb-3">Scenario 1: $5,000 Inverter Replacement</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Assessment:</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span>Claim Prep:</span>
                  {isOfferActive ? (
                    <span className="font-semibold text-green-600">$0 <span className="text-xs line-through text-gray-400">$500</span></span>
                  ) : (
                    <span className="font-semibold">$500</span>
                  )}
                </li>
                <li className="flex justify-between">
                  <span>Success Fee (10% of $5,000):</span>
                  <span className="font-semibold">$500</span>
                </li>
                <li className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-bold">Total Cost to You:</span>
                  <span className="font-bold text-primary-600">${isOfferActive ? '500' : '1,000'}</span>
                </li>
                <li className="flex justify-between text-green-600">
                  <span className="font-bold">Your Savings:</span>
                  <span className="font-bold">${isOfferActive ? '4,500' : '4,000'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg relative">
              {isOfferActive && (
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  SAVE $500
                </div>
              )}
              <h4 className="font-semibold text-gray-800 mb-3">Scenario 2: $15,000 Panel Replacement</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Assessment:</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span>Claim Prep:</span>
                  {isOfferActive ? (
                    <span className="font-semibold text-green-600">$0 <span className="text-xs line-through text-gray-400">$500</span></span>
                  ) : (
                    <span className="font-semibold">$500</span>
                  )}
                </li>
                <li className="flex justify-between">
                  <span>Success Fee (10% of $15,000):</span>
                  <span className="font-semibold">$1,500</span>
                </li>
                <li className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-bold">Total Cost to You:</span>
                  <span className="font-bold text-primary-600">${isOfferActive ? '1,500' : '2,000'}</span>
                </li>
                <li className="flex justify-between text-green-600">
                  <span className="font-bold">Your Savings:</span>
                  <span className="font-bold">${isOfferActive ? '13,500' : '13,000'}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-700">
              <span className="font-semibold">Important:</span> We can't guarantee approval, but we only get paid our success fee if you actually recover value from the warranty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
