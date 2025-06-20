"use client";

import { useState } from "react";


const syllabusData = {
  "Uttar pradesh": {
    title: "UP PCS Judiciary Syllabus 2025",
    description:
      "This syllabus outlines topics of Social relevance including sensitivity to persons with disabilities, senior citizens, and offences on women and children",
  },
  Delhi: {
    title: "Delhi Judiciary Syllabus 2025",
    description:
      "Comprehensive syllabus for Delhi Judicial Services including local laws, constitutional provisions, and procedural statutes.",
  },
  Bihar: {
    title: "Bihar Judiciary Syllabus 2025",
    description:
      "Includes detailed syllabus on procedural law, evidence act, and general studies relevant to Bihar judiciary exams.",
  },
  Rajasthan: {
    title: "Rajasthan Judiciary Syllabus 2025",
    description:
      "Syllabus includes civil and criminal law, current affairs, and Rajasthan-specific legal topics.",
  },
  "Madhya pradesh": {
    title: "MP Judiciary Syllabus 2025",
    description:
      "Subjects include Indian Constitution, IPC, CPC, CRPC, Evidence Act and local MP laws.",
  },
};

const tabData = [
  {
    key: "preliminary",
    duration: "2 hours",
    marks: 150,
    topics: [
      "Current events of national and international importance",
      "Indian history and culture",
      "Geography of India",
      "Indian economy",
      "Indian polity and governance",
      "Science and technology",
      "Environmental issues",
      "Sports and awards",
      "Books and authors",
    ],
  },
  {
    key: "mains",
    duration: "3 hours",
    marks: 200,
    topics: [
      "Constitutional Law",
      "Civil Law",
      "Criminal Law",
      "Procedural Laws",
    ],
  },
  {
    key: "interview",
    duration: "30 minutes",
    marks: 100,
    topics: ["Legal reasoning", "Communication skills", "Judgment writing"],
  },
];


export default function SyllabusPage() {
  const [selectedState, setSelectedState] = useState("Uttar pradesh");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("preliminary");

  const filteredStates = Object.keys(syllabusData).filter((state) =>
    state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeTabData = tabData.find((tab) => tab.key === activeTab);

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Top Banner Section */}
      <div className="relative w-full aspect-[1344/440] overflow-hidden rounded-xl mb-1">
        <img
          src="/syllabus/syllabus.png"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-12">
          <div className="max-w-xl">
            <h1 className="text-5xl pb-6 font-extrabold bg-gradient-to-r from-[#ff6600] to-[#ffcc00] bg-clip-text text-transparent">
              Navigating Success
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-md">
              "Your Ultimate Judicial Services Syllabus Guide: A Step-by-Step
              Roadmap for Law Exam Preparation to Build Knowledge, Sharpen
              Strategies, and Achieve Judicial Exam Success with Confidence"
            </p>
          </div>
        </div>
      </div>

      {/* States and Search Section */}
      <div className="w-full flex justify-center">
        <div className="mt-3 mb-3 flex flex-wrap justify-center items-center gap-4">
          {filteredStates.map((state) => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              className={`bg-transparent text-white hover:text-orange-400 text-sm md:text-base ${
                selectedState === state ? "font-bold underline" : ""
              }`}
            >
              {state}
            </button>
          ))}

          <span className="text-white text-lg font-semibold">➤</span>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 bg-black text-white border border-white rounded placeholder-gradient"
            />
          </div>

          <style jsx>{`
            .placeholder-gradient::placeholder {
              background: linear-gradient(to right, #f97316, #fdba74);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: transparent;
            }
          `}</style>
        </div>
      </div>

      {/* Syllabus Summary Section */}
      <div className="bg-yellow-800 text-white py-8 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          {syllabusData[selectedState]?.title || "Select a State"}
        </h2>
        <p className="text-sm md:text-base text-white">
          {syllabusData[selectedState]?.description ||
            "Please select a state to view its syllabus."}
        </p>
      </div>

      {/* Tab Section */}
      <div className="max-w-4xl mx-auto mt-10 px-4 text-white">
        <div className="flex space-x-4">
          <div className="relative rounded-t-md p-[2px] bg-gradient-to-r from-yellow-400 to-orange-500">
            <div className="bg-black rounded-t-md">
              <button
                onClick={() => setActiveTab("preliminary")}
                className="text-xs md:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2"
              >
                <span className="text-gray-500"> - Preliminary</span> <br />
                <span className="text-base">General knowledge</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => setActiveTab("mains")}
            className="px-4 py-2 text-xs md:text-sm rounded-t-md text-gray-500 hover:text-yellow-400 bg-neutral-900"
          >
            Mains <br /> <span className="text-base">Law</span>
          </button>

          <button
            onClick={() => setActiveTab("interview")}
            className="px-4 py-2 text-xs md:text-sm rounded-t-md text-gray-500 hover:text-yellow-400 bg-neutral-900"
          >
            Interview
          </button>
        </div>

        <div className="bg-black border border-neutral-800 rounded-b-md p-6">
          <p className="text-lg font-semibold mb-4">
            Duration: {activeTabData.duration}
          </p>

          <div className="bg-neutral-900 rounded-md p-4 text-sm">
            <div className="mb-3 max-w-fit inline-block h-5 px-2 rounded bg-black">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold text-sm">
                Maximum marks: {activeTabData.marks}
              </span>
            </div>

            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {activeTabData.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
