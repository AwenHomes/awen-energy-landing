export default function HowItWorks() {
  const stages = [
    {
      stage: "Stage 1",
      title: "Free Case Assessment",
      duration: "30 minutes",
      price: "FREE",
      description: "We'll review your situation to see if we can help.",
      details: [
        "Quick phone call to understand your situation",
        "Review photos of your equipment",
        "Identify which manufacturers are involved",
        "Check if warranties are still active",
        "Tell you honestly if your case is viable"
      ],
      outcome: "You'll know: \"Yes, we can help\" or \"No, this won't work\""
    },
    {
      stage: "Stage 2",
      title: "Claim Preparation & Submission",
      duration: "4-6 hours of work",
      price: "$500 flat fee",
      description: "We do all the heavy lifting to get your claim filed.",
      details: [
        "Gather all necessary documentation",
        "Contact manufacturers for claim procedures",
        "Prepare complete warranty claim packages",
        "Submit claims to appropriate manufacturers",
        "Handle initial manufacturer correspondence"
      ],
      outcome: "Your warranty claim(s) are officially submitted"
    },
    {
      stage: "Stage 3",
      title: "Claim Management & Completion",
      duration: "Until resolved",
      price: "10% of recovered value",
      description: "We manage the process until your system is fixed.",
      details: [
        "Follow up with manufacturers until approval",
        "Find qualified local contractor for repairs",
        "Coordinate between you, manufacturer, and contractor",
        "Ensure work is completed correctly",
        "Verify your system is back online"
      ],
      outcome: "Your system is repaired or replaced under warranty"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            How We Get Your System Fixed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 3-stage process takes the confusion and frustration out of warranty recovery.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-primary-600 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left: Stage Number & Title */}
                <div className="lg:w-1/3">
                  <div className="inline-block bg-primary-100 text-primary-700 font-bold px-4 py-1 rounded-full text-sm mb-3">
                    {stage.stage}
                  </div>
                  <h3 className="heading-md mb-2">{stage.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{stage.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-primary-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{stage.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{stage.description}</p>
                </div>

                {/* Right: Details */}
                <div className="lg:w-2/3 lg:border-l lg:pl-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What We Do:</h4>
                  <ul className="space-y-2 mb-4">
                    {stage.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                    <p className="text-sm font-semibold text-primary-800">
                      ✓ Outcome: {stage.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">No surprises.</span> You know exactly what to expect at every stage.
          </p>
        </div>
      </div>
    </section>
  );
}
