'use client';

import { useState } from 'react';

export default function MCQsPage() {
  const [selected, setSelected] = useState<number | null>(2); // Green is pre-selected

  const question = "Which section deals with the facts forming part of same transaction?";
  const options = [
    question,
    question,
    question,
    question,
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-[#111] rounded-xl border border-gray-800 p-6 shadow-xl relative">
        <div className="text-sm uppercase tracking-wide text-gray-400 mb-3">offences against human body</div>
        <div className="w-full h-2 bg-gray-800 rounded-full mb-6">
          <div className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 w-[50%] rounded-full"></div>
        </div>
        <div className="text-xs text-gray-400 mb-2">Question 150 of 200</div>

        <div className="text-lg font-semibold mb-6 text-center">
          {question}
        </div>

        <div className="space-y-4">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                selected === idx
                  ? 'bg-green-600 text-white font-bold'
                  : 'bg-black border-gray-700 text-gray-300 hover:bg-gray-800'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button className="px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600">
            LEAVE
          </button>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-red-600 text-white font-semibold">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
