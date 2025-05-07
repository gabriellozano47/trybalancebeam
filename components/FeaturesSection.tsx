import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
  'Recording financial transactions automatically',
  'Preparing real-time financial reports',
  'Budgeting & forecasting with AI insights',
  'Managing accounts payable & receivable',
  'Monitoring financial records for accuracy',
  'Reconciling discrepancies instantly',
  'Running payroll without the hassle',
];

export default function FeaturesSection() {
  return (
    <section className="w-full px-6 py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-dark">
          Everything your bookkeeper does — only{' '}
          <span className="text-primary">faster & smarter</span>
        </h2>
        <p className="mt-4 text-gray-600">
          BalanceBeam handles a long list of bookkeeping tasks so you don't have to.
        </p>

        <ul className="grid gap-6 mt-14 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircleIcon className="flex-shrink-0 w-6 h-6 text-primary" />
              <span className="text-gray-800 text-left">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 