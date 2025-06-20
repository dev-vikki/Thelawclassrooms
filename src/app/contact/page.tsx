import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-6">
          <img
            src="/images/thinkschool-team.png" // Use your image path here
            alt="Team"
            className="rounded-xl w-full object-cover"
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Reach out to us</h2>

            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 mt-1" />
              <div>
                <p>
                  Support:{" "}
                  <a
                    className="text-blue-400 underline"
                    href="mailto:Support@thethinkschool.com"
                  >
                    Support@thethinkschool.com
                  </a>
                </p>
                <p>
                  For course-related inquiries:{" "}
                  <span className="text-gray-300">+91 7499807089</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 mt-1" />
              <p>
                Address: <br />
                Flat 1404, Tower No 14 Belmondo, Near MCA Stadium, <br />
                Gahunje Pune MH 410506 IN
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[#1e1e1e] rounded-xl p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-gray-300">
            Please fill out the form below to reach us anytime
          </p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-4 py-2 rounded-full bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 rounded-full bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <input
              type="text"
              placeholder="Mobile"
              className="w-full px-4 py-2 rounded-full bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-2 rounded-2xl bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 rounded-full bg-red-500 hover:bg-red-600 transition font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
