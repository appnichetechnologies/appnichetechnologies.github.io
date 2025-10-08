import Link from "next/link";
import React from "react";

const Thankyou = () => {
  return (
    <div className="relative w-screen overflow-hidden min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-2xl mx-auto text-center px-5">
        <h1 className="text-3xl font-semibold">
          Thank you! Well get back to you soon.
        </h1>
        <p className="mt-4 text-lg">
          We appreciate you taking the time to reach out to us. We&apos;ll be in
          touch with you soon to discuss your project.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
