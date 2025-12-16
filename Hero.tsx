import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ThreeDAsset } from './ui/ThreeDAsset';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-black overflow-hidden pb-10">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-50 z-0"></div>

      <div className="relative z-10 flex flex-col items-center px-4 pt-8 md:pt-12 w-full max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 md:mb-12 tracking-[0.5em] text-sm md:text-base border-b border-white/20 pb-2 uppercase text-white/80 font-semibold">
          niat marketing
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] mb-8 max-w-5xl mx-auto">
          Biznesingiz <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">aynan qaysi</span> muammoni boshdan kechirayotganini
        </h1>

        {/* 3D Check Button Simulation */}
        <div className="my-8 md:my-12 perspective-1000 group cursor-pointer" onClick={scrollToForm}>
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 shadow-[0_0_60px_rgba(255,215,0,0.4)] flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 border-4 border-yellow-100">
            <CheckCircle className="w-16 h-16 md:w-24 md:h-24 text-black drop-shadow-lg" strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* Curved Bottom Section */}
      <div className="relative mt-12 w-full">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-neutral-900 z-10"></div>
        
        <div className="bg-neutral-900 rounded-t-[100%] pt-20 pb-12 px-4 shadow-[0_-20px_40px_rgba(0,0,0,0.8)] relative z-20 mx-auto max-w-[120%] -ml-[10%] w-[120%] flex flex-col items-center text-center">
           <div className="max-w-md md:max-w-2xl mx-auto text-center">
             <p className="text-white text-lg md:text-xl font-bold uppercase mb-6 tracking-wide">
               Bepul konsultatsiyaga yozilish
             </p>
             
             <button 
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-yellow-400 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:bg-yellow-300 uppercase tracking-widest"
            >
                YOZILISH
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;