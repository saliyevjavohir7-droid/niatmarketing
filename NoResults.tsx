import React from 'react';
import { TrendingDown } from 'lucide-react';

const NoResults: React.FC = () => {
  return (
    <section className="bg-neutral-900 py-24 px-4 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-12 uppercase leading-tight text-white max-w-4xl">
          Bu holat ko‘pchilikda bor.
        </h2>

        {/* The Black Panel */}
        <div className="relative w-full max-w-3xl bg-black rounded-3xl p-8 md:p-16 border border-neutral-800 shadow-2xl flex flex-col items-center justify-center">
             
             {/* Red Glow for negative impact */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-900/10 blur-[80px] rounded-full pointer-events-none"></div>

             <h3 className="text-5xl md:text-7xl font-black uppercase text-white mb-8 tracking-tighter">
                Natija Yo'q
             </h3>

             {/* Downward Graph Visual */}
             <div className="relative w-full h-40 md:h-64 flex items-end justify-between px-4 md:px-10">
                {/* SVG Graph Line */}
                <svg className="absolute inset-0 w-full h-full p-4 md:p-10 pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <path d="M0,20 Q100,20 150,80 T400,180" fill="none" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
                    <path d="M0,20 Q100,20 150,80 T400,180" fill="none" stroke="#EF4444" strokeWidth="20" className="opacity-10 blur-md" />
                </svg>

                {/* Arrow Head */}
                <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 transform translate-y-1/2">
                    <TrendingDown className="w-16 h-16 md:w-24 md:h-24 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                </div>
             </div>

             <p className="mt-8 text-gray-500 uppercase tracking-widest text-sm font-bold">
                Barqarorlik yo'qolishi xavfi
             </p>
        </div>
      </div>
    </section>
  );
};

export default NoResults;