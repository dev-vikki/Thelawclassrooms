import React from "react";
import { Link } from "./ui/Link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 text-center">
      <div className="container mx-auto px-4 font-poppins">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center">
          {/* For Traders */}
          <div>
            <h3 className="text-xl font-bold mb-4">For Traders</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/trading-mastermind"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Trading Mastermind
                </Link>
              </li>
              <li>
                <Link
                  href="/futures-options"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Futures & Options Blueprint
                </Link>
              </li>
              <li>
                <Link
                  href="/trading-strategies"
                  className="text-gray-400 hover:text-gold-500"
                >
                  51 Trading Strategies
                </Link>
              </li>
            </ul>
          </div>

          {/* For Investors */}
          <div>
            <h3 className="text-xl font-bold mb-4">For Investors</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/money-smart"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Money Smart in your 20s & 30s
                </Link>
              </li>
              <li>
                <Link
                  href="/stock-investing"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Stock Investing Mastermind
                </Link>
              </li>
            </ul>
          </div>

          {/* For Finance Students */}
          <div>
            <h3 className="text-xl font-bold mb-4">For Finance Students</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/financial-modeling"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Financial Modeling Handbook
                </Link>
              </li>
              <li>
                <Link
                  href="/financial-statement"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Financial Statement Analysis Handbook
                </Link>
              </li>
            </ul>
          </div>

          {/* For Entrepreneurs */}
          <div>
            <h3 className="text-xl font-bold mb-4">For Entrepreneurs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/industry-handbook"
                  className="text-gray-400 hover:text-gold-500"
                >
                  The Industry Handbook
                </Link>
              </li>
              <li>
                <Link
                  href="/fundraising"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Fundraising Decoded
                </Link>
              </li>
              <li>
                <Link
                  href="/startup-finance"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Startup Finance 360
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Secondary Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center">
          {/* For Authors */}
          <div>
            <h3 className="text-xl font-bold mb-4">For Authors</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/break-career-code"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Break the Career Code
                </Link>
              </li>
              <li>
                <Link
                  href="/banking-career"
                  className="text-gray-400 hover:text-gold-500"
                >
                  The Banking Career Playbook
                </Link>
              </li>
              <li>
                <Link
                  href="/bookpreneur"
                  className="text-gray-400 hover:text-gold-500"
                >
                  The BookPreneur
                </Link>
              </li>
              <li>
                <Link
                  href="/interview-ready"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Interview Ready
                </Link>
              </li>
            </ul>
            <Link
              href="/shop"
              className="inline-block mt-4 text-gold-500 hover:text-gold-400"
            >
              Shop Products →
            </Link>
          </div>

          {/* Business Books */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Books</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mindful-marketing"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Mindful Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/hiring-mastermind"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Hiring Mastermind
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/books-courses"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Books & Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/schools"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Schools
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
                  Partnerships & Collaborations
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/personality"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Know your personality
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-gold-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/designer"
                  className="text-gray-400 hover:text-gold-500"
                >
                  For Designer
                </Link>
              </li>
              <li>
                <Link
                  href="/writers"
                  className="text-gray-400 hover:text-gold-500"
                >
                  For Writers
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Terms & Conditions
                </Link>
              </li>
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
                  href="/support"
                  className="text-gray-400 hover:text-gold-500"
                >
                  Help & Support
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
                href="https://instagram.com"
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

            {/* Logo */}
            <div>
              <Link href="/" className="text-2xl font-serif font-bold">
                THE<span className="text-gold-500">LAW</span>CLASSROOMS
              </Link>
            </div>

            {/* Legal Links */}
            <div className="flex justify-center space-x-4">
              <Link href="/terms" className="text-gray-400 hover:text-gold-500">
                TERMS & CONDITIONS
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-gold-500"
              >
                PRIVACY POLICY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
