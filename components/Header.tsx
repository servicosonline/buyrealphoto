
import React from 'react';
import { Language } from '../types';

interface HeaderProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange }) => {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800 px-4 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-sm"></div>
          <span className="text-xl font-serif font-bold tracking-tighter">BuyRealPhoto<span className="text-yellow-500">.com</span></span>
        </div>
        
        <div className="flex items-center space-x-4">
          <select 
            value={currentLang}
            onChange={(e) => onLangChange(e.target.value as Language)}
            className="bg-neutral-900 text-white border border-neutral-700 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
          >
            <option value="pt">PT-BR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
          <a href="#contact" className="hidden md:block text-xs uppercase tracking-widest font-bold hover:text-yellow-500 transition-colors">
            {currentLang === 'pt' ? 'Contato' : currentLang === 'en' ? 'Contact' : 'Contacto'}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
