import React from 'react';
import { BarChart3, Zap, Layout, Lock, Link as LinkIcon, Palette } from 'lucide-react';

const features = [
  {
    name: 'Automated Reporting',
    description: 'Schedule and send beautiful, white-labeled reports to your clients automatically.',
    icon: <Zap className="h-6 w-6" />,
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    name: 'Real-time Analytics',
    description: 'Monitor all your campaigns in one place with data that updates by the second.',
    icon: <BarChart3 className="h-6 w-6" />,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    name: 'Custom Dashboards',
    description: 'Build tailored views for different stakeholders with drag and drop.',
    icon: <Layout className="h-6 w-6" />,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    name: 'Client Portals',
    description: 'Give your clients secure access to their own branded analytics portal.',
    icon: <Lock className="h-6 w-6" />,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    name: 'Data Integration',
    description: 'Connect with over 50+ marketing platforms in just a few clicks.',
    icon: <LinkIcon className="h-6 w-6" />,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    name: 'White-labeling',
    description: 'Make the platform your own. Add your agency logo and custom colors.',
    icon: <Palette className="h-6 w-6" />,
    className: 'md:col-span-2 md:row-span-1',
  },
];

export function FeaturesSection() {
  return (
    <div id="features" className="py-24 sm:py-32 animate-fade-in-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold leading-7 text-zinc-400 uppercase tracking-widest">
            Features
          </h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to scale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto auto-rows-[200px]">
          {features.map((feature) => (
            <div 
              key={feature.name} 
              className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:bg-white/10 ${feature.className}`}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-all duration-500 group-hover:bg-white/10"></div>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
