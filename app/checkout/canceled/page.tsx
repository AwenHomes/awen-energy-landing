'use client';

import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export default function CanceledPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-default-50 to-default-100 px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="text-center">
          {/* Canceled Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mb-6">
            <svg
              className="h-10 w-10 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <h1 className="heading-lg mb-4">Payment Canceled</h1>

          <p className="text-lg text-gray-700 mb-6">
            Your payment was not processed. No charges have been made to your
            account.
          </p>

          <div className="bg-default-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold mb-4">What Would You Like to Do?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-default-600 mr-3 mt-1">•</span>
                <span>
                  Try the payment again if you're ready to proceed with our claim
                  preparation service.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-default-600 mr-3 mt-1">•</span>
                <span>
                  Contact us if you have questions or concerns about the payment
                  process.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-default-600 mr-3 mt-1">•</span>
                <span>
                  Review our pricing and service details to ensure this is the
                  right fit for you.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Reminder:</strong> Our free assessment is still available.
              You can get started without any payment to see if you qualify for
              warranty recovery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#pricing"
              className="btn-primary inline-block px-8 py-3"
            >
              Try Payment Again
            </Link>
            <Link
              href="/"
              className="btn-secondary inline-block px-8 py-3"
            >
              Return to Home
            </Link>
          </div>

          <p className="text-sm text-gray-600 mt-6">
            Questions? Contact us at{' '}
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-default-600 hover:text-default-700 underline"
            >
              {COMPANY.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
