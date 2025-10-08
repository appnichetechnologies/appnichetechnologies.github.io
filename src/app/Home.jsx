"use client";
import React from "react";

import { ArrowRight, Globe, Rocket } from "lucide-react";
import { animateBGData } from "./constant";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">

      {/* Animated Background Elements */}
      {animateBGData.map((item, index) => (
        <div key={index} className={`${item.style} `}>
          <item.icon className={item.iconStyle} />
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto flex justify-center items-center gap-5 flex-col px-5 relative z-20">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium backdrop-blur-glass border border-blue-500/20 text-blue-300">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Transforming Digital Experiences
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl xl:text-8xl text-center font-bold text-balance tracking-wide">
          Boost Your Online Presence With <br />
          <span className="relative inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-600 ">
            <span className="absolute inset-0 blur-md opacity-30 bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-600 rounded-lg z-[-1]" />
            Appniche
          </span>
        </h1>

        <p className="text-base text-slate-400 md:text-xl text-center md:mt-10 max-w-xl">
          Help you to build website company that is modern, user friendly, good
          SEO, and Clean design
        </p>

        <div className="contact mt-5 flex justify-center items-center gap-5 flex-wrap">
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center px-4 py-2 lg:px-10 lg:py-3 lg:text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-500 transform hover:scale-110"
          >
            <span className="relative flex items-center gap-3">
              <Rocket className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
              Start Your Project
              <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" />
            </span>
          </Link>

          <Link
            href="#services"
            className="group text-nowrap relative inline-flex items-center justify-center px-4 py-2 lg:px-10 lg:py-3 lg:text-xl font-bold text-purple-300 border-2 border-purple-500/50 rounded-full transition-all duration-500 transform hover:scale-110 hover:text-white hover:border-purple-400"
          >
            <span className="relative flex items-center gap-3">
              <Globe className="transition-transform duration-500 group-hover:rotate-180" />
              Explore Services
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </Link>
        </div>

        {/*  Scroll Indicator */}
        {/* <div className="lg:mt-32">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-8 h-12 border-2 border-purple-400/60 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm">
              <div className="w-1.5 h-5 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full mt-3 animate-bounce"></div>
            </div>
            <p className="text-purple-600 text-sm">Scroll to explore</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
