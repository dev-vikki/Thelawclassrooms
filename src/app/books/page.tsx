'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';

const booksData = [
  {
    title: 'Punjab Judiciary',
    slug: 'punjab-judiciary',
    category: 'State Judiciary PYQ',
    papers: 4,
    image: '/books/6.png',
  },
  {
    title: 'Haryana Judiciary',
    slug: 'haryana-judiciary',
    category: 'State Judiciary PYQ',
    papers: 6,
    image: '/books/17.png',
  },
  {
    title: 'Indian Penal Code',
    slug: 'indian-penal-code',
    category: 'Subject & Topic wise MCQ',
    papers: 70,
    image: '/books/c1.png',
  },
  {
    title: 'Criminal Procedure Code',
    slug: 'criminal-procedure-code',
    category: 'Subject & Topic wise MCQ',
    papers: 70,
    image: '/books/criminal.png',
  },
  {
    title: 'CLAT UG',
    slug: 'clat-ug',
    category: 'CLAT UG',
    papers: 270,
    image: '/books/t6.png',
  },
  {
    title: 'CLAT PG',
    slug: 'clat-pg',
    category: 'CLAT PG',
    papers: 270,
    image: '/books/t5.png',
  },
  {
    title: 'UP Judiciary',
    slug: 'up-judiciary',
    category: 'State Judiciary PYQ',
    papers: 6,
    image: '/books/5.png',
  },
  {
    title: 'UK Judiciary',
    slug: 'uk-judiciary',
    category: 'State Judiciary PYQ',
    papers: 10,
    image: '/books/4.png',
  },
  {
    title: 'Indian Contract Act',
    slug: 'indian-contract-act',
    category: 'Subject & Topic wise MCQ',
    papers: 70,
    image: '/books/c3.png',
  },
  {
    title: 'Indian Evidence Act',
    slug: 'indian-evidence-act',
    category: 'Subject & Topic wise MCQ',
    papers: 70,
    image: '/books/c2.png',
  },
  {
    title: 'Transfer of property Act',
    slug: 'transfer-of-property-act',
    category: 'Subject & Topic wise MCQ',
    papers: 70,
    image: '/books/U2.png',
  },
  {
    title: 'Jurisprudence',
    slug: 'jurisprudence',
    category: 'Subject & Topic wise MCQ',
    papers: 70,
    image: '/books/1U.png',
  },
  {
    title: 'Civil Procedure Code',
    slug: 'civil-procedure-code',
    category: 'Subject & Topic wise MCQ',
    papers: 70,
    image: '/books/c6.Png',
  },
];

export default function BooksPage() {
  const [search, setSearch] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['/hm6.png'];

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="container mx-auto px-4 py-0 text-white">
      {/* Banner slideshow */}
      <div className="relative w-full aspect-[1344/440] overflow-hidden rounded-xl mb-10">
        <img
          src={slides[currentSlide]}
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

      {/* Category filters and search */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {['All', 'State Judiciary PYQ', 'CLAT UG', 'CLAT PG', 'Subject & Topic wise MCQ'].map((cat) => (
            <button
              key={cat}
              className="text-sm text-gray-300 hover:text-white px-3 py-1 rounded hover:bg-zinc-800 transition"
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-800 text-white pl-10 pr-3 py-2 rounded-md border border-gray-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Book listings */}
      <div className="mt-10 space-y-12">
        {['State Judiciary PYQ', 'Subject & Topic wise MCQ', 'CLAT UG', 'CLAT PG'].map((category) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="flex overflow-x-auto gap-6 pb-2">
              {filteredBooks
                .filter((b) => b.category === category)
                .map((book, idx) => (
                  <Link href={`/books/${book.slug}`} key={idx}>
                    <div className="min-w-[160px] flex-shrink-0 cursor-pointer">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-64 object-cover rounded-md"
                      />
                      <p className="text-xs text-gray-400 mt-1">{book.papers} Papers</p>
                      <p className="font-medium text-white truncate max-w-[150px]">{book.title}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
