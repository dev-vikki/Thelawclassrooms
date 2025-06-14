import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <SectionTitle>Contact Us</SectionTitle>

      <p className="text-gray-300 mt-4 mb-8">
        Get in touch with our team for any inquiries or support.
      </p>

      <form className="max-w-xl space-y-6">
        <div>
          <label className="block text-sm text-gray-200 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
