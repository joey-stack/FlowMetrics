import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CallToActionSection() {
  return (
    <div className="relative isolate py-24 sm:py-32 animate-fade-in-up overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 px-6 py-20 text-center shadow-2xl sm:px-16">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>
          
          <h2 className="relative font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to scale your agency?
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Join hundreds of agencies that have automated their reporting and improved client retention with FlowMetrics.
          </p>
          <div className="relative mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 group inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
