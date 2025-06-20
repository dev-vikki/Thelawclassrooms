"use client";


import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type ArticleUnit = {
  heading: string;
  content: string[];
};

type Article = {
  subject: string;
  title: string;
  units: ArticleUnit[];
};

type ArticleData = Record<string, Article>;

export default function SemesterPage() {
  const [data, setData] = useState<ArticleData>({});
  const [openSubject, setOpenSubject] = useState<string | null>(null);
  const [selectedArticleKey, setSelectedArticleKey] = useState<string | null>(
    null
  );

  useEffect(() => {
    fetch("/api/articleData.json")
      .then((res) => res.json())
      .then((json: ArticleData) => {
        setData(json);
        const defaultKey = Object.keys(json)[0];
        setSelectedArticleKey(defaultKey);
      });
  }, []);

  const article = selectedArticleKey ? data[selectedArticleKey] : null;

  // ✅ FIX: create stable refs with useMemo + React.createRef
  const sectionRefs = useMemo(() => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {};
    article?.units.forEach((unit) => {
      refs[unit.heading] = React.createRef<HTMLDivElement>();
    });
    return refs;
  }, [article]);

  const handleScroll = (heading: string) => {
    sectionRefs[heading]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const subjects = Array.from(
    new Set(Object.values(data).map((a) => a.subject))
  );

  const getPostsBySubject = (subject: string) =>
    Object.entries(data).filter(([_, article]) => article.subject === subject);

  return (
    <div className="min-h-screen bg-black text-white p-6 font-poppins">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-7xl">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            University of Lucknow
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Ace your LLB exams with ease! Explore our free, online collection of
            Lucknow University previous year question papers.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/semester/semester.png"
            alt="Lucknow University Gate"
            className="rounded-md w-full max-w-sm object-cover border border-gray-600"
          />
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="space-y-6">
          {subjects.map((subject) => (
            <div key={subject}>
              <button
                onClick={() =>
                  setOpenSubject(openSubject === subject ? null : subject)
                }
                className="w-full flex justify-between items-center p-3 bg-[#1a1a1a] border border-gray-700 rounded-md font-semibold"
              >
                <span>{subject}</span>
                {openSubject === subject ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {openSubject === subject && (
                <ul className="pl-4 mt-2 text-sm space-y-2 text-gray-300">
                  {getPostsBySubject(subject).map(([key, post]) => (
                    <li key={key}>
                      <div
                        onClick={() => setSelectedArticleKey(key)}
                        className={`cursor-pointer hover:text-white ${
                          selectedArticleKey === key
                            ? "text-white font-semibold"
                            : ""
                        }`}
                      >
                        {post.title}
                      </div>

                      {selectedArticleKey === key &&
                        post.units.map((unit) => (
                          <div
                            key={unit.heading}
                            className="ml-4 pl-2 border-l border-gray-600 mt-1 cursor-pointer text-gray-400 hover:text-white"
                            onClick={() => handleScroll(unit.heading)}
                          >
                             {unit.heading}
                          </div>
                        ))}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>

        {/* Main Article Content */}
        <main className="md:col-span-3 bg-[#1a1a1a] rounded-md p-6 space-y-6 border border-gray-600">
          {article ? (
            <>
              <h2 className="text-2xl font-bold text-center">
                {article.title}
              </h2>
              {article.units.map((unit, index) => (
                <div key={index} ref={sectionRefs[unit.heading]}>
                  <h3 className="text-lg font-semibold text-yellow-400 mt-4 mb-2">
                    {unit.heading}
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {unit.content.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center text-gray-400">Loading data...</p>
          )}
        </main>
      </div>
    </div>
  );
}
