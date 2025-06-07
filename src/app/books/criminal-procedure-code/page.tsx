'use client';

import React from 'react';
import { Lock } from 'lucide-react';

const topics = [
  { title: 'Preliminary', section: 'Sections 1–5', highlight: false },
  { title: 'Constitution of Criminal Courts and Offices', section: 'Sections 6–25A', highlight: false },
  { title: 'Power of Courts', section: 'Sections 26–35', highlight: false },
  { title: 'Powers of Superior Officers of Police', section: 'Sections 36–40', highlight: false },
  { title: 'Arrest of Persons', section: 'Sections 41–60A', highlight: false },
<<<<<<< HEAD
  { title: 'Processes to Compel Appearance', section: null, highlight: true },
  { title: 'Processes to Compel the Production of Things', section: 'Sections 106–124', highlight: false },
  { title: 'Arrest of Persons', section: null, highlight: true },
  { title: 'Security for Keeping the Peace and for Good Behaviour', section: null, highlight: true },
  { title: 'Order for Maintenance of Wives, Children, and Parents', section: null, highlight: true },
=======
  { title: 'Processes to Compel Appearance', section: 'Sections 61–90A', highlight: true },
  { title: 'Processes to Compel the Production of Things', section: 'Sections 106–124', highlight: false },
{ title: 'Security for Keeping the Peace and for Good Behaviour', section: 'Sections 106-124', highlight: false },
{ title: 'Order for Maintenance of Wives, Children, and Parents', section: 'Sections 125-128', highlight: false },
{ title: 'Maintenance of Public Order and Tranquility', section: 'Sections 129-148', highlight: false },
{ title: 'Preventive Action of the Police', section: 'Sections 149-151', highlight: false },
{ title: 'Information to the Police and Their Powers to Investigate', section: 'Sections 154-176', highlight: false },
{ title: 'Jurisdiction of the Criminal Courts in Inquiries and Trials', section: 'Sections 177-189', highlight: false },
{ title: 'Conditions Requisite for Initiation of Proceedings', section: 'Sections 190-199', highlight: false },
{ title: 'Complaints to Magistrates', section: 'Sections 200-203', highlight: false },
{ title: 'Commencement of Proceedings Before Magistrates', section: 'Sections 204-210', highlight: false },
{ title: 'The Charge', section: 'Sections 211-224', highlight: false },
{ title: 'Trial Before a Court of Session', section: 'Sections 225-237', highlight: false },
{ title: 'Trial of Warrant-Cases by Magistrates', section: 'Sections 238-250', highlight: false },
{ title: 'Trial of Summons-Cases by Magistrates', section: 'Sections 251-259', highlight: false },
{ title: 'Summary Trials', section: 'Sections 260-265', highlight: false },
{ title: 'Plea Bargaining', section: 'Sections 265A-265L', highlight: false },
{ title: 'Evidence in Inquiries and Trials', section: 'Sections 272-279', highlight: false },
{ title: 'General Provisions as to Inquiries and Trials', section: 'Sections 300-327', highlight: false },
{ title: 'Provisions as to Offences Affecting the Administration of Justice', section: 'Sections 340-352', highlight: false },
{ title: 'The Judgment', section: 'Sections 353-365', highlight: false },
{ title: 'Submission of Death Sentences for Confirmation', section: 'Sections 366-371', highlight: false },
  { title: 'Appeals', section: 'Sections 372-394', highlight: false },
  { title: 'Transfer of Criminal Cases', section: 'Sections 406-412', highlight: false },
  { title: 'Execution, Suspension, Remission, and Commutation of Sentences', section: 'Sections 413-435', highlight: false },
  { title: 'Provisions as to Bail and Bonds', section: 'Sections 436-450', highlight: false },
  { title: 'Disposal of Property', section: 'Sections 451-459', highlight: false },
  { title: 'Irregular Proceedings', section: 'Sections 460-466', highlight: false },
  { title: 'Limitation for Taking Cognizance of Certain Offences', section: 'Sections 467-473', highlight: false },
  { title: 'Miscellaneous', section: 'Sections 474-484', highlight: false },
  { title: 'First Schedule', section: 'null', highlight: false }
>>>>>>> 732014c (Initial Commit)
];

export default function CRPCPage() {
  return (
    <main className="min-h-screen bg-black text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-4 py-8 gap-6">
        
        {/* Left Sidebar */}
<<<<<<< HEAD
        <aside className="md:col-span-1 p-4 rounded-md space-y-6" style={{ backgroundColor: '#1d1d1d' }}>
=======
        <aside className="md:col-span-1 p-4 rounded-md space-y-6" style={{ backgroundColor: '##121212' }}>
>>>>>>> 732014c (Initial Commit)
          <a href="/" className="text-yellow-400 text-sm font-semibold hover:underline block">
            ← Back to Home
          </a>
          <div className="rounded-md overflow-hidden">
            <img
              src="/books/criminal.png"
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
              <h1 className="text-2xl font-bold uppercase">Criminal Procedure Code, 1908</h1>
              <p className="text-gray-400 mt-2 max-w-2xl text-sm">
<<<<<<< HEAD
                Master civil procedure with our comprehensive topic wise MCQs.
=======
                Master criminal procedure with our comprehensive topic wise MCQs.
>>>>>>> 732014c (Initial Commit)
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
