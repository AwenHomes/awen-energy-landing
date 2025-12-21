import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { COMPANY } from '@/lib/constants';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { priceId, customerEmail, customerName } = body;

    // Validate required fields
    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      );
    }

    // Get the origin for redirect URLs
    const origin = req.headers.get('origin') || COMPANY.domain;

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // Customer information
      customer_email: customerEmail,
      // Collect customer name if not provided
      ...(customerName
        ? {}
        : {
            billing_address_collection: 'required',
          }),
      // Redirect URLs
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/canceled`,
      // Metadata for tracking
      metadata: {
        service: 'claim_preparation',
        company: COMPANY.name,
      },
      // Optional: Add customer details to metadata
      ...(customerName && { metadata: { customer_name: customerName } }),
      // Allow promotion codes
      allow_promotion_codes: true,
      // Consent collection (if needed for your business)
      consent_collection: {
        terms_of_service: 'none',
      },
    });

    // Return the session ID and URL
    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Stripe checkout error:', error);

    return NextResponse.json(
      {
        error: 'Failed to create checkout session',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
