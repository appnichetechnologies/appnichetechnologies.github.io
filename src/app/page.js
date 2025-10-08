"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Footer from "./footer";
import About from "./About";
import Service from "./Service";
import Projects from "./Projects";
import Contact from "./Contact";
import useCopyHandler from "./hooks/useCopyHandler";
const Page = () => {
  useCopyHandler();
  return (
    <div className=" text-white overflow-hidden relative">
      
      <Navbar />
      <Home />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
