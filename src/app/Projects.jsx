"use client";
import React from "react";
import Image from "next/image";
import { projectsData } from "./constant";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 to-[#0c0c1d]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div>
            <span className="text-blue-500 text-lg font-medium tracking-wider uppercase">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <div className="flex justify-center gap-2 mb-8">
              <span className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              <span className="w-4 h-1 bg-blue-500/50 rounded-full"></span>
              <span className="w-2 h-1 bg-purple-500/50 rounded-full"></span>
            </div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that showcase our
              expertise in creating innovative digital solutions.
            </p>
          </div>
        </div>

        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className=" relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="overflow-hidden rounded-xl">
                  <div className="relative  hover:scale-105  hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={project.imgSrc}
                      alt={project.title}
                      width={640}
                      height={384}
                      loading="lazy"
                      className="w-full h-[300px] object-cover transform  transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  <div className="group flex items-center gap-4">
                    <button className="group hover:scale-105 flex gap-3 items-center mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                      <Link href={project.site}>Live Demo</Link>
                      <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
