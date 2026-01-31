
import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTAs from './components/FloatingCTAs';
import SchemaMarkup from './components/SchemaMarkup';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const t = translations[lang];

  useEffect(() => {
    // Update HTML lang and meta tags for SEO
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    document.title = lang === 'pt' 
      ? "BuyRealPhoto | Fotografias de Elite Geradas por IA" 
      : lang === 'en' 
        ? "BuyRealPhoto | AI-Generated Elite Photography"
        : "BuyRealPhoto | Fotografías de Élite Generadas por IA";
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-500/30">
      <SchemaMarkup lang={lang} />
      
      <Header currentLang={lang} onLangChange={setLang} />
      
      <main className="flex-grow">
        <Hero content={t.hero} />
        
        <section id="comparison" className="py-20 bg-neutral-900/30">
          <Comparison content={t.comparison} />
        </section>

        <section id="benefits" className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 gold-text">{t.benefits.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.benefits.items.map((item, idx) => (
                <article key={idx} className="p-8 border border-neutral-800 rounded-2xl hover:border-yellow-500/50 transition-colors bg-black">
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Portfolio content={t.portfolio} />

        <FAQ content={t.faq} />
      </main>

      <Footer lang={lang} />
      
      <FloatingCTAs content={t.floating} />
    </div>
  );
};

export default App;
