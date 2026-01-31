
import React from 'react';

interface FloatingCTAsProps {
  content: {
    whatsapp: string;
    email: string;
  };
}

const FloatingCTAs: React.FC<FloatingCTAsProps> = ({ content }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform"
      >
        <span className="text-sm font-bold hidden md:inline">{content.whatsapp}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.484 2.247 2.247 3.484 5.232 3.484 8.404 0 6.556-5.332 11.888-11.888 11.888-2.01 0-3.986-.511-5.741-1.483l-6.246 1.704zm6.052-4.13c1.554.919 3.09 1.404 4.88 1.404 5.453 0 9.891-4.438 9.891-9.891 0-5.454-4.438-9.891-9.891-9.891-5.453 0-9.891 4.437-9.891 9.891 0 2.012.616 3.903 1.782 5.474l-1.077 3.929 4.019-1.096z" />
        </svg>
      </a>

      {/* Email Button */}
      <a 
        href="mailto:contact@buyrealphoto.com" 
        className="flex items-center gap-3 gold-gradient text-black px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform"
      >
        <span className="text-sm font-bold hidden md:inline">{content.email}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingCTAs;
