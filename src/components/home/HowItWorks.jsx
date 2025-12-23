"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Share Your Goals",
      description: "Tell us about your manuscript, target audience, and publishing timeline in a free consultation."
    },
    {
      number: "02",
      title: "Get a Publishing Plan",
      description: "Receive a custom proposal outlining services, milestones, costs, and your dedicated team members."
    },
    {
      number: "03",
      title: "Production & Polish",
      description: "Work with professional editors, designers, and formatters to refine every detail of your book."
    },
    {
      number: "04",
      title: "Launch & Promotion",
      description: "Go live on all major platforms with a coordinated marketing campaign to maximize your reach."
    }
  ];

  return (
    <section className="py-16 bg-[#F6F7F9]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A clear, straightforward process designed to bring your book from manuscript to market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group/step">
              <div className="bg-gradient-to-br from-white via-[#FAFBFC] to-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 group-hover/step:scale-110 group-hover/step:rotate-12 transition-all duration-300 hover:animate-pulse">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
