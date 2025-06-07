'use client';

import React, { useState } from 'react';
import {
  Menu,
  X,
  BookOpen,
  GraduationCap,
  School,
  Video,
  Briefcase,
  Phone,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLawzzleOpen, setIsLawzzleOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLawzzle = () => setIsLawzzleOpen(!isLawzzleOpen);

  return (
    <nav className="bg-black text-white py-4 px-4 md:px-8 font-oswald">
      <div className="mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="object-contain w-[35px] h-[35px] md:w-[80px] md:h-[60px]"
              />
              <span className="text-2xl font-light">
                The <span className="text-gold-500">Law</span> Classrooms
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItem href="/" icon={<BookOpen size={20} />} label="Home" />
            <NavItem href="/books" icon={<BookOpen size={20} />} label="MCQ Corner" />

            {/* Lawzzle Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleLawzzle}
                className="flex items-center space-x-2 hover:text-gold-400 transition-colors px-3 py-2 border rounded-md hover:bg-navy-800"
              >
                <GraduationCap size={20} />
                <span>Lawzzle</span>
                <ChevronDown size={16} />
              </button>
              {isLawzzleOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-navy-800 rounded shadow-lg z-10">
                  <Link href="/lawzzle/learnsections" className="block px-4 py-2 hover:bg-navy-700">Learn Sections</Link>
                  <Link href="/lawzzle/learnessentials" className="block px-4 py-2 hover:bg-navy-700">Learn Essentials</Link>
                </div>
              )}
            </div>

            <NavItem href="/schools" icon={<School size={20} />} label="Law Notes" />
            <NavItem href="/contact" icon={<Phone size={20} />} label="Contact Us" />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/internship"
              className="relative border-light-effect px-4 py-2 rounded text-white bg-transparent transition-all"
            >
              Internship
            </Link>
            <Link
              href="/login"
              className="relative border-light-effect px-4 py-2 rounded text-white bg-transparent transition-all"
              style={{
                '--color1': '#00cfff',
                '--color2': '#0055ff',
                '--color3': '#002244',
                '--color4': '#00cfff',
              }}
            >
              LOGIN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-navy-800 rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <MobileNavItem href="/" icon={<BookOpen size={20} />} label="Home" />
              <MobileNavItem href="/books" icon={<BookOpen size={20} />} label="MCQ Corner" />

              {/* Mobile Dropdown for Lawzzle */}
              <div>
                <button
                  onClick={toggleLawzzle}
                  className="flex items-center space-x-2 text-left w-full hover:text-gold-400"
                >
                  <GraduationCap size={20} />
                  <span>Lawzzle</span>
                  <ChevronDown
                    size={16}
                    className={`${isLawzzleOpen ? 'rotate-180' : ''} transition-transform`}
                  />
                </button>
                {isLawzzleOpen && (
                  <div className="pl-6 mt-2 flex flex-col space-y-2">
                    <MobileNavItem href="/lawzzle/learnsections" label="Learn Sections" />
                    <MobileNavItem href="/lawzzle/learnessentials" label="Learn Essentials" />
                  </div>
                )}
              </div>

              <MobileNavItem href="/schools" icon={<School size={20} />} label="Law Notes" />
              <MobileNavItem href="/contact" icon={<Phone size={20} />} label="Contact Us" />

              {/* Mobile Buttons */}
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  href="/internship"
                  className="border border-white px-4 py-2 rounded text-center hover:bg-white hover:text-black transition-colors"
                >
                  Internship
                </Link>
                <Link
                  href="/signin"
                  className="px-4 py-2 bg-burgundy-600 rounded text-center hover:bg-burgundy-700 transition-colors"
                >
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Reusable Components
const NavItem = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex items-center space-x-2 hover:text-gold-400 transition-colors px-3 py-2 rounded-md hover:bg-navy-800"
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const MobileNavItem = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex items-center space-x-2 hover:text-gold-400 transition-colors"
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default Navbar;
