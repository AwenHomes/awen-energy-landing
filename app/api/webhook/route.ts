import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

// Disable body parsing, need raw body for webhook signature verification
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature found' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json(
      {
        error: 'Webhook signature verification failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 400 }
    );
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Payment successful - fulfill the order
        console.log('Payment successful!', {
          sessionId: session.id,
          customerEmail: session.customer_email,
          amountTotal: session.amount_total,
          currency: session.currency,
          metadata: session.metadata,
        });

        // TODO: Add your business logic here:
        // - Send confirmation email to customer
        // - Create order in database
        // - Notify admin/team
        // - Start claim preparation process

        break;
      }

      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Async payment succeeded (e.g., ACH, iDEAL)
        console.log('Async payment succeeded!', {
          sessionId: session.id,
          customerEmail: session.customer_email,
        });

        // TODO: Add your business logic here

        break;
      }

      case 'checkout.session.async_payment_failed': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Async payment failed
        console.log('Async payment failed', {
          sessionId: session.id,
          customerEmail: session.customer_email,
        });

        // TODO: Notify customer of payment failure

        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        console.log('PaymentIntent succeeded:', paymentIntent.id);

        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        console.log('PaymentIntent failed:', paymentIntent.id);

        // TODO: Notify customer of payment failure

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error handling webhook event:', error);
    return NextResponse.json(
      {
        error: 'Webhook handler failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
