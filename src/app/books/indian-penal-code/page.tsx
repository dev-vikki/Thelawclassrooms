'use client';

import React from 'react';
import { Lock } from 'lucide-react';

const topics = [
  { title: 'Preliminary', section: 'Sections 1–52A', highlight: false },
  { title: 'Punishments', section: 'Sections 53-75', highlight: false },
  { title: 'General Exception', section: 'Sections 76-106', highlight: false },
  { title: 'Abetment', section: 'Sections 120A-120B', highlight: false },
  { title: 'Criminal Conspiracy', section: 'Section 121-130', highlight: false },
  { title: 'Offences Against the State', section: 'Sections 131-140', highlight: false },
  { title: 'Offences Relating to the Army, Navy and Air Force', section: 'Sections 141-160', highlight: false },
  { title: 'Offences Against the Public Tranquility', section: 'Sections 161-171', highlight: false },
  { title: 'Offences by or relating to public servant', section: 'Sections 191-229A', highlight: false },
  { title: 'False evidence and Offences Against Public Justice', section: 'Sections 230-263A', highlight: false },
  { title: 'Offences Relating to Coin and Government Stamps', section: 'Sections 293-297', highlight: false },
  { title: 'Offences Affecting the Public health, safety, Convenience, Decency, and Morals', section: 'Sections 378-462', highlight: false },
  { title: 'Offences Against the Human Body', section: 'Sections 463-489E', highlight: false },
  { title: 'Offences Against the Property', section: 'Sections 493-498', highlight: false },
  { title: 'Offences Relating to Documents and Property Marks', section: 'Sections 498A', highlight: false },
  { title: 'Offences Relating to Marriage', section: 'Sections 499-502', highlight: false },
  { title: 'Cruelty by Husband or Relatives of Husband', section: 'Sections 503-510', highlight: false },
  { title: 'Defamation', section: 'Sections 503-510', highlight: false },
  { title: 'Criminal Intimidation, Insult, and Annoyance', section: '', highlight: false }

];

export default function IPCpage() {
  return (
    <main className="min-h-screen bg-black text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-4 py-8 gap-6">
        
        {/* Left Sidebar */}
        <aside className="md:col-span-1 p-4 rounded-md space-y-6" style={{ backgroundColor: '##121212' }}>
          <a href="/" className="text-yellow-400 text-sm font-semibold hover:underline block">
            ← Back to Home
          </a>
          <div className="rounded-md overflow-hidden">
            <img
              src="/books/c1.png"
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
              <h1 className="text-2xl font-bold uppercase">Indian penal Code, 1860</h1>
              <p className="text-gray-400 mt-2 max-w-2xl text-sm">
                Master Indian penal code with our comprehensive topic wise MCQs.
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
                  <span className="text-sm text-gray-400">250 QUESTIONS</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
