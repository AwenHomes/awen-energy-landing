'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getStripe } from '@/lib/stripe';
import { PRICING } from '@/lib/constants';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const priceId = searchParams.get('priceId');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId || process.env.NEXT_PUBLIC_STRIPE_CLAIM_PREP_PRICE_ID,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Failed to load Stripe');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-default-50 to-default-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="heading-lg mb-4 text-center">Complete Your Payment</h1>

        <div className="mb-6">
          <div className="bg-default-50 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-2">Claim Preparation Service</h2>
            <p className="text-gray-600 mb-4">
              Our expert team will handle your solar warranty claim preparation,
              maximizing your chances of a successful recovery.
            </p>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-default-700">
                ${PRICING.claimPrep}
              </span>
              <span className="text-sm text-gray-500">One-time fee</span>
            </div>
          </div>

          <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> You'll only pay the 10% success fee if we
              successfully recover value from your claim.
            </p>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="btn-primary w-full py-3"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Proceed to Payment'
          )}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Secure payment powered by Stripe. Your payment information is encrypted
          and secure.
        </p>
      </div>
    </div>
  );
}
