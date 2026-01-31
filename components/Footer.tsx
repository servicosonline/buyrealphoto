
import React from 'react';
import { Language } from '../types';

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <footer id="contact" className="bg-black border-t border-neutral-800 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-sm"></div>
            <span className="text-2xl font-serif font-bold tracking-tighter">BuyRealPhoto<span className="text-yellow-500">.com</span></span>
          </div>
          <p className="text-neutral-500 max-w-sm">
            {lang === 'pt' ? 'Liderando a revolução da imagem com inteligência artificial de ponta.' : 'Leading the image revolution with cutting-edge artificial intelligence.'}
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Links</h4>
          <ul className="space-y-3 text-neutral-400 text-sm">
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Home</a></li>
            <li><a href="#portfolio" className="hover:text-yellow-500 transition-colors">Portfolio</a></li>
            <li><a href="#comparison" className="hover:text-yellow-500 transition-colors">Compare</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Social</h4>
          <ul className="space-y-3 text-neutral-400 text-sm">
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Behance</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 uppercase tracking-widest gap-4">
        <p>&copy; {new Date().getFullYear()} BuyRealPhoto.com - All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
