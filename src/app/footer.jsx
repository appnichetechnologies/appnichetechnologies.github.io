"use client";
import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 px-5  border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center space-y-4 flex justify-center md:justify-between items-center flex-wrap">
        <h4 className="text-sm sm:text-base leading-relaxed tracking-wide">
          <span>© {new Date().getFullYear()} All rights reserved by </span>
          <Link
            href="https://www.instagram.com/appnichetechnology?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-400  transition-colors"
          >
            Appniche Technology
          </Link>
        </h4>
        <div className="flex justify-center items-center space-x-4">
          <Link
            href="https://wa.me/+919987299482"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:text-green-400  transition-colors"
          >
            <MessageCircle />
          </Link>
          <Link
            href="https://www.instagram.com/appnichetechnology?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 hover:text-pink-400  transition-colors"
          >
            <Instagram />
          </Link>
          <Link
            href=""
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-garu-400  transition-colors"
          >
            <Github />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-400  transition-colors"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
