"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Sample article data (you can replace this with API data)
const articleData: Record<
  string,
  { title: string; units: { heading: string; content: string[] }[] }
> = {
  "Economics-2016": {
    title: "Economics - 2016",
    units: [
      {
        heading: "Unit-I",
        content: [
          "What do you understand by contract of indemnity? What are its essentials?",
          "State the circumstances in which surety is discharged from his liability.",
        ],
      },
      {
        heading: "Unit-II",
        content: [
          "Delivery of possession of goods is essential for valid bailment.",
          "Goods can be pledged by non-owners - explain with cases.",
        ],
      },
    ],
  },
  "Economics-2017": {
    title: "Economics - 2017",
    units: [
      {
        heading: "Unit-I",
        content: [
          "Discuss the essentials of a valid contract.",
          "Explain the doctrine of consideration.",
        ],
      },
    ],
  },
  "Polytechniq-2019": {
    title: "Polytechniq - 2019",
    units: [
      {
        heading: "Unit-I",
        content: [
          "Write a note on microcontroller.",
          "Explain applications of PLC.",
        ],
      },
    ],
  },
};

export default function SemesterPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedArticleKey, setSelectedArticleKey] = useState<string | null>(
    "Economics-2016"
  );

  const subjects = [
    {
      title: "Economics",
      topics: ["2016", "2017"],
    },
    {
      title: "Polytechniq",
      topics: ["2019"],
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTopicClick = (subject: string, year: string) => {
    const key = `${subject}-${year}`;
    setSelectedArticleKey(key);
  };

  const article = selectedArticleKey ? articleData[selectedArticleKey] : null;

  return (
    <div className="min-h-screen bg-black text-white font-poppins p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              University of Lucknow
            </h1>
            <p className="text-sm md:text-base text-gray-300">
              Ace your LLB exams with ease! Explore our free, online collection
              of Lucknow University previous year question papers.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/semester/semester.png"
              alt="Lucknow University Gate"
              className="rounded-md w-full max-w-sm object-cover"
            />
          </div>
        </div>

        {/* Main Section */}
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-auto md:col-span-1 space-y-6 px-4 md:px-0">
            {subjects.map((subject, index) => (
              <div key={subject.title} className="space-y-2">
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex justify-between items-center w-full p-3 bg-[#1a1a1a] text-white rounded-md border border-gray-600 text-base md:text-lg font-semibold"
                >
                  <span>{subject.title}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {openIndex === index && subject.topics.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 pl-4 text-sm text-gray-300">
                    {subject.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="cursor-pointer hover:underline"
                        onClick={() => handleTopicClick(subject.title, topic)}
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Article Display */}
          <div className="md:col-span-3 bg-[#1a1a1a] rounded-md p-6 space-y-6 border border-gray-600">
            {article ? (
              <>
                <h2 className="text-2xl font-semibold text-center">
                  {article.title}
                </h2>
                <div className="space-y-4 text-sm">
                  {article.units.map((unit, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-lg">{unit.heading}</h3>
                      {unit.content.map((line, j) => (
                        <p key={j} className="text-gray-300">
                          {line}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-center text-gray-400">
                Select a sub-topic to view article content.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
