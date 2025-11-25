import { CONTACT, COMPANY } from '@/lib/constants';

export default function ContactForm() {
  // Google Form URL is now configured via environment variable
  // Set NEXT_PUBLIC_GOOGLE_FORM_URL in your .env.local file
  // To get the embed URL:
  // 1. Go to your Google Form
  // 2. Click "Send" button
  // 3. Click the "<>" (Embed HTML) icon
  // 4. Copy the URL from the iframe src attribute
  // 5. Add to .env.local: NEXT_PUBLIC_GOOGLE_FORM_URL=your-url-here

  const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSchkgLCqjUoOQN0XKE6Afb0KjbsnF6ZfvSxLxkcm83sSMrtBw/viewform?embedded=true";

  // Check if Google Form URL is configured
  const hasGoogleForm = !!GOOGLE_FORM_URL;

  return (
    <section id="contact-form" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            Schedule Your Free Assessment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get your solar system fixed? Fill out the form below and we'll reach out within 24 hours to schedule your free 30-minute consultation.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            By submitting this form, you authorize {COMPANY.name} to contact you regarding your solar warranty recovery needs, even if you are on a federal or state Do Not Call list.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {hasGoogleForm ? (
            /* Google Form Embed */
            <div className="bg-white rounded-xl shadow-lg p-2 overflow-hidden">
              <iframe
                src={GOOGLE_FORM_URL}
                width="100%"
                height="2000"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          ) : (
            /* Placeholder Form */
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-dashed border-gray-300">
              <div className="text-center mb-6">
                <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg mb-4">
                  <p className="font-semibold">👋 Google Form Placeholder</p>
                </div>
                <p className="text-gray-600 mb-4">
                  To complete your landing page, you need to create a Google Form and embed it here.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Suggested Google Form Questions (TCPA Compliant):</h3>
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>Name (Full name) - Required</li>
                  <li>Email Address - Required</li>
                  <li>Phone Number - Required</li>
                  <li>Street Address (City, State, ZIP) - Required</li>
                  <li>How long have you had your solar system? (Dropdown: 0-3 years, 3-5 years, 5-10 years, 10-15 years, 15+ years)</li>
                  <li>When did your installer go out of business? (Short answer)</li>
                  <li>What brand(s) of equipment do you have? (Checkboxes: Enphase, SolarEdge, LG, Panasonic, REC, Qcells, Canadian Solar, Other)</li>
                  <li>What's not working? (Paragraph: Describe the issue with your solar system)</li>
                  <li>Have you tried to get help? If so, what happened? (Paragraph)</li>
                  <li>Best time to reach you? (Dropdown: Morning, Afternoon, Evening, Anytime)</li>
                  <li className="font-semibold text-red-700">CONSENT FOR PHONE CALLS: "I authorize Awen Energy LLC and its representatives to contact me at the telephone number provided above, including by using an automatic telephone dialing system or artificial/prerecorded voice, for marketing and informational purposes related to solar warranty recovery services. I understand that consent is not required as a condition of purchase and that I may revoke this consent at any time. I understand that I may be placed on Awen Energy LLC's internal Do Not Call list by calling info@awenenergy.com or by telling any Awen Energy LLC representative during a call." (Checkbox - Required)</li>
                  <li className="font-semibold text-red-700">CONSENT FOR TEXT MESSAGES: "I authorize Awen Energy LLC to send me text messages (SMS/MMS) at the mobile number provided above for marketing and informational purposes related to solar warranty recovery services. I understand that consent is not required as a condition of purchase, that message and data rates may apply, and that I can opt out at any time by replying STOP to any text message." (Checkbox - Required)</li>
                  <li className="font-semibold text-red-700">CONSENT FOR EMAIL: "I authorize Awen Energy LLC to send me emails at the email address provided above for marketing and informational purposes related to solar warranty recovery services. I understand that I can unsubscribe at any time by clicking the unsubscribe link in any email." (Checkbox - Required)</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-800 mb-3">How to Add Your Google Form:</h3>
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>Create a Google Form with the questions above</li>
                  <li>Click the "Send" button in your Google Form</li>
                  <li>Click the "&lt;&gt;" (Embed HTML) icon</li>
                  <li>Copy the URL from the iframe src attribute</li>
                  <li>Open <code className="bg-gray-200 px-2 py-1 rounded">components/ContactForm.tsx</code></li>
                  <li>Replace <code className="bg-gray-200 px-2 py-1 rounded">YOUR_GOOGLE_FORM_EMBED_URL_HERE</code> with your URL</li>
                  <li>Change <code className="bg-gray-200 px-2 py-1 rounded">hasGoogleForm</code> to <code className="bg-gray-200 px-2 py-1 rounded">true</code></li>
                </ol>
              </div>

              {/* Demo Form Fields */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4 text-center">Preview of how the form will look:</p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    disabled
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    disabled
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    disabled
                  />
                  <textarea
                    placeholder="Describe your solar system issue..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    disabled
                  />
                  <button
                    type="button"
                    className="w-full btn-primary opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Submit (Demo Only)
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Contact Alternative */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Prefer to email directly?{' '}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
