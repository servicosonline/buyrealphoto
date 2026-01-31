
import React from 'react';

interface PortfolioProps {
  content: {
    title: string;
    desc: string;
  };
}

const Portfolio: React.FC<PortfolioProps> = ({ content }) => {
  // Using the provided images as portfolio items
  const portfolioItems = [
    { src: 'input_file_0.png', alt: "Campanha Institucional - Realismo Político IA", label: "Branding Político" },
    { src: 'input_file_1.png', alt: "Lifestyle Casual IA - Retrato Realista", label: "Retratos Lifestyle" },
    { src: 'input_file_2.png', alt: "Campanha Nostalgia IA - Ícones Globais", label: "Celebrity AI" },
    { src: 'input_file_3.png', alt: "Gastronomia Comercial IA - Kids Chef", label: "Comercial / Food" },
    { src: 'input_file_4.png', alt: "Embaixador de Marca IA - Ronaldinho Gaúcho", label: "Brand Ambassador" },
    { src: 'input_file_5.png', alt: "Gastronomia de Luxo IA - Tavola D'Oro", label: "Gourmet Photography" },
    { src: 'input_file_6.png', alt: "Food Design IA - Culinária Japonesa", label: "Culinary Design" },
    { src: 'input_file_7.png', alt: "Publicidade de Alimentos IA - Fast Food Premium", label: "Advertising" }
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 gold-text">{content.title}</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {content.desc}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((item, i) => (
            <div 
              key={i} 
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-900 border border-neutral-800 transition-all duration-500 hover:border-yellow-500/30"
            >
              <img 
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
              
              {/* Content on Hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-block px-2 py-1 mb-3 text-[10px] uppercase tracking-widest font-bold bg-yellow-500 text-black">
                    {item.label}
                  </span>
                  <h4 className="text-white text-lg font-serif mb-1 leading-tight">
                    {item.alt.split(' - ')[0]}
                  </h4>
                  <div className="w-10 h-[1px] bg-yellow-500 mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-neutral-500 text-sm font-light italic mb-8">
            * Todas as imagens acima foram geradas 100% por nossa IA proprietária, sem intervenção de câmeras físicas.
          </p>
          <button className="border border-yellow-500/50 text-yellow-500 px-8 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all font-bold uppercase tracking-widest text-xs">
            Solicitar Briefing Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
