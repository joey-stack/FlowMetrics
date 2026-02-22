import React, { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <header className="w-full max-w-5xl rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300">
        <div className="px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                FlowMetrics
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-200">Features</a>
              <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-200">Pricing</a>
              <a href="#testimonials" className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-200">Testimonials</a>
              <button className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-zinc-200 active:scale-95 transition-all duration-200">
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-white/10 bg-black/50 backdrop-blur-xl rounded-b-3xl">
            <div className="space-y-1 px-4 pb-4 pt-2">
              <a href="#features" className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-400 hover:bg-white/5 hover:text-white">Features</a>
              <a href="#pricing" className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-400 hover:bg-white/5 hover:text-white">Pricing</a>
              <a href="#testimonials" className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-400 hover:bg-white/5 hover:text-white">Testimonials</a>
              <div className="mt-4 px-3">
                <button className="w-full inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200 active:scale-95 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
