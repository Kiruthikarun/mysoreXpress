"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Music, Disc, Phone } from "lucide-react";
import "@fontsource/montserrat"; // Defaults to weight 400.

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Music", href: "/music" },
    { name: "Videos", href: "/videos" },
    { name: "Gallery", href: "/gallery" }
  ];

  return (
    <>
      <header className=" w-full z-50 fixed">
        {/* Main Header */}
        <div
          className={`w-full transition-all duration-300 bg-black/90 backdrop-blur-sm`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <div className="relative w-32 h-20 md:w-48 md:h-24 flex items-center justify-center">
                  <a href="/">
                    <img
                      src="/mx_logo.png"
                      alt="mysoreXPress logo"
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </a>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-200 hover:text-[#ff4a4a] font-[Montserrat] text-lg
                    transition-colors relative group"
                  >
                    {link.name}
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4a4a] 
                    transition-all group-hover:w-full"
                    ></span>
                  </a>
                ))}
                <a href="/contact">
                  <button
                    className="bg-[#ff4a4a] hover:bg-[#ff6b6b] text-white font-medium
                  px-4 py-2 rounded-full font-origin text-sm font-bold drop-shadow-md
                  transition-all hover:scale-105 flex items-center space-x-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contact Us</span>
                  </button>
                </a>
              </nav>

              {/* Mobile Menu Button - Positioned OUTSIDE of the mobile menu */}
              <button
                className="md:hidden text-[#ff4a4a] hover:text-[#ff6b6b] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                style={{ position: isMobileMenuOpen ? "relative" : "static", zIndex: 60 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ zIndex: 40 }}
        />

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-y-0 right-0 w-full md:hidden transition-transform duration-300 ease-in-out transform
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ zIndex: 45 }}
        >
          <div className="h-full bg-black/95 backdrop-blur-lg flex flex-col">
            {/* Close button positioned at the top right inside the mobile menu */}
            <div className="flex justify-end p-4">
              <button
                className="text-[#ff4a4a] hover:text-[#ff6b6b] transition-colors md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-[#ff4a4a] font-[Montserrat] text-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="/contact">
                <button
                  className="bg-[#ff4a4a] hover:bg-[#ff6b6b] text-white font-medium font-origin
                px-6 py-3 rounded-full font-origin font-bold drop-shadow-md
                transition-all hover:scale-105 flex items-center space-x-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
                </button>
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;