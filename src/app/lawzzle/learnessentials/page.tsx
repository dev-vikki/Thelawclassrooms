'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Search } from 'lucide-react';

export default function BusinessPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['/sc-court.png'];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const modules = [
    {
      title: 'IPO: The Buzz in the Market',
      description: 'Before we delve into all the technicalities of IPO and take you on an exciting journey, let us take a step back and look at the bigger picture. Let us ...',
      completed: true,
    },
    {
      title: 'Basics of IPO',
      description: 'Types of IPO in the previous module, we went through all the nuances of a business and why companies go public. Let us now look at basics of IPO. We already went ...',
      completed: false,
    },
    {
      title: 'Steps by Step IPO filing process',
      description: 'Before we tell you how to apply for an IPO, it is important to understand how a company files for an IPO. Now this might seem like an irrelevant module ...',
      completed: false,
    },
    {
      title: 'Steps To Apply For IPO',
      description: 'In this module we will cover the entire process for applying an IPO. It will cover requirements and documentation, eligibility, and guidelines. So, let’s start! Given the widespread technological advancement we ...',
      completed: false,
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* Banner */}
      <div className="relative h-96 w-full overflow-hidden rounded-xl mb-2">
        <img
          src={slides[currentSlide]}
          alt="Court Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-10"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-10"
            >
              <ArrowRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Competitive Analysis */}
      <section className="bg-zinc-900 py-4">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Competitive analysis</h2>
          <div className="bg-zinc-800 rounded-lg p-6 overflow-x-auto">
            <div className="grid grid-cols-5 gap-4 text-sm text-center text-gray-300">
              <div>
                <p className="text-white font-semibold">Revenue</p>
                <p>Daisy Frank<br />$120,800</p>
              </div>
              <div>
                <p className="text-white font-semibold">Deals</p>
                <p>Vivian Ekeogh<br />52 Won</p>
              </div>
              <div>
                <p className="text-white font-semibold">Calls</p>
                <p>Kristen Crowly<br />690 Done</p>
              </div>
              <div>
                <p className="text-white font-semibold">Tasks (This Month)</p>
                <p>Kristen Crowly<br />1,150 Done</p>
              </div>
              <div>
                <p className="text-white font-semibold">All Deals Funnel</p>
                <div className="mt-1 bg-yellow-600 text-black rounded-md px-2 py-1 inline-block">
                  RANK 1
                </div>
                <p className="mt-1 font-bold text-white">Abhishek Mishra</p>
                <p className="text-blue-400">1200 sections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs & Search */}
      <section className="bg-black border-t border-zinc-700 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              Indian Penal Code
            </button>
            <button className="text-gray-300 hover:text-white px-4 py-1 rounded-full text-sm">
              Criminal Procedure Code
            </button>
            <button className="text-gray-300 hover:text-white px-4 py-1 rounded-full text-sm">
              Indian Evidence Act
            </button>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-zinc-800 text-white pl-10 pr-3 py-2 rounded-md border border-gray-600 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Topic Highlight */}
      <section className="bg-black py-16 text-center">
        <p className="text-lg text-gray-400 mb-2">Identify the essential of</p>
        <h2 className="text-4xl font-bold text-white">THEFT</h2>
      </section>

      {/* IPO Module Section */}
      <section className="bg-black px-4 pb-10">
        <div className="max-w-4xl mx-auto space-y-6">
          {modules.map((module, idx) => (
            <div key={idx} className="border-b border-zinc-700 pb-4">
              <div className="flex items-start gap-4">
                <div className="text-xl text-gray-400">{idx + 1}</div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{module.title}</p>
                  <p className="text-gray-400 text-sm">{module.description}</p>
                </div>
                <div className="mt-1">
                  {module.completed ? (
                    <CheckCircle className="text-green-500" size={20} />
                  ) : (
                    <XCircle className="text-red-500" size={20} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-white rounded-full" />
            <div className="w-20 h-6 bg-zinc-700 rounded-full text-center text-sm text-white px-2 py-0.5">
              SECTION 1
            </div>
            <div className="w-20 h-6 bg-zinc-700 rounded-full text-center text-sm text-white px-2 py-0.5">
              SECTION 2
            </div>
            <div className="w-20 h-6 bg-zinc-700 rounded-full text-center text-sm text-white px-2 py-0.5">
              SECTION 3
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-6 bg-zinc-700 rounded-full text-center text-sm text-white px-2 py-0.5">
              SECTION 4
            </div>
            <div className="w-20 h-6 bg-zinc-700 rounded-full text-center text-sm text-white px-2 py-0.5">
              SECTION 5
            </div>
            <div className="w-20 h-6 bg-zinc-700 rounded-full text-center text-sm text-white px-2 py-0.5">
              SECTION 6
            </div>
          </div>
        </div>

        {/* Shabash footer */}
        <div className="bg-green-600 text-white text-center py-4 mt-8 text-lg font-bold">
          Shabash!!! <span className="font-semibold">judge sahab</span>
        </div>
      </section>
    </main>
  );
}
