import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ThreeDAssetProps {
  type: 'image' | 'icon';
  src?: string;
  icon?: LucideIcon;
  alt?: string;
  className?: string;
  color?: string;
}

export const ThreeDAsset: React.FC<ThreeDAssetProps> = ({ 
  type, 
  src, 
  icon: Icon, 
  alt = "3D Element", 
  className = "",
  color = "text-yellow-400"
}) => {
  if (type === 'image' && src) {
    return (
      <div className={`relative group ${className}`}>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-yellow-500/20 blur-[40px] rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
        <img 
          src={src} 
          alt={alt} 
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:scale-105 hover:rotate-1" 
        />
      </div>
    );
  }

  if (type === 'icon' && Icon) {
    return (
      <div className={`relative flex items-center justify-center aspect-square ${className}`}>
        {/* 3D Box Simulation */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.8)] border border-white/10 transform transition-transform duration-500 hover:-translate-y-2">
           <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl" />
        </div>
        <Icon className={`relative z-10 w-1/2 h-1/2 ${color} drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]`} strokeWidth={1.5} />
      </div>
    );
  }

  return null;
};