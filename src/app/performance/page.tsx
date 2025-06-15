"use client";

import { useState } from "react";

export default function PerformanceReportPage() {
  const score = 50;
  const total = 60;
  const correct = 50;
  const incorrect = 10;

  const questions = [
    {
      id: 1,
      question: "Topic: Offence against human body",
      isCorrect: false,
      correctAnswer: "A. Topic matches with IPC Section 319",
    },
    {
      id: 2,
      question:
        "Which section deals with the concept of hosts forming part of some ...",
      isCorrect: false,
      correctAnswer: "C. Section 36",
    },
    {
      id: 3,
      question:
        "Which of the following cases is related to the defense of necessity?",
      options: [
        "A. DPP vs Beard",
        "B. R vs Dudley and Stephens",
        "C. R vs Lipman",
        "D. DPP vs Lynch",
      ],
      isCorrect: false,
      correctAnswer: "B. R vs Dudley and Stephens",
    },
  ];

  const percent = (score / total) * 100;

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-[#1e1e1e] rounded-t-xl py-4 text-center">
          <h1 className="text-2xl font-bold">Performance report</h1>
          <p className="text-sm text-gray-400">60 questions</p>
        </div>

        {/* Score Card */}
        <div className="bg-black rounded-b-xl border border-t-0 border-[#444] p-4 space-y-4">
          <p className="text-lg font-semibold">
            Tejas secured: <span className="text-yellow-400">{score}</span>
          </p>

          {/* Graph UI */}
          <div className="grid grid-cols-[auto_1fr_auto] gap-2 items-center border border-white rounded overflow-hidden h-auto relative">
            {/* Left Labels */}
            <div className="flex flex-col justify-between h-full py-2 pl-2 text-[10px] md:text-xs text-white font-semibold space-y-2">
              <div className="bg-[#fdb914] text-black px-2 py-1 rounded-t-sm border border-white">
                <h1 className="font-bold">Expert</h1>
                <p className="text-[10px] font-normal">46-60</p>
              </div>

              <div className="bg-[#1a1a1a] px-2 py-1 border-t border-white">
                <h1>Capable</h1>
                <p className="text-gray-400 text-[10px]">31-45</p>
              </div>

              <div className="bg-[#1a1a1a] px-2 py-1 border-t border-white">
                <h1>Growing</h1>
                <p className="text-gray-400 text-[10px]">16-30</p>
              </div>

              <div className="bg-[#1a1a1a] px-2 py-1 rounded-b-sm border-t border-white">
                <h1>Foundational</h1>
                <p className="text-gray-400 text-[10px]">0-15</p>
              </div>
            </div>

            {/* Graph Area */}
            <div className="relative h-full">
              {/* Background Bands */}
              {["#fdb914", "#333", "#222", "#111"].map((color, idx) => (
                <div
                  key={idx}
                  className="absolute w-full h-1/4"
                  style={{ top: `${idx * 25}%`, backgroundColor: color }}
                />
              ))}

              {/* Score Marker */}
              <div
                className="absolute left-[83%] top-0 h-full w-[3px] bg-yellow-400"
                style={{ transform: "translateX(-50%)" }}
              />

              {/* Curve Line */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <path
                  d="M0,100 C30,60 70,30 100,0"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <p className="text-[10px] text-yellow-400 text-right">80%: correct</p>
        </div>

        {/* Achievement Box */}
        <div className="bg-white text-black p-3 rounded-md text-sm">
          ⭐ You outperformed 55% of the law classroom learners who have
          completed this assessment.
        </div>

        {/* Answer Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Your answers</h2>
          <div className="flex gap-4 mb-4">
            <span className="bg-green-600 px-3 py-1 rounded text-sm">
              {correct} correct
            </span>
            <span className="bg-red-600 px-3 py-1 rounded text-sm">
              {incorrect} incorrect
            </span>
            <span className="bg-gray-600 px-3 py-1 rounded text-sm">
              0 skipped
            </span>
          </div>

          {/* Incorrect Answers */}
          {questions.map((q, i) => (
            <div
              key={q.id}
              className="bg-[#1e1e1e] border border-gray-700 p-4 rounded-md mb-4"
            >
              <h3 className="text-red-400 font-bold mb-2">Question {i + 1}</h3>
              <p className="text-sm mb-2">{q.question}</p>
              {q.options && (
                <ul className="list-disc pl-6 text-sm text-gray-400">
                  {q.options.map((opt, idx) => (
                    <li key={idx}>{opt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Review Button */}
          <div className="text-center">
            <button className="bg-[#141313] text-white font-bold px-6 py-2 rounded-md mt-4">
              REVIEW AND RETRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
