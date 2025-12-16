import React from 'react';
import { PenTool, Target, TrendingUp, Coins } from 'lucide-react';
import { ThreeDAsset } from './ui/ThreeDAsset';

const Solutions: React.FC = () => {
  return (
    <section className="bg-neutral-900 py-20 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase leading-tight">
          <span className="text-yellow-400">bosqichma-bosqich</span> yechib beradi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-neutral-800 to-black p-8 rounded-3xl border border-white/10 hover:border-yellow-500/50 transition-colors group">
            <ThreeDAsset type="icon" icon={PenTool} className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-yellow-400 transition-colors">Kontent</h3>
            <p className="text-gray-400 font-medium">Professional video, foto va matnlar orqali mijoz ishonchini oshiramiz.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-neutral-800 to-black p-8 rounded-3xl border border-white/10 hover:border-yellow-500/50 transition-colors group">
            <ThreeDAsset type="icon" icon={Target} className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-yellow-400 transition-colors">Brend</h3>
            <p className="text-gray-400 font-medium">Bozorda tanilishingiz uchun kuchli brend strategiyasini ishlab chiqamiz.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-neutral-800 to-black p-8 rounded-3xl border border-white/10 hover:border-yellow-500/50 transition-colors group">
            <ThreeDAsset type="icon" icon={TrendingUp} className="w-20 h-20 mb-6" />
            <h3 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-yellow-400 transition-colors">Sotuv Tizimi</h3>
            <p className="text-gray-400 font-medium">Aniq target va voronkalar orqali sotuv hajmini oshiramiz.</p>
          </div>
        </div>

        {/* 3D Coin Stack Section */}
        <div className="flex flex-col items-center justify-center pt-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
             {/* Simulating 3D Coin Stack with stacked divs if no image, but using placeholder image for request */}
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-full h-full animate-float">
                    <ThreeDAsset 
                        type="image" 
                        src="https://picsum.photos/id/1055/400/400" 
                        alt="niat marketing profit" 
                        className="w-full h-full rounded-full opacity-80 mix-blend-overlay hidden" // Placeholder logic
                    />
                    {/* CSS Constructed Coin Stack for better reliability */}
                    <div className="flex flex-col items-center space-y-[-40px]">
                        {[1, 2, 3].map((i) => (
                             <div key={i} className="w-48 h-24 md:w-64 md:h-32 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 rounded-[100%] shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-b-4 border-yellow-700 flex items-center justify-center transform rotate-x-12 z-10">
                                <span className="text-yellow-800 font-bold text-lg md:text-xl tracking-widest uppercase">niat marketing</span>
                             </div>
                        ))}
                         <div className="w-48 h-24 md:w-64 md:h-32 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 rounded-[100%] shadow-[0_20px_50px_rgba(255,215,0,0.3)] flex items-center justify-center z-20 transform -translate-y-4">
                            <Coins className="text-yellow-800 w-12 h-12" />
                         </div>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;