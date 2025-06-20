"use client";

import React, { useState, ReactNode } from "react";
import {
  Menu,
  X,
  BookOpen,
  GraduationCap,
  School,
  Phone,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/lib/useAuth";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  icon?: ReactNode;
  label: string;
}

const NavItem = ({ href, icon, label }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors
        ${
          isActive
            ? "text-gray-300 bg-[#1c1c1c]"
            : "text-gray-300 hover:bg-[#1c1c1c]"
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const MobileNavItem = ({ href, icon, label }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 px-2 py-1 rounded-md transition-colors
        ${
          isActive
            ? "text-gold-400 bg-navy-800"
            : "text-white hover:text-gold-400"
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLawzzleOpen, setIsLawzzleOpen] = useState(false);
  const { user } = useAuth();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLawzzle = () => setIsLawzzleOpen(!isLawzzleOpen);

  return (
    <nav className="bg-black text-white py-4 px-4 md:px-8 font-poppins">
      <div className="mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              {/* Image component from next/image is preferred for optimization */}
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={60}
                className="object-contain w-[35px] h-[35px] md:w-[80px] md:h-[60px]"
              />
              <span className="font-light">
                The <span className="text-gold-500">Law</span> Classrooms
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavItem href="/" label="Home" />
            <NavItem href="/books" label="MCQ Corner" />

            <div className="relative group">
              <button
                onClick={toggleLawzzle}
                className={`flex items-center space-x-2 px-3 py-2  rounded-md transition-colors
                ${
                  pathname.startsWith("/lawzzle")
                    ? "text-gray-300 hover:bg-[#1c1c1c]"
                    : "text-gray-300 hover:bg-[#1c1c1c]"
                }`}
              >
                <span>Lawzzle</span>
                <ChevronDown size={16} />
              </button>
              {isLawzzleOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-navy-800 rounded shadow-lg z-10">
                  <Link
                    href="/lawzzle/learnsections"
                    className={`block px-4 py-2 hover:bg-navy-700 ${
                      pathname === "/lawzzle/learnsections"
                        ? "bg-navy-700 text-[#1c1c1c]"
                        : ""
                    }`}
                  >
                    Learn Sections
                  </Link>
                  <Link
                    href="/lawzzle/learnessentials"
                    className={`block px-4 py-2 hover:bg-navy-700 ${
                      pathname === "/lawzzle/learnessentials"
                        ? "bg-[#1c1c1c] text-[#acabbe]"
                        : ""
                    }`}
                  >
                    Learn Essentials
                  </Link>
                </div>
              )}
            </div>

            <NavItem href="/schools" label="Law Notes" />
            <NavItem href="/semester" label="Semester" />
            <NavItem href="/syllabus" label="Syllabus" />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/internship"
              className="relative  px-4 py-2 rounded text-white bg-transparent transition-all"
            >
              Internship
            </Link>

            {user ? (
              <Link
                href="/dashboard"
                className="relative px-4 py-2 rounded text-white bg-green-600 hover:bg-green-700 transition-all"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="relative border-light-effect px-4 py-2 rounded text-white bg-transparent transition-all"
                style={{
                  ["--color1" as any]: "#00cfff",
                  ["--color2" as any]: "#0055ff",
                  ["--color3" as any]: "#002244",
                  ["--color4" as any]: "#00cfff",
                }}
              >
                LOGIN
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-   rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <MobileNavItem
                href="/"
                icon={<BookOpen size={12} />}
                label="Home"
              />
              <MobileNavItem
                href="/books"
                icon={<BookOpen size={12} />}
                label="MCQ Corner"
              />
              <div>
                <button
                  onClick={toggleLawzzle}
                  className="flex items-center space-x-2 text-left w-full hover:text-gray-400"
                >
                  <GraduationCap size={12} />
                  <span>Lawzzle</span>
                  <ChevronDown
                    size={14}
                    className={`${
                      isLawzzleOpen ? "rotate-120" : ""
                    } transition-transform`}
                  />
                </button>
                {isLawzzleOpen && (
                  <div className="pl-6 mt-2 flex flex-col space-y-2">
                    <MobileNavItem
                      href="/lawzzle/learnsections"
                      label="Learn Sections"
                    />
                    <MobileNavItem
                      href="/lawzzle/learnessentials"
                      label="Learn Essentials"
                    />
                  </div>
                )}
              </div>
              <MobileNavItem
                href="/schools"
                icon={<School size={12} />}
                label="Law Notes"
              />
              <MobileNavItem
                href="/semester"
                icon={<Phone size={12} />}
                label="Semester"
              />
              <MobileNavItem
                href="/syllabus"
                icon={<BookOpen size={12} />}
                label="Syllabus"
              />
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  href="/internship"
                  className="border border-white px-4 py-2 rounded text-center hover:bg-white hover:text-black transition-colors"
                >
                  Internship
                </Link>
                {user ? (
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 bg-black rounded text-center hover:bg-green-700 transition-colors"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="px-4 py-2 bg-burgundy-600 rounded text-center hover:bg-burgundy-700 transition-colors"
                  >
                    LOGIN
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
