import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center w-full px-6 pt-24 pb-32 text-center bg-gradient-to-b from-white to-light">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-10"
          width="1200"
          height="1200"
          viewBox="0 0 1200 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="600" cy="600" r="600" fill="#1C7DFF" />
        </svg>
      </div>

      <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl text-dark">
        Automate <span className="text-primary">100% of your bookkeeping</span>
      </h1>
      <p className="max-w-2xl mt-6 text-lg leading-relaxed text-gray-600">
        BalanceBeam is your personal AI bookkeeper agent – recording transactions, preparing reports, managing payroll and more, so you can focus on growing your business.
      </p>
      <Link
        href="https://app.balancebeam.ai" // placeholder link
        className="inline-flex items-center gap-2 px-8 py-3 mt-10 text-lg font-medium text-white transition-transform bg-primary rounded-full shadow-lg hover:scale-105 hover:shadow-xl"
      >
        Get Started
        <ArrowRightIcon className="w-5 h-5" />
      </Link>
    </section>
  );
} 