'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Optional: Verify the session on the server
    // You could fetch session details here if needed
    setLoading(false);
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-default-50 to-default-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-default-700"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-default-50 to-default-100 px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="heading-lg mb-4">Payment Successful!</h1>

          <p className="text-lg text-gray-700 mb-6">
            Thank you for choosing {COMPANY.name} for your solar warranty claim
            preparation.
          </p>

          <div className="bg-default-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-default-200 text-default-700 font-semibold text-sm mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                <span>
                  You'll receive a confirmation email at your registered email
                  address with your payment receipt.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-default-200 text-default-700 font-semibold text-sm mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                <span>
                  Our team will contact you within 1-2 business days to begin the
                  claim preparation process.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-default-200 text-default-700 font-semibold text-sm mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                <span>
                  We'll gather all necessary documentation and prepare your claim
                  for submission to the appropriate warranty provider.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-default-200 text-default-700 font-semibold text-sm mr-3 mt-0.5 flex-shrink-0">
                  4
                </span>
                <span>
                  You'll receive regular updates on the progress of your claim.
                </span>
              </li>
            </ol>
          </div>

          <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Remember:</strong> You'll only pay our 10% success fee if we
              successfully recover value from your warranty claim.
            </p>
          </div>

          <div className="space-y-4">
            <Link href="/" className="btn-primary inline-block px-8 py-3">
              Return to Home
            </Link>

            <p className="text-sm text-gray-600">
              Questions? Contact us at{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-default-600 hover:text-default-700 underline"
              >
                {COMPANY.email}
              </a>
            </p>
          </div>

          {sessionId && (
            <p className="text-xs text-gray-400 mt-8">
              Session ID: {sessionId}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
