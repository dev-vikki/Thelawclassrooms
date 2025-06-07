'use client';

import React from 'react';
import { Lock } from 'lucide-react';

const topics = [
<<<<<<< HEAD
  { title: '2010', section: 'Punjab Judicial Services', highlight: false },
  { title: '2011', section: 'Sections 6–25A', highlight: false },
  { title: 'Power of Courts', section: 'Sections 26–35', highlight: false },
  { title: 'Powers of Superior Officers of Police', section: 'Sections 36–40', highlight: false },
  { title: 'Arrest of Persons', section: 'Sections 41–60A', highlight: false },
  { title: 'Processes to Compel Appearance', section: null, highlight: true },
  { title: 'Processes to Compel the Production of Things', section: 'Sections 106–124', highlight: false },
  { title: 'Arrest of Persons', section: null, highlight: true },
  { title: 'Security for Keeping the Peace and for Good Behaviour', section: null, highlight: true },
  { title: 'Order for Maintenance of Wives, Children, and Parents', section: null, highlight: true },
];

export default function CRPCPage() {
=======
  { title: 'PPSC Judiciary Civil Judge Previous Year Question, 2010', section: '125 questions', highlight: false },
  { title: 'PPSC Judiciary Civil Judge Previous Year Question, 2013', section: '125 questions', highlight: false },
  { title: 'PPPSC Judiciary Civil Judge Previous Year Question, 2015', section: '125 questions', highlight: false },
  { title: 'PPSC Judiciary Civil Judge Previous Year Question, 2017', section: '125 questions', highlight: false }
];

export default function punjabjudiciaryPage() {
>>>>>>> 732014c (Initial Commit)
  return (
    <main className="min-h-screen bg-black text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-4 py-8 gap-6">
        
        {/* Left Sidebar */}
<<<<<<< HEAD
        <aside className="md:col-span-1 p-4 rounded-md space-y-6" style={{ backgroundColor: '#1d1d1d' }}>
=======
        <aside className="md:col-span-1 p-4 rounded-md space-y-6" style={{ backgroundColor: '#121212' }}>
>>>>>>> 732014c (Initial Commit)
          <a href="/" className="text-yellow-400 text-sm font-semibold hover:underline block">
            ← Back to Home
          </a>
          <div className="rounded-md overflow-hidden">
            <img
<<<<<<< HEAD
              src="/books/pb1.png"
=======
              src="/books/6.png"
>>>>>>> 732014c (Initial Commit)
              alt="CRPC Banner"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">What you will get</h2>
            <ul className="list-decimal list-inside text-sm space-y-1 text-gray-300">
              <li>Retest incorrect questions</li>
              <li>Instant wrong question list</li>
              <li>Progress tracking dashboard</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
                  src="/coin.png" // Make sure the coin image is in the public folder
                  alt="Coin"
                  className="w-20 h-22"
                />
              {/* <div className="flex items-center gap-2"> */}
                
                <div className="text-white text-4xl font-extrabold leading-none">
                  250 <span className="text-yellow-400">TLC</span>
                </div>
                
              {/* </div> */}
            </div>
            <div className="text-center">
            <button className="bg-lime-600 text-black font-semibold px-5 py-2 rounded-md">
              UNLOCK ALL
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <section className="md:col-span-3 pr-6 space-y-6">
          <div className="flex justify-between items-start mb-0">
            <div>
<<<<<<< HEAD
              <h1 className="text-2xl font-bold uppercase">Punjab Judiciary</h1>
=======
              <h1 className="text-2xl font-bold uppercase">Punjab Judiciary Civil Judge Previous Year Question</h1>
>>>>>>> 732014c (Initial Commit)
              <p className="text-gray-400 mt-2 max-w-2xl text-sm">
                Master civil procedure with our comprehensive topic wise MCQs.
                Experience exam like pressure with timed tests.
                Your gateway to mastering CRPC with accuracy and confidence.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
            {/* <img
                  src="/coin.png" // Make sure the coin image is in the public folder
                  alt="Coin"
                  className="w-20 h-22"
                /> */}
              {/* <div className="flex items-center gap-2"> */}
                
                {/* <div className="text-white text-4xl font-extrabold leading-none">
                  250 <span className="text-yellow-400">TLC</span>
                </div> */}
                
              {/* </div> */}
            </div>
          </div>
          

          {/* Stats Card */}
          <div className="w-full max-w-xl mx-left mb-6">
            <div className="grid grid-cols-5 rounded overflow-hidden border border-white text-center text-sm">
              <div className="bg-yellow-400 text-black py-2">
                <div className="font-bold text-5xl">∞</div>
                <p className="text-base">Yours for life</p>
              </div>
             
              
              <div className="bg-white text-black py-3">
                <p className="text-3xl font-bold">36</p>
                <p className="text-base">Total</p>
                <p className="text-base">Topics</p>
              </div>
             
              <div className="bg-white text-black py-3">
                <p className="text-3xl font-bold">1018</p>
                <p className="text-base">Total Questions</p>
              </div>
              <div className="bg-white text-black py-3">
                <p className="text-3xl">🏗️</p>
                <p className="text-base">Foundational series</p>
              </div>
              <div className="py-3">
                <p className="text-3xl font-bold">🏁</p>
                <p className="text-base">Ultimate Series</p>
              </div>
            </div>
          </div>
          

          {/* Unlock Button */}
          {/* <div className="text-up">
            <button className="bg-lime-600 text-black font-semibold px-5 py-2 rounded-md">
              UNLOCK ALL
            </button>
          </div> */}

          {/* Topics */}
          <div>
            <h2 className="text-lg font-bold mb-3 uppercase">Topics</h2>
            {/* <div className="bg-zinc-800 p-3 rounded-md flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">GIFT FOR YOU</span>
              </div>
            </div> */}

            <div className="space-y-2">
              {topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-zinc-900 px-4 py-3 rounded-md hover:bg-zinc-800 transition"
                >
                  <div>
                    {topic.section ? (
                      <p className="text-xs text-gray-400 mb-1">[{topic.section}]</p>
                    ) : (
                      <p className="text-xs text-yellow-400 mb-1">250 questions</p>
                    )}
                    <p className="font-medium">{topic.title}</p>
                  </div>
                  <span className="text-sm text-gray-400">Unlock</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
