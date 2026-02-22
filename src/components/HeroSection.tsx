import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden animate-fade-in-up">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent blur-3xl rounded-full mix-blend-overlay"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-300 backdrop-blur-md mb-8">
          <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
          FlowMetrics 2.0 is now live
        </div>
        
        <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl max-w-5xl mx-auto leading-[1.1]">
          Analytics built for <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">creative agencies</span>
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto">
          Automate your reporting, uncover hidden insights, and prove your ROI in seconds. Stop wrestling with spreadsheets and start scaling your agency's impact.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 group">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/5 px-8 py-4 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 group backdrop-blur-md">
            <Play className="mr-2 h-4 w-4 text-zinc-400 transition-colors duration-200 group-hover:text-white" aria-hidden="true" />
            Book Demo
          </button>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-x-2">
            <CheckCircle2 className="h-5 w-5 text-zinc-600" />
            No credit card required
          </div>
          <div className="flex items-center gap-x-2">
            <CheckCircle2 className="h-5 w-5 text-zinc-600" />
            14-day free trial
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-transparent blur-2xl opacity-20 rounded-[2rem]"></div>
          <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">
            <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-white/20"></div>
                <div className="h-3 w-3 rounded-full bg-white/20"></div>
                <div className="h-3 w-3 rounded-full bg-white/20"></div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="h-8 w-40 rounded-lg bg-white/10"></div>
                <div className="h-10 w-32 rounded-full bg-white text-black flex items-center justify-center text-sm font-semibold">Generate Report</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-32 rounded-2xl border border-white/5 bg-white/5 p-6 flex flex-col justify-between">
                    <div className="h-4 w-20 rounded bg-white/10"></div>
                    <div className="h-10 w-32 rounded bg-white/20"></div>
                  </div>
                ))}
              </div>
              <div className="h-64 rounded-2xl border border-white/5 bg-white/5 p-6 flex flex-col">
                <div className="h-4 w-32 rounded bg-white/10 mb-8"></div>
                <div className="flex-1 flex items-end gap-3">
                  {[40, 70, 45, 90, 65, 85, 100, 60, 75, 50, 80, 60].map((height, i) => (
                    <div 
                      key={i} 
                      className="w-full bg-gradient-to-t from-white/5 to-white/20 rounded-t-md transition-all duration-500 hover:to-white/40" 
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}