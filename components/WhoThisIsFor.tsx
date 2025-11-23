export default function WhoThisIsFor() {
  const qualifyingCriteria = [
    {
      check: true,
      text: "Your solar system is 3-15 years old"
    },
    {
      check: true,
      text: "Your installer went out of business in the last 1-5 years"
    },
    {
      check: true,
      text: "You have equipment from major manufacturers (Enphase, SolarEdge, LG, Panasonic, REC, etc.)"
    },
    {
      check: true,
      text: "Something is broken or not working properly"
    },
    {
      check: true,
      text: "You've tried calling someone for help but gotten nowhere"
    }
  ];

  const notForYou = [
    {
      check: false,
      text: "Your warranties have completely expired"
    },
    {
      check: false,
      text: "Your installer is still in business (call them first!)"
    },
    {
      check: false,
      text: "You need help with workmanship issues (only manufacturer defects)"
    },
    {
      check: false,
      text: "You have a commercial system (residential only for now)"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Is This Service Right For You?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in helping homeowners with orphaned solar systems recover manufacturer warranties.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* This Is For You */}
          <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500 text-white p-2 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="heading-md text-green-900">Perfect! We Can Help If...</h3>
            </div>

            <ul className="space-y-4">
              {qualifyingCriteria.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 text-lg">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-green-200">
              <p className="text-green-900 font-semibold text-center">
                Sound like you? Let's talk! 👇
              </p>
            </div>
          </div>

          {/* This Is NOT For You */}
          <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-500 text-white p-2 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="heading-md text-gray-900">Sorry, We Can't Help If...</h3>
            </div>

            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-lg">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm text-center">
                Not sure if you qualify? <span className="font-semibold text-gray-800">Schedule a free assessment call</span> and we'll figure it out together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
