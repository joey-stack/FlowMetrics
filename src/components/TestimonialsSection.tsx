import React from 'react';

const testimonials = [
  {
    body: "Flowmetrics completely transformed how we report to clients. What used to take our team 15 hours a week now happens automatically.",
    author: {
      name: 'Sarah Jenkins',
      role: 'Founder',
      company: 'Elevate Digital',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "The ability to white-label the entire platform makes us look like a much larger agency. It's been a huge selling point.",
    author: {
      name: 'Marcus Chen',
      role: 'Head of Analytics',
      company: 'Growth Partners',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "We tried building our own reporting solution before finding Flowmetrics. This saved us tens of thousands in development costs.",
    author: {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Scale Agency',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export function TestimonialsSection() {
  return (
    <div id="testimonials" className="py-24 sm:py-32 animate-fade-in-up relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-16">
          <h2 className="text-sm font-semibold leading-7 text-zinc-400 uppercase tracking-widest">
            Testimonials
          </h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Loved by top agencies
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="flex flex-col justify-between rounded-3xl bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <blockquote className="text-zinc-300 leading-relaxed mb-8">
                  "{testimonial.body}"
                </blockquote>
                <div className="flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-white/10 object-cover ring-1 ring-white/20"
                    src={testimonial.author.imageUrl}
                    alt={`${testimonial.author.name}'s profile picture`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author.name}</div>
                    <div className="text-sm text-zinc-400">{testimonial.author.role}, {testimonial.author.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
