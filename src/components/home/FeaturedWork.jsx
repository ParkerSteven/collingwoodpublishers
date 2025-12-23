"use client"
import { useState } from "react";

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Fiction", "Nonfiction", "Children", "Business"];
  
  const books = [
    { title: "Whispers of Tomorrow", category: "Fiction", gradient: "from-indigo-600 via-purple-600 to-pink-500" },
    { title: "Strategic Horizons", category: "Business", gradient: "from-slate-700 via-gray-800 to-zinc-900" },
    { title: "Moonlight Dreams", category: "Children", gradient: "from-cyan-400 via-blue-500 to-indigo-600" },
    { title: "Breaking Boundaries", category: "Nonfiction", gradient: "from-emerald-500 via-teal-600 to-cyan-700" },
    { title: "Echoes of Yesterday", category: "Fiction", gradient: "from-rose-500 via-red-600 to-orange-600" },
    { title: "Growth Mastery", category: "Business", gradient: "from-violet-600 via-purple-700 to-indigo-800" },
    { title: "The Magic Garden", category: "Children", gradient: "from-amber-400 via-orange-500 to-red-500" },
    { title: "Uncharted Paths", category: "Nonfiction", gradient: "from-lime-600 via-green-600 to-emerald-700" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-[#FAFBFC] to-[#F6F7F9]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A glimpse at the diverse range of books we've helped bring to life across multiple genres.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[2/3] bg-gradient-to-br ${book.gradient} rounded-lg shadow-md overflow-hidden group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                {/* Animated geometric patterns */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: `${index * 0.3}s` }}></div>
                </div>
                
                {/* Book spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white opacity-30"></div>
                
                {/* Title */}
                <div className="relative h-full flex items-center justify-center p-6">
                  <p className="text-white font-bold text-center text-lg leading-tight drop-shadow-lg">
                    {book.title}
                  </p>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">{book.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
