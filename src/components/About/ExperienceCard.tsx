import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ExperienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const ExperienceCard = ({ icon: Icon, title, description, gradient }: ExperienceCardProps) => {
  return (
    <div className="experience-card group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-105">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
          <Icon className={`w-8 h-8 bg-gradient-to-br ${gradient} bg-clip-text text-transparent animate-[float_3s_ease-in-out_infinite]`} />
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-500">{title}</h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-500">{description}</p>
      </div>

      <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br from-transparent via-transparent to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ExperienceCard;