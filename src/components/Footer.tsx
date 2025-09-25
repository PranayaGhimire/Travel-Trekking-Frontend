import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* Brand & Description */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-bold text-teal-500 mb-4">
            Adventure Trails
          </h2>
          <p className="text-gray-400">
            Explore the Himalayas with us. Unforgettable trekking and travel
            experiences await!
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-teal-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutUs" className="hover:text-teal-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contactUs" className="hover:text-teal-500 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-4 text-white">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Get updates on new treks and adventures:
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-lg outline-none border border-gray-700 bg-gray-800 text-gray-200 focus:ring-2 focus:ring-teal-500"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 rounded-r-lg transition">
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-teal-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-teal-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-teal-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-teal-500 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Adventure Trails. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
