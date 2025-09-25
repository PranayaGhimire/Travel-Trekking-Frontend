"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutUs" },
    { name: "Contact Us", href: "/contactUs" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-bl from-teal-500 to-teal-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-white text-2xl font-bold cursor-pointer">
          Adventure Trails
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-white">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-yellow-300 transition">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div className="hidden md:block">
          <Button className="bg-white text-teal-600 font-semibold hover:bg-gray-100 transition">
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-teal-500 text-white px-6 pb-6 transition-all duration-300">
          <ul className="flex flex-col gap-4 font-semibold">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-yellow-300 transition">
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Button className="w-full bg-white text-teal-600 font-semibold hover:bg-gray-100 transition cursor-pointer">
                <Link href="/auth/login">Login</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
