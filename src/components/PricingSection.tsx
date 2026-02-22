import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    priceMonthly: '$49',
    description: 'Perfect for small agencies just getting started with automated reporting.',
    features: [
      'Up to 5 clients',
      'Basic integrations (Google Ads, Meta)',
      'Standard templates',
      'Weekly automated reports',
      'Email support',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    priceMonthly: '$149',
    description: 'Everything you need to scale your agency and impress your clients.',
    features: [
      'Up to 25 clients',
      'All 50+ integrations',
      'Custom dashboard builder',
      'Daily automated reports',
      'White-labeling (Custom domain & logo)',
      'Priority support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$399',
    description: 'Advanced features and dedicated support for large-scale operations.',
    features: [
      'Unlimited clients',
      'Custom API access',
      'Advanced role-based permissions',
      'Real-time data syncing',
      'Dedicated account manager',
      'Custom onboarding',
    ],
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function PricingSection() {
  return (
    <div id="pricing" className="py-24 sm:py-32 animate-fade-in-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold leading-7 text-zinc-400 uppercase tracking-widest">
            Pricing
          </h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </p>
        </div>
        
        <div className="isolate mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'bg-white/10 ring-1 ring-white/20 shadow-2xl lg:scale-105 z-10' : 'bg-white/5 ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10 transition-all duration-300 hover:bg-white/10 flex flex-col justify-between relative overflow-hidden'
              )}
            >
              {tier.featured && (
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
              )}
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <p className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold leading-5 text-white ring-1 ring-inset ring-white/20">
                      Most popular
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="font-display text-4xl font-bold tracking-tight text-white">{tier.priceMonthly}</span>
                  <span className="text-sm font-semibold leading-6 text-zinc-400">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-zinc-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-5 w-5 flex-none text-white" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'bg-white/10 text-white hover:bg-white/20 ring-1 ring-inset ring-white/10',
                  'mt-8 block rounded-full py-3 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 transition-all duration-200'
                )}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
