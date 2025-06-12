"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { CalendarDays, Book, Layers, FileText, LogOut } from "lucide-react";

export default function DashboardPage() {
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
    <div className="flex min-h-screen bg-[#0e0e0e] text-white">
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
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
              <p className="text-sm font-semibold">
                {user.email || user.phone}
              </p>
              <p className="text-xs text-gray-400">Last seen 38 minutes ago</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-500" />
          </div>
        </div>

        {/* Greeting */}
        <div className="bg-gradient-to-r from-yellow-700 to-yellow-500 p-6 rounded-lg flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">
              Hey {userName ? userName : "Loading"}!
            </h2>
            <p className="italic text-white mt-1">
              "Leave the worries behind —<br />
              let's conquer those exams together!"
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 text-black px-4 py-1 rounded-full font-semibold mb-2">
              20 Coins
            </div>
            <button className="bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800">
              Get more
            </button>
          </div>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Calendar */}
          <div className="bg-[#1a1a1a] p-4 rounded-lg md:col-span-1">
            <h3 className="text-lg font-semibold mb-2">My Progress</h3>
            <div className="text-sm text-gray-400">JULY 2021</div>
            <div className="grid grid-cols-7 gap-1 mt-2 text-center text-xs">
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
              <span>Su</span>
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className={`h-6 w-6 rounded-full ${
                    i % 5 === 0 ? "bg-red-600" : "bg-gray-700"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "BPSC", color: "bg-orange-800" },
              { title: "HPSC", color: "bg-gray-700" },
              { title: "JPSC", color: "bg-red-800" },
            ].map(({ title, color }, i) => (
              <div key={i} className={`rounded-lg ${color} p-4 text-center`}>
                <h4 className="font-semibold text-sm mb-2">
                  {title} JUDICIARY CIVIL JUDGE
                </h4>
                <p className="text-xs">Previous year question paper</p>
              </div>
            ))}
            <div className="rounded-lg border border-gray-600 p-4 flex justify-center items-center">
              <button className="text-2xl font-bold text-gray-400">+</button>
            </div>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            router.push("/login");
          }}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </main>
    </div>
  );
}
