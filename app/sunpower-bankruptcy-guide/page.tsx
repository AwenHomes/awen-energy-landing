import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'SunPower Bankruptcy Survival Guide | Awen Energy',
  description: 'What every orphaned SunPower customer needs to know. Your system still has value. Your warranties may still be valid. This guide will help you figure out your options.',
};

export default function SunPowerGuide() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold">v1.0 | December 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SunPower Bankruptcy<br />Survival Guide
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-primary-50">
                What Every Orphaned SunPower Customer Needs to Know
              </p>
              <p className="text-lg md:text-xl mb-8 text-primary-100">
                Your system still has value. Your warranties may still be valid.<br />
                This guide will help you figure out your options.
              </p>
              <a
                href="https://drive.google.com/uc?export=download&id=1xdg-DsVD5iKAKzqHfPC4srMif6Z3Gip8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF Guide
              </a>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What's Inside</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { num: '1', title: 'What Happened & What It Means for You', id: 'what-happened' },
                { num: '2', title: 'Who Owns What: The Warranty Breakdown', id: 'warranty-breakdown' },
                { num: '3', title: 'Lease vs. Loan: Your Rights Are Different', id: 'lease-vs-loan' },
                { num: '4', title: 'The SunVault Problem (Important!)', id: 'sunvault-problem' },
                { num: '5', title: 'Is Your System Actually Working?', id: 'system-working' },
                { num: '6', title: 'Step-by-Step Action Plan', id: 'action-plan' },
                { num: '7', title: 'Key Contacts & Resources', id: 'contacts' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.num}
                  </span>
                  <span className="font-semibold text-gray-900 pt-1">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: What Happened */}
        <section id="what-happened" className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">1. What Happened & What It Means for You</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                SunPower Corporation filed for Chapter 11 bankruptcy on <strong>August 5, 2024</strong>. The company ceased customer support on <strong>September 20, 2024</strong>. Complete Solar purchased the SunPower brand and some assets on <strong>September 30, 2024</strong> — but they did <strong>NOT</strong> take responsibility for systems installed before that date.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                If your system was installed before September 30, 2024, you are what's called an "orphaned" customer. The company that sold you the system, promised you a 25-year warranty, and was supposed to maintain your equipment no longer exists in a form that can help you.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    The Good News
                  </h3>
                  <ul className="space-y-2 text-green-900">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Your solar panels are still producing electricity (most likely)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Some equipment manufacturers are honoring warranties independently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>If you have a lease, the leasing company is still obligated to maintain your system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Your system likely has many productive years left — the equipment is high quality</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    The Bad News
                  </h3>
                  <ul className="space-y-2 text-red-900">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>SunPower's "Complete Confidence" warranty is essentially void</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>The mySunPower monitoring app may stop working or require paid subscription</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Getting support requires navigating multiple companies instead of one</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Some manufacturers (e.g. Waaree) have been difficult to reach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Warranty Breakdown */}
        <section id="warranty-breakdown" className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">2. Who Owns What: The Warranty Breakdown</h2>
            <p className="text-lg leading-relaxed mb-8">
              SunPower didn't manufacture everything in your system. Different components came from different companies, and those companies may still honor their warranties. Here's who to contact for what:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Component</th>
                    <th className="px-6 py-4 text-left font-semibold">Manufacturer</th>
                    <th className="px-6 py-4 text-left font-semibold">Warranty Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Microinverters</td>
                    <td className="px-6 py-4">Enphase Energy</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 text-green-700 font-semibold">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        HONORING WARRANTIES — Most responsive
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Panels (Maxeon)</td>
                    <td className="px-6 py-4">Maxeon Solar</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 text-green-700 font-semibold">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        HONORING WARRANTIES — Registration required
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Panels (Waaree)</td>
                    <td className="px-6 py-4">Waaree Energies</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 text-yellow-700 font-semibold">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        CLAIMS DIFFICULT — Says they'll honor, hard to reach
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Panels (REC)</td>
                    <td className="px-6 py-4">REC Solar</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 text-green-700 font-semibold">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        HONORING WARRANTIES
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Panels (Qcells)</td>
                    <td className="px-6 py-4">Qcells</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 text-green-700 font-semibold">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        HONORING WARRANTIES
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">SunVault Battery</td>
                    <td className="px-6 py-4">SunPower (defunct)</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 text-red-700 font-semibold">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        UNCLEAR — No manufacturer stepping up
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Workmanship</td>
                    <td className="px-6 py-4">SunPower/Installer</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 text-red-700 font-semibold">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        VOID — Unless your installer is still in business
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">How Do I Know What Panels I Have?</h3>
              <p className="text-blue-900 mb-4">
                Check your original installation contract or permit. Common SunPower panel types:
              </p>
              <ul className="space-y-2 text-blue-900 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>X-Series, A-Series, E-Series, Maxeon 3/5/6</strong> = Manufactured by Maxeon</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>U-Series</strong> = Manufactured by Waaree</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>P-Series</strong> = Various manufacturers</span>
                </li>
              </ul>
              <p className="text-blue-900 text-sm">
                If you can't find your contract, your local building department should have your permit on file with equipment specifications.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Lease vs Loan */}
        <section id="lease-vs-loan" className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">3. Lease vs. Loan: Your Rights Are Different</h2>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">If You LEASE Your System (or have a PPA)</h3>
              <p className="text-lg leading-relaxed mb-4">
                You actually have more leverage than you might think. Here's why:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">You don't own the system — the leasing company does</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Maintaining the equipment is THEIR contractual obligation, not yours</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">If the system isn't working, they may be in breach of contract</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">You may be entitled to payment deferrals, reductions, or lease termination</span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed mb-6">
                SunStrong Management acquired SunPower's lease portfolio. Contact them at <strong>(833) 514-1858</strong>. They've acknowledged a repair backlog but say they're "willing to provide deferrals and extensions."
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-bold text-red-900 mb-2">IMPORTANT:</p>
                    <p className="text-red-900">
                      Don't just stop paying your lease without a plan. Document everything, demand repairs in writing, and consult a consumer protection attorney if SunStrong won't respond. Simply stopping payments can send you to collections.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary-700">If You OWN Your System (Cash or Loan)</h3>
              <p className="text-lg leading-relaxed mb-4">
                You have more control but also more responsibility:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">You can hire any solar contractor to service your system</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">You can pursue manufacturer warranties directly (Enphase, Maxeon, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">If you have a loan, you likely still owe payments even if the system has issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">However, if you were misled during the sale, you may have legal options against the lender</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: SunVault Problem */}
        <section id="sunvault-problem" className="section-padding bg-red-50">
          <div className="container-custom max-w-4xl">
            <div className="bg-red-600 text-white p-6 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h2 className="text-2xl font-bold mb-2">4. The SunVault Problem</h2>
                  <p className="text-lg">
                    CRITICAL FOR SUNVAULT OWNERS: If you have a SunPower SunVault battery, you are in a more difficult situation than other SunPower customers. Please read this section carefully.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Why SunVault Customers Are Stuck</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary-700">1. Warranty Limbo</h4>
                  <p className="text-lg leading-relaxed">
                    The SunVault was a SunPower-branded product with no independent manufacturer stepping up to honor warranties. Unlike panels (Maxeon) or inverters (Enphase), there's no clear warranty path.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary-700">2. Monitoring Incompatibility</h4>
                  <p className="text-lg leading-relaxed">
                    Enphase offers a monitoring restoration service for orphaned SunPower systems — but it currently does NOT work with SunVault batteries. This means the standard $999 Enphase monitoring kit solution isn't available to you.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary-700">3. Limited Options</h4>
                  <p className="text-lg leading-relaxed">
                    Your only current monitoring option is SunStrong Connect, the paid successor to mySunPower, which has mixed reviews for reliability and accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">What SunVault Owners Can Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg"><strong>Check if your SunVault is actually functioning:</strong> Does backup power work during outages? If yes, the battery itself is working even without monitoring.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Use utility bill analysis to estimate solar production (see Section 5)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Contact SunStrong about SunStrong Connect monitoring options</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg"><strong>If your battery fails:</strong> Get quotes for Enphase IQ Battery replacement — this would also enable Enphase monitoring for your whole system going forward</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Document everything for potential future class action or regulatory relief</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: System Working */}
        <section id="system-working" className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">5. Is Your System Actually Working? How to Tell</h2>
            <p className="text-lg leading-relaxed mb-8">
              Without monitoring, you need to use your utility bills to estimate whether your system is producing power. Here's how:
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold mb-4">The Utility Bill Method</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <span className="text-lg pt-1">Get 12 months of current utility bills (you can usually download these from your utility's website)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <span className="text-lg pt-1">Note your total grid consumption (kWh imported from the utility)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <span className="text-lg pt-1">Note any net metering credits (kWh exported back to the grid)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <span className="text-lg pt-1">Find your pre-solar consumption if possible (bills from before installation, or use regional averages)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                  <span className="text-lg pt-1"><strong>Calculate:</strong> Pre-solar usage − Current grid import + Net metering credits = Estimated solar production</span>
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">What Should Your System Produce?</h3>
              <p className="text-lg leading-relaxed mb-6">
                Use <a href="https://pvwatts.nrel.gov" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">PVWatts</a> to estimate expected production for your location and system size. As a rough guide:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Region</th>
                      <th className="px-6 py-4 text-left font-semibold">Annual kWh per kW</th>
                      <th className="px-6 py-4 text-left font-semibold">5kW System Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Southern California</td>
                      <td className="px-6 py-4">1,400-1,500</td>
                      <td className="px-6 py-4 font-semibold">7,000-7,500 kWh/year</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Northern California</td>
                      <td className="px-6 py-4">1,300-1,400</td>
                      <td className="px-6 py-4 font-semibold">6,500-7,000 kWh/year</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Arizona</td>
                      <td className="px-6 py-4">1,500-1,700</td>
                      <td className="px-6 py-4 font-semibold">7,500-8,500 kWh/year</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Texas</td>
                      <td className="px-6 py-4">1,300-1,500</td>
                      <td className="px-6 py-4 font-semibold">6,500-7,500 kWh/year</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Northeast US</td>
                      <td className="px-6 py-4">1,100-1,250</td>
                      <td className="px-6 py-4 font-semibold">5,500-6,250 kWh/year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">How to Interpret Your Results</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-lg">Above 85% of expected:</p>
                    <p className="text-gray-700">Your system is likely working fine — you just lost monitoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 text-2xl">⚠</span>
                  <div>
                    <p className="font-semibold text-lg">70-85% of expected:</p>
                    <p className="text-gray-700">Some degradation or partial failure — worth investigating</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 text-2xl">!</span>
                  <div>
                    <p className="font-semibold text-lg">Below 70% of expected:</p>
                    <p className="text-gray-700">Significant problem — get a professional diagnostic</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">✗</span>
                  <div>
                    <p className="font-semibold text-lg">Near zero production:</p>
                    <p className="text-gray-700">System is likely off or has major failure — check breakers first, then call a solar contractor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Action Plan */}
        <section id="action-plan" className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">6. Step-by-Step Action Plan</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">This Week</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <span className="text-lg pt-1"><strong>Gather your documents:</strong> Installation contract, warranty paperwork, permit records, utility bills (12+ months)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <span className="text-lg pt-1"><strong>Identify your equipment:</strong> What panels? What inverters? Do you have a SunVault?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <span className="text-lg pt-1"><strong>Do the utility bill analysis</strong> to estimate if your system is producing</span>
                  </li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">This Month</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <span className="text-lg pt-1">Register your panels with the manufacturer (Maxeon, REC, Qcells) if not already done</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <span className="text-lg pt-1">Contact Enphase (510-945-6752) about your microinverter warranty status and monitoring options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <span className="text-lg pt-1">If you have a lease with issues, send a formal written repair request to SunStrong</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                    <span className="text-lg pt-1">If production looks low, get a diagnostic from a local solar contractor ($150-300)</span>
                  </li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-2xl font-bold mb-4 text-red-700">If You Have Problems</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <span className="text-lg pt-1"><strong>Document everything:</strong> Dates, calls, emails, photos, utility bills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <span className="text-lg pt-1"><strong>File complaints:</strong> State Attorney General, FTC (ftc.gov/complaint), BBB, state contractor board</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <span className="text-lg pt-1"><strong>Consider legal consultation:</strong> Consumer protection attorneys handle solar disputes, often on contingency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                    <span className="text-lg pt-1"><strong>Join online communities:</strong> r/solar on Reddit has active discussions about SunPower issues</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Contacts */}
        <section id="contacts" className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">7. Key Contacts & Resources</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary-700">Warranty Support</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">Enphase (Inverters)</h4>
                    <p className="text-gray-700">510-945-6752</p>
                    <p className="text-gray-700">spwrquery@enphaseenergy.com</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">Maxeon (Panels)</h4>
                    <p className="text-gray-700">
                      <a href="https://maxeon.com/us/sunpower-warranty" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                        maxeon.com/us/sunpower-warranty
                      </a>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">REC (Panels)</h4>
                    <p className="text-gray-700">(877) 785-8055</p>
                    <p className="text-gray-700">
                      <a href="https://recgroup.com/en-us/contact" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                        recgroup.com/en-us/contact
                      </a>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">Qcells (Panels)</h4>
                    <p className="text-gray-700">
                      <a href="https://qpartnerus.com/qpp/s/login" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                        qpartnerus.com/qpp/s/login
                      </a>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">Waaree (Panels)</h4>
                    <p className="text-gray-700">1-800-2121-321</p>
                    <p className="text-gray-700">waaree@waaree.com</p>
                    <p className="text-sm text-yellow-700 mt-1">(difficult to reach)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary-700">Lease & Monitoring</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">SunStrong (Lease/PPA)</h4>
                    <p className="text-gray-700">(833) 514-1858</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">SunStrong Connect (Monitoring)</h4>
                    <p className="text-gray-700">App stores</p>
                    <p className="text-sm text-gray-600 mt-1">$99/year for full data</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary-700">Consumer Protection</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">FTC Complaints</h4>
                    <p className="text-gray-700">
                      <a href="https://ftc.gov/complaint" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                        ftc.gov/complaint
                      </a>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">CA Contractor Board</h4>
                    <p className="text-gray-700">800-321-CSLB</p>
                    <p className="text-gray-700">
                      <a href="https://cslb.ca.gov" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                        cslb.ca.gov
                      </a>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2">Production Calculator</h4>
                    <p className="text-gray-700">
                      <a href="https://pvwatts.nrel.gov" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                        pvwatts.nrel.gov
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600 mb-6">
                <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal advice. Laws vary by state and individual circumstances differ. Consult a licensed attorney for legal matters and a licensed contractor for electrical work. Information current as of December 2025.
              </p>

              <div className="bg-primary-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Need Help With Your Orphaned SunPower System?</h3>
                <p className="text-lg mb-6">
                  Awen Energy LLC specializes in helping homeowners navigate the post-SunPower landscape. Services include:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200 mt-1">•</span>
                    <span>System diagnostic assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200 mt-1">•</span>
                    <span>Warranty pathway identification and claims assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200 mt-1">•</span>
                    <span>Production analysis and troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200 mt-1">•</span>
                    <span>Lease dispute documentation and advocacy</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@awenenergy.com"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white"
                  >
                    Learn More About Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
