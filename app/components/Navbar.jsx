'use client';

import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "AI Agents",
    "Agentic Network",
    "Template",
    "Changelog",
    "Blog",
    "Pricing",
  ];

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="flex justify-between items-center bg-black/60 backdrop-blur-md border border-cyan-900 rounded-2xl px-6 py-2 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-3 border-2 border-cyan-300 p-1 rounded-md">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-400/80 border-2 border-cyan-300 shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#06b6d4" />
            </svg>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-gray-200 text-xs font-normal">
          {menuItems.map((item) => (
            <li
              key={item}
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="hidden md:flex items-center justify-center">
          <Button />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-cyan-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-black/60 backdrop-blur-md border border-cyan-900 rounded-xl shadow-lg p-4 space-y-3 text-center text-gray-200 text-sm font-light">
          {menuItems.map((item) => (
            <div
              key={item}
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              {item}
            </div>
          ))}
          <div className="pt-2">
            <Button />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
