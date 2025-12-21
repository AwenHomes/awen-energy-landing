import Stripe from 'stripe';
import { loadStripe, Stripe as StripeJS } from '@stripe/stripe-js';

// Initialize Stripe on the server side
// This should only be used in API routes and server components
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
});

// Load Stripe.js on the client side
// This is memoized to prevent loading multiple instances
let stripePromise: Promise<StripeJS | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );
  }
  return stripePromise;
};

// Stripe Price IDs - These should be created in your Stripe Dashboard
// For testing, you can use Stripe's test mode prices
export const STRIPE_PRICE_IDS = {
  // $500 Claim Preparation Fee
  claimPrep: process.env.STRIPE_CLAIM_PREP_PRICE_ID || 'price_XXXXXXXXXXXXX',
} as const;

// Format amount for display
export function formatAmountForDisplay(
  amount: number,
  currency: string
): string {
  const numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(amount);
}

// Format amount for Stripe (convert to smallest currency unit)
export function formatAmountForStripe(
  amount: number,
  currency: string
): number {
  const numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;

  for (const part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
      break;
    }
  }

  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}
