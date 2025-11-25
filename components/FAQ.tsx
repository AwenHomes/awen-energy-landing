'use client';

import { useState } from 'react';
import { scrollToForm } from '@/lib/utils';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can you guarantee my warranty claim will be approved?",
      answer: "No, we can't guarantee approval—that's ultimately up to the manufacturer. However, we only take cases we believe are viable, and we know exactly how to present claims for the best chance of success. You only pay our success fee if you actually recover value."
    },
    {
      question: "What if my installer has been out of business for several years?",
      answer: "That's okay! As long as your equipment is still under the manufacturer's warranty period (typically 10-25 years for panels, 5-12 years for inverters), we can help you file a claim directly with the manufacturer."
    },
    {
      question: "Do I need to have all my original paperwork?",
      answer: "Not necessarily. We help you track down what you need. We can often find purchase records, permits, and equipment serial numbers through various channels. Part of our service is gathering the documentation manufacturers require."
    },
    {
      question: "How long does the warranty claim process take?",
      answer: "It varies by manufacturer, but typically 4-12 weeks from submission to approval. Some are faster, some slower. We follow up regularly to keep things moving and keep you updated throughout the process."
    },
    {
      question: "What types of equipment do you help with?",
      answer: "We primarily work with major manufacturers like Enphase, SolarEdge, LG, Panasonic, REC, Qcells, Hanwha, Canadian Solar, and similar brands. This includes solar panels, inverters (string and microinverters), optimizers, and battery systems."
    },
    {
      question: "Will you do the repairs yourself?",
      answer: "No, we're warranty navigators, not installers. Once your claim is approved, we help you find a qualified local contractor to perform the warranty service work. The manufacturer typically covers the equipment cost; you may be responsible for labor depending on the warranty terms."
    },
    {
      question: "What if the manufacturer denies my claim?",
      answer: "If a claim is denied, we'll work with you to understand why and explore appeal options if appropriate. You won't owe us a success fee if no value is recovered. You would have only paid the $500 claim preparation fee."
    },
    {
      question: "Do you work in my state?",
      answer: "Yes! We provide warranty navigation services nationwide. Most of our work is done remotely (calls, emails, documentation). When physical inspection or repairs are needed, we coordinate with local contractors in your area."
    },
    {
      question: "Can you help with workmanship issues or installation defects?",
      answer: "Unfortunately, no. Workmanship warranties were tied to your original installer. We only handle manufacturer defects covered by equipment warranties (defective panels, failing inverters, malfunctioning components, etc.)."
    },
    {
      question: "How do I get started?",
      answer: "Schedule a free 30-minute assessment call using the form below. We'll review your situation, check your warranty status, and let you know honestly whether we can help. No obligation to continue if it's not a good fit."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here's what homeowners typically ask us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            Still have questions?{' '}
            <button
              onClick={scrollToForm}
              className="text-primary-600 font-semibold hover:text-primary-700 underline"
            >
              Schedule your free assessment call
            </button>
            {' '}and we'll answer them all.
          </p>
        </div>
      </div>
    </section>
  );
}
