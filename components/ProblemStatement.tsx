export default function ProblemStatement() {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Your Installer Went Bankrupt",
      description: "Over 100 solar companies failed in 2024 alone. You're left with no one to service your system or help with warranty claims."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Equipment Is Still Under Warranty",
      description: "Your panels, inverters, or batteries are covered by manufacturer warranties—but you don't know how to file a claim without your installer."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "The Process Is Confusing",
      description: "Which manufacturer? What documentation? Who will do the repair work? You're stuck in limbo with a broken system."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Every Day Costs You Money",
      description: "A non-working solar system means higher electric bills. Every month without a fix is money out of your pocket."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            You're Not Alone—And This Isn't Your Fault
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of homeowners are dealing with broken solar systems after their installer disappeared.
            Here's why this is so frustrating:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-red-500 mb-4">
                {problem.icon}
              </div>
              <h3 className="heading-sm mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
            <p className="text-lg font-semibold text-gray-800">
              The good news? Your manufacturer warranties are still valid.<br />
              <span className="text-primary-600">We know exactly how to get them honored.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
