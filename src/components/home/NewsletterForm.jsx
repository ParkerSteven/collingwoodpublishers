"use client"
import { useState } from "react";

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    // TODO: Implement form submission
  };

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#ffa896] to-primary opacity-50 animate-pulse"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute left-8 top-8 md:left-16 md:top-12 animate-bounce" style={{ animationDuration: '3s' }}>
        <svg className="w-16 h-16 md:w-20 md:h-20 text-[#fc8770] opacity-50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l3.708 7.513 8.292 1.207-6 5.847 1.416 8.259L12 18.75l-7.416 3.876L6 14.567 0 8.72l8.292-1.207L12 0z"/>
        </svg>
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 right-12 w-24 h-24 bg-white/10 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#ffc4b5]/20 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
      
      {/* Floating sparkles */}
      <div className="absolute top-1/2 left-1/3 animate-spin" style={{ animationDuration: '8s' }}>
        <svg className="w-8 h-8 text-white/30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l1.5 4.5L18 6l-4.5 1.5L12 12l-1.5-4.5L6 6l4.5-1.5L12 0zm0 12l1.5 4.5L18 18l-4.5 1.5L12 24l-1.5-4.5L6 18l4.5-1.5L12 12z"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
        <svg className="w-6 h-6 text-white/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l1.5 4.5L18 6l-4.5 1.5L12 12l-1.5-4.5L6 6l4.5-1.5L12 0zm0 12l1.5 4.5L18 18l-4.5 1.5L12 24l-1.5-4.5L6 18l4.5-1.5L12 12z"/>
        </svg>
      </div>
      
      {/* Moving geometric shapes */}
      <div className="absolute top-20 left-1/2 w-20 h-20 border-4 border-white/10 rotate-45 animate-pulse" style={{ animationDuration: '7s' }}></div>
      <div className="absolute bottom-20 right-1/3 w-16 h-16 border-4 border-[#ffc4b5]/20 rounded-full animate-bounce" style={{ animationDuration: '5.5s' }}></div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="bg-gradient-to-br from-white via-[#FAFBFC] to-[#F6F7F9] border-4 border-gray-900 rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Get the latest from Franklin!
            </h2>
            <div className="w-32 h-1 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
              Subscribe for our latest videos, blog posts, and guides.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 border-2 border-gray-900 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/60"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Email"
                  className="w-full px-4 py-3 border-2 border-gray-900 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/60"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary hover:bg-[#fc8770] text-white font-bold px-12 py-4 rounded-lg border-2 border-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                Submit
              </button>
            </div>

            <div className="flex justify-center">
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-2">Captcha</p>
                <div className="bg-gray-100 border border-gray-300 rounded px-4 py-3 text-center">
                  reCAPTCHA placeholder
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
