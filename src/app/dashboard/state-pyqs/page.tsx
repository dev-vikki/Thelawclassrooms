"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { ChartBarDefault } from "@/components/dash/stategraph";

export default function Subjectwisetest() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAndProfile = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!data?.session) {
        router.push("/login");
        return;
      }

      const currentUser = data.session.user;
      setUser(currentUser);

      // Fetch user profile
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("name")
        .eq("id", currentUser.id)
        .single();

      if (profileError) {
        console.error("Error fetching profile:", profileError.message);
        setUserName("User");
      } else {
        setUserName(profile?.name || "User");
      }
    };

    fetchUserAndProfile();
  }, [router]);

  if (!user) {
    return <div className="text-white p-6">Loading...</div>;
  }

  return (
    <div className="bg-[#12121A] min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">My Dashboard</h1>
          <p className="text-sm text-gray-400">
            Thursday, 24<sup>th</sup> April, 2025
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold">{user.email || user.phone}</p>
            <p className="text-xs text-gray-400">Last seen 38 minutes ago</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-500" />
        </div>
      </div>
      <div className="bg-[#1E1E2F] p-4 rounded-md mb-6 flex justify-between items-center border border-gray-700">
        <div>
          <p className="text-gray-400 text-sm">
            Hi <span className="font-semibold text-white">Tejas Mishra</span>,
            Let’s review and stay on track
          </p>
        </div>
        <div className="flex gap-4 text-sm">
          {["UP", "MP", "Rajasthan", "Jharkhand"].map((subject, idx) => (
            <button
              key={idx}
              className="px-3 py-1 rounded-md bg-[#2e2e3e] hover:bg-purple-700 transition"
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Total Questions Solved */}
        <div className="bg-[#1E1E2F] p-6 rounded-xl shadow-md h-fit">
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
          <div className="mb-5">
            <h1 className="text-lg font-semibold">Last paper scores</h1>
            <p className="text-gray-400">Updated after each new test</p>
          </div>

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
        <div className="bg-[#fff] p-6 rounded-xl shadow-md col-span-1">
          <p className="text-lg font-semibold text-red-400 mb-2">
            Page wise performance graph
          </p>

          <ChartBarDefault />
        </div>

        {/* tough exam */}
        <div className="bg-[#1E1E2F] p-6 rounded-xl shadow-md">
          <div className="mb-5 text-center bg-[#b32a2a] max-w-44">
            <h1 className="text-lg font-semibold">Last paper scores</h1>
            <p className="text-gray-400">Updated after each new test</p>
          </div>

          <ul className="text-sm space-y-2">
            <li className="flex justify-between border-b border-gray-700 pb-1">
              <span>Topic 1</span>
              <span className="text-red-400">180/200</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-1">
              <span>Topic 2</span>
              <span className="text-red-400">50/100</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-1">
              <span>Topic 3</span>
              <span className="text-red-400">6/10</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
