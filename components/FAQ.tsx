
import React from 'react';

interface FAQProps {
  content: {
    title: string;
    items: { q: string; a: string }[];
  };
}

const FAQ: React.FC<FAQProps> = ({ content }) => {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-serif text-center mb-12 gold-text">{content.title}</h2>
      <div className="space-y-6">
        {content.items.map((item, idx) => (
          <details key={idx} className="group bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg hover:text-yellow-500 transition-colors">
              {item.q}
              <span className="text-yellow-500 transition-transform group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
