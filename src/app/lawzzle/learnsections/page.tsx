'use client';

import React from 'react';
import { Search } from 'lucide-react';

export default function SectionMasteryPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden rounded-xl mb-10">
        <img
          src="/sc-court.png"
          alt="Law Mastery Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>

      {/* Competitive Analysis Leaderboard */}
      <section className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Competitive Analysis</h2>
          <p className="text-gray-400 text-sm mb-6">
            Mentioned slide will help the presenter to show the investors or audience a complete view of its competitive
            landscape of Transportation and Ride Sharing Platforms based on factors such as CEO rating, number of employees,
            total funding amount, total revenue etc.
          </p>

          <div className="bg-zinc-800 rounded-lg p-6 overflow-x-auto">
            <div className="grid grid-cols-5 gap-4 text-sm text-center text-gray-300">
              <div>
                <p className="text-white font-semibold">Revenue</p>
                <p>Daisy Frank<br />$120,800</p>
                <p>Vivian Elassoph<br />$121,500</p>
                <p>Oliver Cucrere<br />$113,520</p>
              </div>
              <div>
                <p className="text-white font-semibold">Deals</p>
                <p>Daisy Frank<br />52 Won</p>
                <p>Vivian Elassoph<br />50 Won</p>
                <p>Oliver Cucrere<br />45 Won</p>
              </div>
              <div>
                <p className="text-white font-semibold">Calls</p>
                <p>Kristen Crowly<br />690 Done</p>
                <p>Laura Michele<br />235 Done</p>
                <p>Patrick Creedon<br />210 Done</p>
              </div>
              <div>
                <p className="text-white font-semibold">Tasks (This Month)</p>
                <p>Kristen Crowly<br />1,150 Done</p>
                <p>Laura Michele<br />1095 Done</p>
                <p>Patrick Creedon<br />326 Done</p>
              </div>
              <div>
                <p className="text-white font-semibold">All Deals Funnel</p>
                <div className="mt-1 bg-yellow-600 text-black rounded-md px-2 py-1 inline-block">RANK 1</div>
                <div className="mt-2 bg-white text-black rounded-md px-4 py-2 inline-block">
                  <p className="font-bold text-sm">Abhishek Mishra</p>
                  <p className="text-blue-600 text-sm">1200 sections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs and Search */}
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

      {/* Drag and Match Section */}
      <section className="bg-black py-12 px-4">
        <h3 className="text-xl font-semibold text-yellow-500 mb-6">Drag the section to the correct provision</h3>

        <div className="space-y-4">
          {[
            {
              title: 'IPO: The Buzz in the Market',
              text: 'Before we delve into all the technicalities of IPO and take you on an exciting journey...',
              status: '✅'
            },
            {
              title: 'Basics of IPO',
              text: 'Types of IPO in the previous module, we went through all the nuances...',
              status: '❌'
            },
            {
              title: 'Steps by Step IPO filing process',
              text: 'Before we tell you how to apply for an IPO, it is important to understand...',
              status: '❌'
            },
            {
              title: 'Steps To Apply For IPO',
              text: 'In this module we will cover the entire process for applying an IPO...',
              status: '✅'
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between bg-zinc-900 p-4 rounded-lg border border-zinc-700"
            >
              <div>
                <h4 className="font-semibold">{idx + 1}. {item.title}</h4>
                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
              <div className={`text-sm font-bold px-3 py-1 rounded-full ${item.status === '✅' ? 'bg-green-500 text-black' : 'bg-red-600 text-white'}`}>
                Sec {item.status === '✅' ? '✔️' : '❌'}
              </div>
            </div>
          ))}
        </div>

        {/* Check Button */}
        <div className="text-center mt-8">
          <button className="bg-green-600 text-black font-bold px-6 py-2 rounded-md">
            CHECK
          </button>
        </div>
      </section>

      {/* Shabash Banner */}
      <div className="bg-green-600 text-white text-center py-4 text-xl font-bold">
        Shabash!!!<br />judge sahab
      </div>
    </main>
  );
}
