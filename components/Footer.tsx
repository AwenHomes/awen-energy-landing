import SocialShare from './SocialShare';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-3">Awen Energy</h3>
            <p className="text-gray-400 leading-relaxed">
              Helping homeowners recover manufacturer warranties and get their solar systems fixed—even when their installer is gone.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@awenenergy.com"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@awenenergy.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Nationwide Service</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2">
              <li>Free System Assessment</li>
              <li>Warranty Claim Preparation</li>
              <li>Manufacturer Negotiation</li>
              <li>Contractor Coordination</li>
              <li>Claim Management</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 pt-8 pb-8">
          <div className="text-center mb-4">
            <h4 className="text-white font-semibold mb-3">Follow & Share</h4>
            <p className="text-gray-400 text-sm mb-4">Help others recover their solar systems</p>
            <div className="flex justify-center">
              <div className="scale-125">
                <SocialShare size="md" />
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-white font-semibold mb-3 text-sm">Important Disclaimers</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <strong>No Guarantee of Approval:</strong> Awen Energy cannot guarantee that manufacturer warranty claims will be approved. We provide navigation and advocacy services to maximize your chances of success, but final approval decisions rest with the equipment manufacturers.
              </p>
              <p>
                <strong>Service Scope:</strong> We handle manufacturer equipment defects only. We cannot assist with workmanship warranties, installation defects, or warranties that have expired. Our service is for residential solar systems only.
              </p>
              <p>
                <strong>Contact Authorization:</strong> By submitting an inquiry or contacting Awen Energy, you authorize us to contact you regarding solar warranty recovery services via phone, email, or text message, even if your number is listed on any federal or state Do Not Call registry. You may opt out of communications at any time by emailing info@awenenergy.com.
              </p>
              <p>
                <strong>Not Legal or Financial Advice:</strong> Information provided by Awen Energy is for informational purposes and does not constitute legal or financial advice. Consult appropriate professionals for legal or financial guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Awen Energy. All rights reserved.
          </p>
          <p className="mt-2">
            Helping homeowners navigate solar warranty recovery nationwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
