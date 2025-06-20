"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";

// ✅ Static book data
const booksData = [
  {
    title: 'Punjab Judiciary',
    slug: 'punjab-judiciary',
    category: 'State Judiciary PYQ',
    count: 4,
    countLabel: 'papers',
    image: '/books/6.png',
  },
  {
    title: 'Chattisgarh Judiciary',
    slug: 'chattisgarh-judiciary',
    category: 'State Judiciary PYQ',
    count: 8,
    countLabel: 'papers',
    image: '/books/1.png',
  },
  {
    title: 'Haryana Judiciary',
    slug: 'haryana-judiciary',
    category: 'State Judiciary PYQ',
    count: 6,
    countLabel: 'papers',
    image: '/books/17.png',
  },
  {
    title: 'Indian Penal Code',
    slug: 'indian-penal-code',
    category: 'Subject & Topic wise MCQ',
    count: 70,
    countLabel: 'papers',
    image: '/books/c1.png',
  },
  {
    title: 'Criminal Procedure Code',
    slug: 'criminal-procedure-code',
    category: 'Subject & Topic wise MCQ',
    count: 70,
    countLabel: 'papers',
    image: '/books/criminal.png',
  },
  {
    title: 'Civil Procedure Code',
    slug: 'civil-procedure-code',
    category: 'Subject & Topic wise MCQ',
    count: 70,
    countLabel: 'papers',
    image: '/books/c6.Png',
  },
  {
    title: 'Indian Contract Act',
    slug: 'indian-contract-act',
    category: 'Subject & Topic wise MCQ',
    count: 70,
    countLabel: 'papers',
    image: '/books/c3.png',
  },
  {
    title: 'Indian Evidence Act',
    slug: 'indian-evidence-act',
    category: 'Subject & Topic wise MCQ',
    count: 70,
    countLabel: 'papers',
    image: '/books/c2.png',
  },
  {
    title: 'Jurisprudence',
    slug: 'jurisprudence',
    category: 'Subject & Topic wise MCQ',
    count: 70,
    countLabel: 'papers',
    image: '/books/1U.png',
  },
  {
    title: 'Transfer of Property Act',
    slug: 'transfer-of-property-act',
    category: 'Subject & Topic wise MCQ',
    count: 70,
    countLabel: 'papers',
    image: '/books/U2.png',
  },
  {
    title: 'CLAT UG',
    slug: 'clat-ug',
    category: 'CLAT UG',
    count: 270,
    countLabel: 'pages',
    image: '/books/t6.png',
  },
  {
    title: 'CLAT PG',
    slug: 'clat-pg',
    category: 'CLAT PG',
    count: 270,
    countLabel: 'pages',
    image: '/books/t5.png',
  },
];

const categories = [
  "All",
  "State Judiciary PYQ",
  "CLAT UG",
  "CLAT PG",
  "Subject & Topic wise MCQ",
];

export default function BooksPage() {
  const [searchText, setSearchText] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const banners = ["/hm6.png"];

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % banners.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + banners.length) % banners.length);

  const filteredBooks = booksData.filter((book) => {
    const matchCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchSearch = book.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="container mx-auto px-4 py-4 text-white">
      {/* === Banner === */}
      <div className="relative w-full aspect-[1344/440] overflow-hidden rounded-xl mb-10">
        <img
          src={banners[slideIndex]}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-10"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full z-10"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* === Filters === */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-sm px-3 py-1 rounded transition ${
                selectedCategory === cat
                  ? "bg-white text-black font-semibold"
                  : "text-gray-300 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            className="w-full bg-zinc-800 text-white pl-10 pr-3 py-2 rounded-md border border-gray-600 focus:outline-none"
          />
        </div>
      </div>

      {/* === Books === */}
      <div className="mt-10 space-y-12">
        {categories
          .filter((cat) =>
            selectedCategory === "All" ? true : cat === selectedCategory
          )
          .map((category) => {
            const booksInCategory = filteredBooks.filter(
              (book) => book.category === category
            );

            if (booksInCategory.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="text-xl font-semibold mb-4">{category}</h2>
                <div className="flex overflow-x-auto gap-6 pb-2">
                  {booksInCategory.map((book, idx) => (
                    <Link href={`/books/${book.slug}`} key={idx}>
                      <div className="min-w-[160px] flex-shrink-0 cursor-pointer">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-64 object-cover rounded-md"
                        />
                        {/* <p className="text-xs text-gray-400 mt-1">
                          {book.papers} Papers
                        </p> */}
                        <p className="font-medium text-white truncate max-w-[150px]">
                          {book.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
