"use client";
import React, { useState } from "react";
import { Instagram, Github, MessageCircle } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { contactsData } from "./constant";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/thank-you");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <div>
            <span className="text-blue-500 text-lg font-medium tracking-wider uppercase">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let&apos;s Connect With Our Team
            </h1>
            <div className="flex justify-center gap-2 mb-8">
              <span className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              <span className="w-4 h-1 bg-blue-500/50 rounded-full"></span>
              <span className="w-2 h-1 bg-purple-500/50 rounded-full"></span>
            </div>
            <p className="text-lg text-slate-400 max-w-lg mx-auto">
              Have a project in mind? Reach out to our team or drop us a message
              directly.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-1 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-8 shadow-xl max-w-lg mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">
            Inquiry or Question?
          </h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* <input type="hidden" name="form-name" value="appniche-inquiry" /> */}

            {/* Honeypot */}
            <p hidden>
              <label>
                Don&apos;t fill this out if you&apos;re human:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <div>
              <label className="block text-sm text-slate-400 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all"
              disabled={!formData.name || !formData.email || !formData.message}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
