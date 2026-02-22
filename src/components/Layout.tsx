import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}
