"use client";
import React from "react";

export default function Subjectwisetest() {
  return (
    <div className="bg-[#12121A] min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Subject wise test</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Total Questions Solved */}
        <div className="bg-[#1E1E2F] p-6 rounded-xl shadow-md">
          <p className="text-lg font-semibold mb-2">Total Questions solved</p>
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold">521</div>
            <div className="relative w-16 h-16">
              <svg className="absolute inset-0" viewBox="0 0 36 36">
                <path
                  className="text-gray-700"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-500"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="70, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                70%
              </span>
            </div>
          </div>
          <p className="text-sm mt-1 text-gray-400">Out of 1000</p>
        </div>

        {/* Last Solved Scores */}
        <div className="bg-[#1E1E2F] p-6 rounded-xl shadow-md">
          <p className="text-lg font-semibold mb-4">
            Your last solved test scores
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex justify-between border-b border-gray-700 pb-1">
              <span>U.P Judiciary 2018</span>
              <span className="text-blue-400">180/200</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-1">
              <span>M.P Judiciary 2020</span>
              <span className="text-red-400">50/100</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-1">
              <span>Consideration</span>
              <span className="text-yellow-400">6/10</span>
            </li>
            <li className="flex justify-between">
              <span>Appeal</span>
              <span className="text-green-400">10/10</span>
            </li>
            <li className="flex justify-between">
              <span>Right of Private defence</span>
              <span className="text-green-400">10/10</span>
            </li>
            <li className="flex justify-between">
              <span>Right of Private defence</span>
              <span className="text-green-400">10/10</span>
            </li>
          </ul>
        </div>

        {/* Weak Topics */}
        <div className="bg-[#1E1E2F] p-6 rounded-xl shadow-md col-span-1">
          <p className="text-lg font-semibold text-red-400 mb-2">Weak Topics</p>
          <p className="text-sm mb-4 text-gray-400">Less than 50% score</p>
          <ul className="text-sm space-y-2">
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
    </div>
  );
}
