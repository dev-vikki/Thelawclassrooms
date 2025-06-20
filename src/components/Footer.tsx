import React from "react";
import { Link } from "./ui/Link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 text-center">
      <div className="container mx-auto px-4 font-poppins">
        {/* Main Footer Content */}

        {/* Secondary Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left">
          {/* For Authors */}
          <div>
            <h3 className="text-xl font-bold mb-4">Overviews</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/refund"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Books */}
          <div>
            <h3 className="text-xl font-bold mb-4">Intangible products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mindful-marketing"
                  className="text-gray-400 hover:text-gold-500"
                >
                  State Judiciary prelims PYQ
                </Link>
              </li>
              <li>
                <Link
                  href="/hiring-mastermind"
                  className="text-gray-400 hover:text-gold-500"
                >
                  CLAT UG PYQ
                </Link>
              </li>
              <li>
                <Link
                  href="/hiring-mastermind"
                  className="text-gray-400 hover:text-gold-500"
                >
                  CLAT PG PYQ
                </Link>
              </li>
              <li>
                <Link
                  href="/law-notes"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Law notes
                </Link>
              </li>

              <li>
                <Link
                  href="/hiring-mastermind"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Semester exams PYQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Flagship Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/books-courses"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Learn sections
                </Link>
              </li>
              <li>
                <Link
                  href="/schools"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Learn essentials
                </Link>
              </li>
              <li>
                <Link
                  href="/authors"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Authors
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Legal Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Syllabus</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold-500">
                  PCS(J)
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-gold-500"
                >
                  APO
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6">
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-gold-500"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/the_law_classroom"
                className="text-gray-400 hover:text-gold-500"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-gray-400 hover:text-gold-500"
              >
                <Youtube size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-gold-500"
              >
                <Linkedin size={24} />
              </Link>
            </div>
            <div>
              <p>&copy; 2025 The Law Classrooms. All rights reserved.</p>
            </div>
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-poppins font-bold "
            >
              <Image
                src="/logo.png" // 🔁 Replace with your actual image path
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full" // Optional: use rounded-full if logo is circular
              />
              The Law Classrooms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
