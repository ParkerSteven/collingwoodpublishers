"use client"

export default function WhyChooseUs() {
  const benefits = [
    "Dedicated publishing team assigned to your project from day one",
    "Transparent pricing with no hidden fees or surprise charges",
    "Retain 100% of your rights and creative control throughout",
    "Personalized marketing strategy tailored to your genre and goals",
    "Direct communication with editors, designers, and your project lead"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#F8F9FB] via-white to-[#EEF2F7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              A Team That Treats Your Book Like a Business
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-125 group-hover/item:rotate-12 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#fdab9a] to-primary rounded-xl flex items-center justify-center text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <span className="relative z-10">Image Placeholder</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-[#ffc4b5] opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
