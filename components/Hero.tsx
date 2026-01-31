
import React from 'react';

interface HeroProps {
  content: {
    headline: string;
    subheadline: string;
    cta: string;
  };
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
          {content.headline}
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="gold-gradient text-black font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-xl shadow-yellow-500/10">
            {content.cta}
          </button>
          <a href="#portfolio" className="text-white border border-white/20 px-10 py-4 rounded-full text-lg hover:bg-white/10 transition-colors">
            Ver Portfólio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
