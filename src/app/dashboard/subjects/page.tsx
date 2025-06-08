"use client";
import React from "react";

export default function Subjectwisetest() {
  return (
    <div className="bg-[#12121A] min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Subject Wise Test</h1>

      {/* Header Section */}
      <div className="bg-[#1E1E2F] p-4 rounded-md mb-6 flex justify-between items-center border border-gray-700">
        <div>
          <p className="text-gray-400 text-sm">
            Hi <span className="font-semibold text-white">Tejas Mishra</span>,
            Let’s review and stay on track
          </p>
        </div>
        <div className="flex gap-4 text-sm">
          {["IPC", "CRPC", "Evidence", "Contract"].map((subject, idx) => (
            <button
              key={idx}
              className="px-3 py-1 rounded-md bg-[#2e2e3e] hover:bg-purple-700 transition"
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Total Questions */}
        <div className="bg-[#1E1E2F] p-4 rounded-lg border border-gray-700 text-center">
          <p className="text-sm text-gray-400">Total Questions solved</p>
          <p className="text-4xl font-bold my-2">521</p>
          <p className="text-sm text-gray-400">out of 1000</p>
          <div className="relative w-16 h-16 mx-auto mt-2">
            <svg className="absolute inset-0" viewBox="0 0 36 36">
              <path
                className="text-gray-700"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-500"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray="70, 100"
                d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
              70%
            </span>
          </div>
        </div>

        {/* Topic Wise Graph (Placeholder) */}
        <div className="bg-[#1E1E2F] p-4 rounded-lg border border-gray-700">
          <p className="text-sm text-gray-400 mb-2">
            Topic Wise Performance Graph
          </p>
          <div className="w-full h-40 flex items-center justify-center text-gray-500 text-xs bg-[#111827] rounded">
            {/* Placeholder for chart */}
            [Graph Placeholder]
          </div>
        </div>

        {/* Last Solved Test Scores */}
        <div className="bg-[#1E1E2F] p-4 rounded-lg border border-gray-700">
          <p className="text-sm text-gray-400 mb-2">
            Your last solved test scores
          </p>
          <ul className="text-sm space-y-1">
            <li className="flex justify-between">
              <span>U.P Judiciary 2018</span>
              <span className="text-blue-400">180/200</span>
            </li>
            <li className="flex justify-between">
              <span>M.P Judiciary 2020</span>
              <span className="text-red-400">50/100</span>
            </li>
            <li className="flex justify-between">
              <span>Consideration</span>
              <span className="text-yellow-400">6/10</span>
            </li>
            <li className="flex justify-between">
              <span>Appeal</span>
              <span className="text-blue-400">10/10</span>
            </li>
            <li className="flex justify-between">
              <span>Right of Private defence</span>
              <span className="text-blue-400">10/10</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Weak Topics */}
      <div className="bg-[#1E1E2F] p-4 rounded-lg border border-red-600">
        <p className="text-red-500 text-sm font-bold mb-2">
          Weak Topics{" "}
          <span className="text-xs text-gray-400">Less than 50% score</span>
        </p>
        <ul className="text-sm space-y-1 text-white">
          <li className="flex justify-between">
            <span>Topic 1</span>
            <span className="text-red-400">48/100</span>
          </li>
          <li className="flex justify-between">
            <span>Topic 2</span>
            <span className="text-red-400">40/100</span>
          </li>
          <li className="flex justify-between">
            <span>Topic 3</span>
            <span className="text-red-400">31/100</span>
          </li>
          <li className="flex justify-between">
            <span>Topic 4</span>
            <span className="text-red-400">20/100</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
