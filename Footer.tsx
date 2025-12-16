import React from 'react';
import { Instagram, Send, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
           <div className="tracking-[0.5em] text-sm border-b border-white/20 pb-2 uppercase text-white font-semibold mb-2 inline-block">
             niat marketing
           </div>
           <p className="text-gray-500 text-sm">Biznesingiz rivoji uchun ishonchli hamkor.</p>
        </div>

        {/* Socials */}
        <div className="flex items-center space-x-8">
            <a href="https://www.instagram.com/niat_group?igsh=bm9wbnM4MjI1NzJq" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all border border-neutral-800">
                    <Instagram className="w-6 h-6" />
                </div>
                <span className="text-xs text-gray-500 mt-2 uppercase font-bold">Instagram</span>
            </a>
            <a href="https://t.me/Karimov_Xusniddin" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-blue-400 group-hover:text-white transition-all border border-neutral-800">
                    <Send className="w-5 h-5 ml-1" />
                </div>
                 <span className="text-xs text-gray-500 mt-2 uppercase font-bold">Telegram</span>
            </a>
             <a href="tel:+998930908920" className="group flex flex-col items-center">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all border border-neutral-800">
                    <Phone className="w-5 h-5" />
                </div>
                 <span className="text-xs text-gray-500 mt-2 uppercase font-bold">Aloqa</span>
            </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-gray-600 text-xs">
            <p>&copy; {new Date().getFullYear()} niat marketing. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;