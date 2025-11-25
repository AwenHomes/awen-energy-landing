import { problems } from '@/data/problems';

export default function ProblemStatement() {

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
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={problem.iconPath} />
                </svg>
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
