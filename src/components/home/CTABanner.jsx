"use client"

export default function CTABanner() {
  return (
    <section className="py-16 bg-[#F6F7F9]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Ready to Publish With Confidence?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of authors who've brought their books to life with our expert team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#fc8770] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 hover:-translate-y-1">
            Submit Manuscript
          </button>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1">
            Talk to an Agent
          </button>
        </div>
      </div>
    </section>
  );
}
