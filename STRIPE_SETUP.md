# Stripe Payment Integration Setup Guide

This guide will help you configure Stripe payments for the Awen Energy landing page.

## Overview

The Stripe integration allows customers to securely pay the $500 claim preparation fee through Stripe Checkout. The integration includes:

- **Checkout Flow**: Secure payment processing via Stripe Checkout
- **Webhook Handler**: Processes payment events and confirmations
- **Success/Cancel Pages**: User-friendly post-payment pages
- **Security**: CSP headers configured, webhook signature verification

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Node.js and npm installed
3. Access to your Stripe Dashboard

## Setup Steps

### 1. Create a Stripe Account

If you don't have one already:
1. Go to https://stripe.com
2. Click "Start now" and complete registration
3. Verify your email address

### 2. Get Your API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Click on "Developers" in the left sidebar
3. Click on "API keys"
4. You'll see two types of keys:
   - **Publishable key** (starts with `pk_test_` for test mode)
   - **Secret key** (starts with `sk_test_` for test mode)

**Important**: Keep your secret key secure and never commit it to version control!

### 3. Create a Product and Price

1. In the Stripe Dashboard, go to "Products" (under "Product catalog")
2. Click "Add product"
3. Fill in the details:
   - **Name**: Claim Preparation Service
   - **Description**: Expert solar warranty claim preparation and submission
   - **Pricing**: One-time payment of $500.00 USD
4. Click "Save product"
5. Copy the **Price ID** (starts with `price_`) - you'll need this for the environment variables

### 4. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Stripe credentials:
   ```env
   # Stripe API Keys
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
   STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE

   # Stripe Price ID
   STRIPE_CLAIM_PREP_PRICE_ID=price_YOUR_PRICE_ID_HERE
   NEXT_PUBLIC_STRIPE_CLAIM_PREP_PRICE_ID=price_YOUR_PRICE_ID_HERE

   # Webhook Secret (we'll add this in step 5)
   STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE
   ```

### 5. Set Up Webhooks (Important!)

Webhooks allow Stripe to notify your application about payment events.

#### For Local Development:

1. Install the Stripe CLI:
   ```bash
   # macOS
   brew install stripe/stripe-cli/stripe

   # Other platforms: https://stripe.com/docs/stripe-cli#install
   ```

2. Login to Stripe CLI:
   ```bash
   stripe login
   ```

3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```

4. The CLI will output a webhook signing secret (starts with `whsec_`). Copy this and add it to your `.env.local` file as `STRIPE_WEBHOOK_SECRET`

#### For Production:

1. Go to [Stripe Dashboard > Developers > Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Enter your webhook URL: `https://yourdomain.com/api/webhook`
4. Select events to listen to (recommended):
   - `checkout.session.completed`
   - `checkout.session.async_payment_succeeded`
   - `checkout.session.async_payment_failed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click "Add endpoint"
6. Click on the newly created endpoint to view details
7. Reveal the **Signing secret** (starts with `whsec_`)
8. Add this to your production environment variables as `STRIPE_WEBHOOK_SECRET`

### 6. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000`
3. Scroll to the Pricing section
4. Click "Get Started - Pay Now" button
5. You'll be redirected to Stripe Checkout
6. Use a test card number:
   - **Card number**: `4242 4242 4242 4242`
   - **Expiry**: Any future date
   - **CVC**: Any 3 digits
   - **ZIP**: Any 5 digits

7. Complete the payment
8. You should be redirected to the success page

### 7. Monitor Payments

1. Go to [Stripe Dashboard > Payments](https://dashboard.stripe.com/payments)
2. You'll see all successful and failed payments
3. Click on any payment to view details

### 8. Going Live (Production)

When you're ready to accept real payments:

1. Complete your Stripe account activation (business details, bank account)
2. Switch from test mode to live mode in the Stripe Dashboard (toggle in top right)
3. Get your **live** API keys (they'll start with `pk_live_` and `sk_live_`)
4. Create the product/price again in live mode (or activate your test product)
5. Update your production environment variables with live keys
6. Set up the production webhook endpoint
7. Test thoroughly before announcing!

## Payment Flow

Here's how the payment process works:

1. **Customer clicks "Get Started - Pay Now"** on the pricing page
2. **Redirected to `/checkout`** page with the price ID
3. **Checkout page calls `/api/checkout`** API route to create a Stripe Checkout Session
4. **Customer redirected to Stripe Checkout** hosted payment page
5. **Customer enters payment details** and completes payment
6. **Stripe processes payment** securely
7. **Stripe sends webhook** to `/api/webhook` with payment confirmation
8. **Customer redirected** to success or cancel page based on outcome

## Security Features

- ✅ **Webhook signature verification**: Ensures webhook requests are from Stripe
- ✅ **CSP headers**: Content Security Policy configured for Stripe domains
- ✅ **No card data handling**: Payment details never touch your server
- ✅ **Environment variables**: Sensitive keys stored securely
- ✅ **HTTPS enforcement**: Stripe requires HTTPS in production

## Customization Options

### Update Payment Amount

To change the payment amount:
1. Go to Stripe Dashboard > Products
2. Edit the product's price
3. Or create a new price and update the Price ID in your environment variables

### Add Promotion Codes

The checkout already supports promotion codes:
1. Go to Stripe Dashboard > Products > Coupons
2. Create a coupon (percentage or fixed amount discount)
3. Customers can enter the code during checkout

### Email Receipts

Stripe automatically sends email receipts to customers. You can customize these:
1. Go to Stripe Dashboard > Settings > Emails
2. Customize the receipt email template

### Collect Additional Information

Edit `app/api/checkout/route.ts` to collect more customer information:
- Phone numbers
- Addresses
- Custom fields

## Troubleshooting

### "No such price" error

- Verify the Price ID in your `.env.local` matches the one in Stripe Dashboard
- Ensure you're using the correct mode (test vs live)

### Webhook not receiving events

- Check that the webhook secret is correct
- For local development, ensure Stripe CLI is running: `stripe listen --forward-to localhost:3000/api/webhook`
- Check webhook logs in Stripe Dashboard > Developers > Webhooks

### CSP errors in browser console

- The CSP headers have been configured for Stripe
- If you see errors, check that all Stripe domains are allowed in `next.config.mjs`

### Payment successful but webhook not processed

- Check your server logs for errors
- Verify the webhook secret is correct
- Ensure the webhook route (`/api/webhook`) is publicly accessible

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Stripe Testing](https://stripe.com/docs/testing)
- [Stripe API Reference](https://stripe.com/docs/api)

## Support

If you encounter issues:
1. Check the [Stripe Dashboard logs](https://dashboard.stripe.com/logs)
2. Review your server logs for errors
3. Contact Stripe support via the Dashboard
4. Review the [Stripe API changelog](https://stripe.com/docs/upgrades) for updates

## Next Steps

After setting up payments, consider:
- Setting up email notifications for successful payments
- Creating a database to track orders
- Building an admin dashboard to manage claims
- Implementing customer account management
- Setting up analytics to track conversion rates
