'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Oswald } from 'next/font/google';


const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] });

const Hero: React.FC = () => {
  return (
    <div className="bg-black text-white" >
      {/* Hero Banner */}
      <div className="relative w-full aspect-[1344/440] overflow-hidden rounded-xl mb-1">
        <img
          src="/hm71.png"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-12">
          <div className="max-w-xl">
          <h1 className={`${oswald.className} text-5xl sm:text-7xl md:text-8xl font-extrabold leading-tight text-white whitespace-nowrap`}>
  Build a memory for
</h1>
<h2 className={`${oswald.className} text-4xl sm:text-8xl font-extrabold leading-tight mt-2`}>
  <span className="bg-gradient-to-r from-[#ff6600] to-[#ffcc00] bg-clip-text text-transparent">
    Law that lasts
  </span>
</h2>
            <p className="mt-4 text-gray-500 text-sm sm:text-lg leading-relaxed">
              And conquer the exam with spaced repetition, targeted <br />
              tests, and strategies that stick for lifelong success
            </p>
            <div className="inline-block mt-8 rounded-full p-[1px] bg-gradient-to-r from-[#ff6600] via-[#ffcc00] to-[#ff0000]">
              <Link href="/login" passHref>
              <button className="px-8 py-3 rounded-full bg-black text-white text-sm sm:text-base hover:bg-opacity-80 transition-all">
                Start learning
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Affiliations Scroll Section */}
<div className="bg-black py-6 overflow-hidden relative">
  <h2 className="text-white text-center text-lg font-medium mb-6">Students from</h2>

  <div className="overflow-hidden">
    <div className="flex animate-scroll gap-16 px-6">
      {[
        '/logos/rizvilogo.png',
        '/logos/amulogo.png',
        '/logos/bbdlogo.png',
        '/logos/DNLULOGO.png',
        '/logos/IILlogo.png',
        '/logos/svlogo.png',
        '/logos/ximlogo.png',
        '/logos/amitylogo1.png',
      ]
        .concat([
          '/logos/rizvilogo.png',
          '/logos/amulogo.png',
          '/logos/bbdlogo.png',
          '/logos/DNLULOGO.png',
          '/logos/IILlogo.png',
          '/logos/svlogo.png',
          '/logos/ximlogo.png',
          '/logos/amitylogo1.png',
        ])
        .map((src, idx) => (
          <div key={idx} className="flex-shrink-0">
            <Image
              src={src}
              alt={`Logo ${idx}`}
              width={186}
              height={74}
              className="object-contain"
            />
          </div>
        ))}
    </div>
  </div>
</div>





      {/* Grid Section */}
      {/* Grid Section */}
      <section className="py-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto relative text-center">
          <div className="grid grid-cols-3 grid-rows-3 relative">
            {/* Grid Lines */}
            <div className="absolute top-1/3 w-full h-px bg-white z-10" />
            <div className="absolute top-2/3 w-full h-px bg-white z-10" />
            <div className="absolute left-1/3 h-full w-px bg-white z-10" />
            <div className="absolute left-2/3 h-full w-px bg-white z-10" />

            {/* Grid Items */}
            {[
              { title: '5500 +', subtitle: 'Subject wise and topic wise MCQ' },
              { title: '200 +', subtitle: 'Essentials and more' },
              { title: '5000+', subtitle: 'Sections to learn' },
              {},
              { center: true },
              {},
              { title: '80+', subtitle: 'State Judiciary previous\nyear Papers' },
              { title: '1000+', subtitle: 'State Judiciary questions' },
              { title: '300+', subtitle: 'Legal concept Clarified' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center text-white z-2 px-4 py-10 ${
                  item.center
                    ? 'bg-[radial-gradient(circle,#DAA520_40%,#121212_100%)] font-bold'
                    : ''
                }`}
              >
                {item.center ? (
                  <h2 className="text-xl sm:text-2xl leading-relaxed">
                    Bundle of knowledge
                    <br />
                    that we offer
                  </h2>
                ) : item.title ? (
                  <div>
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="text-sm mt-2 whitespace-pre-wrap">{item.subtitle}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* Grid CTA */}
          <div className="mt-10 flex justify-center">
            <button className="bg-white text-black font-semibold px-6 py-3 tracking-wider uppercase hover:bg-gray-200 transition">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Curated Learning Section */}
      <section className="bg-black text-white py-12 px-4 md:px-12">
        <h2 className="text-3xl font-semibold mb-10">
          Explore Curated learning <span className="text-[#FFA500] underline underline-offset-4">Build</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Card 1 */}
          <Link href="/mcqs" className="flex-1">
            <div className="bg-zinc-900 rounded-2xl p-4 border border-white/20 cursor-pointer hover:scale-[1.01] transition">
              <div className="rounded-2xl overflow-hidden border border-white/20 relative min-h-[300px] cursor-pointer hover:scale-[1.02] transition">
              <Image
                src="/books/curated1.jpg"
                alt="Indian Contract Act"
                layout="fill"
                objectFit="cover"
                className="absolute inset-1"
              />
              </div>
              <p className="text-sm text-gray-400">+ 10 MCQ</p>
              <p className="text-lg font-medium">Subject & Topic Wise MCQ's</p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/pyq" className="flex-1">
            <div className="bg-zinc-900 rounded-2xl p-4 border border-white/20 cursor-pointer hover:scale-[1.01] transition">
              <div className="rounded-2xl overflow-hidden border border-white/20 relative min-h-[300px] cursor-pointer hover:scale-[1.02] transition">
              <Image
                src="/books/curated2new.jpg"
                alt="Indian Contract Act"
                layout="fill"
                objectFit="cover"
                className="absolute inset-1"
              />
            </div>
              <p className="text-sm text-gray-400">+ 6 PYQ</p>
              <p className="text-lg font-medium">State Judiciary PYQ's</p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/contract-act" className="flex-1">
            <div className="rounded-2xl overflow-hidden border border-white/20 relative min-h-[385px] cursor-pointer hover:scale-[1.02] transition">
              <Image
                src="/books/sub2.png"
                alt="Indian Contract Act"
                layout="fill"
                objectFit=""
                className="absolute inset-0"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Mentors Section */}
    <section className="bg-black text-white px-6 lg:px-24 py-16">
  <h2 className="text-3xl font-bold mb-12 border-l-4 border-yellow-500 pl-4">
    New Age Mentors
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {mentors.map((mentor) => (
      <div
        key={mentor.name}
        className="relative h-96 shadow-lg rounded-2xl overflow-hidden"
      >
        {/* Full Image with NO corner clipping */}
        <img
          src={mentor.img}
          alt={mentor.name}
          className="absolute inset-0 w-100px h-100px object-contain rounded-2xl"
        />

        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Text content */}
        <div className="absolute bottom-4 left-0 w-full text-center px-4">
          <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
          <p className="text-sm text-white font-medium">{mentor.title}</p>
          {/* <p className="text-sm text-gray-300 mt-1">{mentor.company}</p> */}
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Testimonials Section */}
      {/* <section className="bg-black text-white px-6 lg:px-24 py-10">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-xl font-semibold">Trusted by <span className="text-yellow-500">__</span></h2>
          <div className="flex mt-4 space-x-2">
            {[...Array(10)].map((_, i) => (
              <img
                key={i}
                src={`/avatars/avatar${i + 1}.jpeg`}
                alt={`User ${i + 1}`}
                className="w-8 h-8 rounded-full"
              />
            ))}
          </div>
        </div>
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-6 justify-start items-stretch px-4 md:px-12 snap-x snap-mandatory">
            {testimonials.map(({ quote, name, role }, idx) => (
              <div
                key={name}
                className={`snap-center shrink-0 w-[280px] md:w-[320px] rounded-none p-6 transition-all duration-300 ease-in-out
                  ${
                    idx === 2
                      ? 'bg-[#1a1a1a] text-gray-300 scale-105 shadow-5xl border-t-0 border-black-500'
                      : 'bg-[#1a1a1a] text-gray-300'
                  }
                `}
              >
                <p className="mb-4 text-sm">{quote}</p>
                <p className="font-bold uppercase text-yellow-500">{name}</p>
                <p className="text-sm text-gray-400">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="bg-black text-white text-center py-10 px-6 font-oswald">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Let’s make this official, sign up <br />
          and Access the Premium
        </h2>
        <div className="mt-4 flex justify-center space-x-2">
          {[...Array(8)].map((_, i) => (
            <img
              key={i}
              src={`/avatars/avatar${i + 1}.jpeg`}
              alt={`Member ${i + 1}`}
              className="w-8 h-8 rounded-full"
            />
          ))}
          <span className="text-sm text-gray-400 self-center">700+ members</span>
          <button className="bg-white hover:bg-yellow-600 text-[120%] text-black font-poppins font-extrabold px-6 py-2 rounded">
            Become a Learner
          </button>
        </div>
      </section> */}
    </div>
  );
};

// Sample data for mentors and testimonials
const mentors = [
  { name: 'Vibhankar Singh', title: 'Advocate, Lucknow HC', img: '/mentors/vibhankar.jpeg' },
  { name: 'Shubranshu Singh', title: 'High Court of Judicature at Allahabad, Lucknow Bench', img: '/mentors/shubranshu.jpeg' },
  { name: 'Amit Singh', title: 'Advocate, Lucknow HC', img: '/mentors/Amitsingh.jpeg' },
  { name: 'Abhishek Mishra', title: 'Advocate, Lucknow HC', img: '/mentors/abhishek.jpeg' },
  { name: 'Shourya Gandhi', title: 'Advocate, Uttar Pradesh High Court', img: '/mentors/shouryagandhi.jpeg' },
];

const testimonials = [
  // { quote: 'All the session were very informative and helpful...', name: 'Aditi Sahu', role: 'Xavier Law College' },
  // { quote: 'I am one of the lucky ones that got the chance...', name: 'Vijaya Kurveti', role: 'DNLU' },
  // { quote: 'Very informative sessions were organized...', name: 'Sudhanshu Joshi', role: 'Indore Institute of Law' },
  // { quote: 'I signed up last minute because my in-person internship...', name: 'Vaishnavi Sharma', role: 'Indore Institute of Law' },
  // { quote: 'TLC has played a huge role in polishing my skills...', name: 'Pranjal Tiwari', role: 'Indore Institute of Law' },
  // { quote: 'It was an amazing experience. We got to learn...', name: 'Ayesha Ashraf Agbani', role: 'Rizvi Law College' },
];

export default Hero;
