import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="w-full px-6 py-20 bg-primary text-white text-center">
      <h3 className="text-3xl font-bold sm:text-4xl">Ready to automate your bookkeeping?</h3>
      <p className="mt-4 max-w-xl mx-auto text-lg opacity-90">
        Get started with BalanceBeam in minutes and never worry about bookkeeping again.
      </p>
      <Link
        href="https://app.balancebeam.ai" // placeholder
        className="inline-block mt-8 px-10 py-3 bg-white text-primary font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow"
      >
        Get Started for Free
      </Link>
    </section>
  );
} 