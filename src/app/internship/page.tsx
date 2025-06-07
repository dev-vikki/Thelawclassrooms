'use client';

import React from 'react';
import Image from 'next/image';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] });

const RealWorldSkills = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Banner */}
      <div className="relative w-full aspect-[1344/440] overflow-hidden rounded-xl mb-0">
        <Image
          src="/internshipbanner.png"
          alt="Training"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-12 bg-black/0">
          <div className="max-w-xl">
            <h1
  className={`text-4xl sm:text-6xl font-extrabold leading-tight text-white tracking-wide ${oswald.className}`}
>
  <span className="bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
    Real world
  </span>
  <span> legal Skills</span>
</h1>


            <p className="mt-4 text-gray-500 text-sm sm:text-lg leading-relaxed">
              Step Beyond the Classroom: The Law Classroom’s Internship & Legal Skill Training Program Delivers Real-World Drafting, Networking, and Communication Expertise to Skyrocket Your Success in Judicial Services and Law – Enroll by January 1, 2022!
            </p>
            <div className="inline-block mt-8 rounded-full p-[1px] bg-gradient-to-r from-orange-500 via-yellow-300 to-red-500">
              <button className="px-8 py-3 rounded-full bg-black text-white text-sm sm:text-base hover:bg-opacity-80 transition-all">
                Board Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-0 overflow-hidden relative">
        <h2 className="text-white text-center text-xl font-semibold mb-6"><span className="bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
    Student from
  </span></h2>
      
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

      {/* Training Methodology and What's Included */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-12 py-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Training methodology</h2>
          <ul className="text-gray-300 text-sm leading-relaxed mb-4">
            <li>Live training session</li>
            <li>Doubt solving and discussion</li>
            <li>Access to session recording</li>
            <li>1:1 feedback on assignment</li>
          </ul>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-orange-400">600 TLC</div>
            <button className="bg-gray-900 border border-gray-600 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black">
              Book my slot
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">What's included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-zinc-900 p-4 rounded-lg border border-white/10">
              <h3 className="font-bold mb-2">Pdf material of the training</h3>
              <p className="text-gray-500">
                After completion of each workshop Session we will provide the free Pdf of the presentation
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-lg border border-white/10">
              <h3 className="font-bold mb-2">Real time legal exercise</h3>
              <p className="text-gray-500">
                Immerse yourself in a realistic courtroom experience designed to bridge the gap between legal
                theory and real-world practice.
              </p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-lg border border-white/10">
              <h3 className="font-bold mb-2">Live feedback</h3>
              <p className="text-gray-500">
                During the Live training participants receive instant feedback as they perform legal tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What You Will Master */}
      <div className="px-4 sm:px-12 py-12">
        <h2 className="text-xl font-semibold mb-4">What you will master</h2>
        <div className="bg-zinc-900 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="text-white font-medium">1 Trademark filing procedure</p>
            <span className="text-white">▼</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealWorldSkills;
