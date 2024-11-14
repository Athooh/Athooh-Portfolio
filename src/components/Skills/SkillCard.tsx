import React from 'react';
import { Skill } from './skillsData';

interface SkillCardProps {
  skill: Skill;
  isVisible: boolean;
  index: number;
}

const SkillCard = ({ skill, isVisible, index }: SkillCardProps) => {
  return (
    <div
      className={`
        skill-card group relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl
        transition-all duration-500 transform hover:scale-105
        ${!isVisible ? 'opacity-0 translate-x-full absolute pointer-events-none' : ''}
      `}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
          <skill.icon className="w-8 h-8 text-purple-500 animate-[float_3s_ease-in-out_infinite]" />
        </div>
        
        <h3 className="text-sm font-semibold text-center mb-2 group-hover:text-purple-500 transition-colors duration-300">
          {skill.name}
        </h3>
        
        <div className="w-full bg-gray-700 rounded-full h-1.5 mb-1">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-1000"
            style={{ width: `${skill.level}%` }}
          />
        </div>
        
        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {skill.level}%
        </span>
      </div>
    </div>
  );
};

export default SkillCard;