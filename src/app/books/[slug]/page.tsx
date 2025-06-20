"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

interface Topic {
  id: string;
  title: string;
  section: string;
  highlight: boolean;
  book_slug?: string;
}

export default function BiharJudiciaryPage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTopics = async () => {
      const { data, error } = await supabase
        .from("topics")
        .select("*")
        .eq("book_slug", "bihar-judiciary");

      if (error) {
        console.error("Error fetching topics:", error.message);
      } else {
        setTopics(data);
      }
    };

    fetchTopics();
  }, []);

  const handleTopicClick = (id: string) => {
    router.push(`/mcqs/${id}`);
  };

  return (
    <main className="min-h-screen bg-black text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-4 py-8 gap-6">
        {/* Sidebar */}
        <aside
          className="md:col-span-1 p-4 rounded-md space-y-6"
          style={{ backgroundColor: "#121212" }}
        >
          <a
            href="/"
            className="text-yellow-400 text-sm font-semibold hover:underline block"
          >
            ← Back to Home
          </a>
          <img src="/books/14.png" alt="Banner" className="rounded-md w-full" />
          <div>
            <h2 className="text-lg font-bold mb-2">What you will get</h2>
            <ul className="list-decimal list-inside text-sm space-y-1 text-gray-300">
              <li>Retest incorrect questions</li>
              <li>Instant wrong question list</li>
              <li>Progress tracking dashboard</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/coin.png" alt="Coin" className="w-20 h-22" />
            <div className="text-white text-4xl font-extrabold leading-none">
              250 <span className="text-yellow-400">TLC</span>
            </div>
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
              <h1 className="text-2xl font-bold uppercase">
                Bihar Judiciary Civil Judge Previous Year Question
              </h1>
              <p className="text-gray-400 mt-2 max-w-2xl text-sm">
                Master Indian contract act with our comprehensive topic wise
                MCQs. Experience exam like pressure with timed tests. Your
                gateway to mastering ICA with accuracy and confidence.
              </p>
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
                <p className="text-3xl font-bold">{topics.length}</p>
                <p className="text-base">Total Topics</p>
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

          {/* Topics List */}
          <div>
            <h2 className="text-lg font-bold mb-3 uppercase">Topics</h2>
            <div className="space-y-2">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => handleTopicClick(topic.id)}
                  className="flex justify-between items-center bg-zinc-900 px-4 py-3 rounded-md hover:bg-zinc-800 cursor-pointer transition"
                >
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      [{topic.section || "250 questions"}]
                    </p>
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
