"use client";
import React from "react";

export default function NotesPage() {
  return (
    <div className="bg-[#12121A] min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Retention Tracking</h1>

      {/* Top Retention Summary */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {[
          { label: "Initial Reading", count: "10 topics" },
          { label: "24-Hour Revision", count: "6 topics" },
          { label: "3-Day Revision", count: "6 topics" },
          { label: "7-Day Revision", count: "5 topic" },
          { label: "21-Day Revision", count: "4 topic" },
        ].map(({ label, count }, i) => (
          <div
            key={i}
            className="bg-[#1E1E2F] rounded-lg p-4 text-center border border-gray-700"
          >
            <p className="font-semibold">{label}</p>
            <p className="text-sm text-gray-400 mt-1">{count}</p>
          </div>
        ))}
      </div>

      {/* Mastered Topic Card */}
      <div className="flex justify-end mb-4">
        <div className="bg-[#1E1E2F] p-4 rounded-xl w-64 text-center shadow-md border border-gray-700">
          <p className="text-sm text-gray-400">Total topic Mastered</p>
          <p className="text-3xl font-bold text-white my-2">10</p>
          <p className="text-sm text-gray-400">out of 25</p>
          <div className="relative w-16 h-16 mx-auto mt-2">
            <svg className="absolute inset-0" viewBox="0 0 36 36">
              <path
                className="text-gray-600"
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
      </div>

      {/* Retention Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-600 text-sm">
          <thead>
            <tr className="bg-[#222] text-white">
              <th className="p-2 border border-gray-600">Topic</th>
              <th className="p-2 border border-gray-600">Initial Reading</th>
              <th className="p-2 border border-gray-600">24-Hour Revision</th>
              <th className="p-2 border border-gray-600">3-Day Revision</th>
              <th className="p-2 border border-gray-600">7-Day Revision</th>
              <th className="p-2 border border-gray-600">21-Day Revision</th>
              <th className="p-2 border border-gray-600">Retention Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {[
              [
                "Dying Declaration",
                "Yes",
                "N/A",
                "N/A",
                "N/A",
                "N/A",
                "Mastered",
              ],
              [
                "Appeal in CrPC",
                "No",
                "Completed",
                "Completed",
                "Completed",
                "Completed",
                "Mastered",
              ],
              ["Accomplice", "Yes", "N/A", "N/A", "N/A", "N/A", "Not Mastered"],
              [
                "Examination of Witness",
                "Yes",
                "Completed",
                "Completed",
                "Completed",
                "Not Completed",
                "Not Mastered",
              ],
              [
                "Improper Admission",
                "No",
                "Completed",
                "Not Completed",
                "Not Completed",
                "Not Completed",
                "Not Mastered",
              ],
              [
                "Mens Rea",
                "Yes",
                "Completed",
                "Not Completed",
                "Not Completed",
                "Not Completed",
                "Not Mastered",
              ],
              [
                "Doctrine",
                "N/A",
                "Completed",
                "N/A",
                "N/A",
                "N/A",
                "Not Mastered",
              ],
              [
                "Sale of Immovable Property",
                "Yes",
                "Completed",
                "Completed",
                "Completed",
                "Completed",
                "Mastered",
              ],
              [
                "Transfer of Property",
                "Yes",
                "Completed",
                "Completed",
                "Completed",
                "Completed",
                "Mastered",
              ],
            ].map((row, idx) => (
              <tr key={idx} className="odd:bg-[#1E1E2F] even:bg-[#181825]">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className={`p-2 border border-gray-600 ${
                      i !== 0 && cell.toLowerCase().includes("not")
                        ? "bg-red-600 text-white"
                        : i !== 0 && cell.toLowerCase().includes("completed")
                        ? "bg-green-600 text-white"
                        : i !== 0 && cell.toLowerCase().includes("yes")
                        ? "bg-green-700 text-white"
                        : i !== 0 && cell.toLowerCase().includes("no")
                        ? "bg-red-700 text-white"
                        : i === 6 && cell.toLowerCase() === "mastered"
                        ? "bg-green-700 text-white font-bold"
                        : i === 6 && cell.toLowerCase() === "not mastered"
                        ? "bg-red-700 text-white font-bold"
                        : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
