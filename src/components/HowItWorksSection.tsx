import React from 'react';

const steps = [
  {
    id: '01',
    name: 'Connect Data',
    description: 'Link your ad accounts, CRM, and analytics platforms in seconds. We support over 50+ native integrations.',
  },
  {
    id: '02',
    name: 'Customize',
    description: 'Use our drag-and-drop builder to create the perfect view for your agency or your clients.',
  },
  {
    id: '03',
    name: 'Automate',
    description: 'Set up automated schedules to send beautiful, white-labeled reports directly to clients.',
  },
];

export function HowItWorksSection() {
  return (
    <div className="py-24 sm:py-32 animate-fade-in-up relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold leading-7 text-zinc-400 uppercase tracking-widest">
            Workflow
          </h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From data to insights in 3 steps
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-start p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="text-5xl font-display font-bold text-white/10 mb-6">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.name}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
