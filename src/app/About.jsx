"use client";
import React from "react";
import { featuresData } from "./constant";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen py-32 relative overflow-hidden  bg-gradient-to-b from-slate-950 to-[#0c0c1d]  border-b border-neutral-500/20 "
    >
      {/* Background Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-lg font-bold uppercase tracking-wider mb-3">
          Who We Are
        </h2>
        <h1 className="text-4xl text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          About Appniche Technology
        </h1>
        <div className="flex justify-center gap-2 mb-12">
          <span className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          <span className="w-4 h-1 bg-blue-500/50 rounded-full"></span>
          <span className="w-2 h-1 bg-purple-500/50 rounded-full"></span>
        </div>

        <p className="leading-relaxed max-w-2xl text-center md:text-start">
          Appniche Technology is a comprehensive web development company
          offering a wide range of services, including landing page development,
          web app development, UI/UX design, mobile app development, custom POS
          software development, and digital marketing.
        </p>

        <div className="flex flex-col lg:flex-row items-center  gap-10 mt-10">
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-white/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Commitment
              </h3>
              <div className="space-y-4">
                <p className="text-slate-300">
                  We believe in delivering high quality products and services to
                  our clients and we are always open to new ideas and feedback.
                </p>
                <p className="text-slate-300">
                  We are very proud of our transparency and honesty with our
                  clients. We believe that our clients are our partners and we
                  always try to give them the best possible experience.
                </p>
                <button className="group flex gap-3 items-center mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <Link href="#contact">Get in Touch</Link>
                  <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-lg text-slate-300">
            <div className="grid grid-cols-2 gap-6 mt-8">
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-white/30"
                >
                  <span className="text-3xl mb-2 block">{feature.icon}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
