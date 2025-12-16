import React from 'react';
import { Smartphone, Megaphone, Fingerprint, Crosshair, Palette, Video, Users, PartyPopper, ArrowRight, Settings } from 'lucide-react';
import { ThreeDAsset } from './ui/ThreeDAsset';

const services = [
  { icon: Smartphone, title: "SMM", desc: "Ijtimoiy tarmoqlarda kontent yaratish, postlar boshqarish va auditoriya o‘sishi." },
  { icon: Megaphone, title: "MARKETING", desc: "To‘liq marketing strategiyasi ishlab chiqish va amalga oshirish." },
  { icon: Fingerprint, title: "BRENDING", desc: "Brend identifikatsiyasi, logo va vizual uslub yaratish." },
  { icon: Crosshair, title: "TARGETING", desc: "Instagram va Facebookda aniq targeting reklama sozlamalari." },
  { icon: Palette, title: "GRAFIK DIZAYN", desc: "Bannerlar, postlar va brending materiallari dizayni." },
  { icon: Video, title: "VIDEO PRODUCTION", desc: "Reklama videolari, reels va promolar ishlab chiqarish." },
  { icon: Users, title: "SMM KONSULTATSIYA", desc: "SMM bo‘yicha maslahat va treninglar." },
  { icon: PartyPopper, title: "MAXSUS TADBIRLAR", desc: "Korporativ tadbirlar, launch va eventlar tashkil etish." },
];

const Services: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-black py-24 px-4 relative overflow-hidden">
       {/* Background Noise/Grid */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
       {/* Subtle Yellow Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-black uppercase text-white mb-6 tracking-tight">
            Bizning <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Xizmatlarimiz</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            niat marketing agentligi quyidagi yo‘nalishlarda professional xizmatlar ko‘rsatadi:
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 p-8 rounded-3xl hover:bg-neutral-800 hover:border-yellow-500/40 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-yellow-500/10 hover:-translate-y-1">
              <div className="mb-8 self-start transform group-hover:scale-110 transition-transform duration-300">
                 <ThreeDAsset type="icon" icon={service.icon} className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-4 group-hover:text-yellow-400 transition-colors tracking-wide">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow font-medium">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section with 3D Element */}
        <div className="flex flex-col items-center justify-center relative">
             <div className="relative w-32 h-32 md:w-40 md:h-40 mb-10 perspective-1000">
                {/* 3D Gear/Toolbox Simulation */}
                 <div className="absolute inset-0 bg-yellow-500/20 blur-[50px] rounded-full"></div>
                 <div className="relative w-full h-full animate-[spin_10s_linear_infinite]">
                    <Settings className="w-full h-full text-yellow-400 drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]" strokeWidth={0.5} />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full mix-blend-overlay"></div>
                 </div>
             </div>
             
             <button 
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black transition-all duration-200 bg-yellow-400 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:bg-yellow-300 uppercase tracking-widest shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_rgba(255,215,0,0.5)] transform hover:scale-105"
            >
                Xizmatlar haqida batafsil
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
             </button>
        </div>
      </div>
    </section>
  );
};

export default Services;