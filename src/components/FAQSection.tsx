import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to set up?",
    answer: "Most agencies are fully set up within 30 minutes. Connecting your data sources takes just a few clicks, and our pre-built templates mean you can start generating reports immediately.",
  },
  {
    question: "Can I use my own domain?",
    answer: "Yes! Our Pro and Enterprise plans include full white-labeling capabilities. You can host your client portals on a custom subdomain (e.g., analytics.youragency.com) and add your own branding.",
  },
  {
    question: "What data sources do you support?",
    answer: "We currently support over 50 native integrations including Google Analytics 4, Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, HubSpot, Salesforce, and many more. We're constantly adding new integrations based on user feedback.",
  },
  {
    question: "Is there a limit to how many reports I can generate?",
    answer: "No, there are no limits on the number of reports you can generate or dashboards you can create. Our pricing is based solely on the number of active clients you are managing.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 sm:py-32 animate-fade-in-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const faqId = `faq-${index}`;
              return (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:bg-white/10">
                  <dt>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between px-6 py-6 text-left text-white focus:outline-none"
                      aria-expanded={isOpen}
                      aria-controls={faqId}
                    >
                      <span className="text-base font-semibold">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDown
                          className={`h-5 w-5 text-zinc-400 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </dt>
                  <dd
                    id={faqId}
                    className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-base leading-7 text-zinc-400">{faq.answer}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
