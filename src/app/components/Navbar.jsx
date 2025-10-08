import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { navItems } from "../constant";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl shadow-2xl shadow-purple-500/10"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="">
        <div className="flex justify-between items-center py-4 px-4 md:px-8 xl:px-10">
          {/* Logo */}
          <h1 className="flex-shrink-0 group">
            <Link
              href="#"
              className="flex items-center space-x-2 text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-purple-300 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 transform group-hover:scale-105"
            >
              <Image
                src="/appniche-logo.png"
                alt="Appniche Logo"
                width={50}
                height={50}
                loading="lazy"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
              Appniche
            </Link>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white font-medium text-sm xl:text-base transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2"></div>
              </Link>
            ))}
          </div>
          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get Started
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
            >
              <div className="w-6 h-6 relative">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-2 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl rounded-b-lg border-t border-purple-500/20">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className={`block px-6 py-3 text-gray-300 hover:text-white rounded-md hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-indigo-600/20 font-medium transition-all duration-300 transform hover:translate-x-2 ${
                  isOpen ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </div>
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="px-6 pt-4 pb-2">
              <Link
                href="#contact"
                onClick={toggleMenu}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
