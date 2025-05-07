import React from 'react';

const faqs = [
  {
    q: 'What is BalanceBeam?',
    a: 'BalanceBeam is an AI-powered bookkeeping agent that automatically handles financial tasks for freelancers and small businesses.'
  },
  {
    q: 'How does it automate bookkeeping?',
    a: 'BalanceBeam connects to your bank accounts and accounting tools, then uses AI to categorize transactions, reconcile accounts, generate reports, manage payroll, and more.'
  },
  {
    q: 'Is my financial data secure?',
    a: 'Absolutely. We use bank-level encryption and adhere to industry best practices to keep your data safe.'
  },
  {
    q: 'How much does it cost?',
    a: 'We offer simple, transparent pricing. Start for free, then upgrade as your business grows.'
  },
];

export default function FAQSection() {
  return (
    <section className="w-full px-6 py-24 bg-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl text-dark">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-6">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="text-lg font-medium cursor-pointer text-primary">{q}</summary>
              <p className="mt-2 text-gray-700">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
} 