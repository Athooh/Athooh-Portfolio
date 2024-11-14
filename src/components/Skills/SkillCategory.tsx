import React from 'react';
import SkillCard from './SkillCard';
import { Skill } from './skillsData';

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  isActive: boolean;
}

const SkillCategory = ({ category, skills, isActive }: SkillCategoryProps) => {
  return (
    <div
      className={`
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4
        transition-all duration-500 w-full
        ${isActive
          ? 'opacity-100 translate-x-0 relative'
          : 'opacity-0 translate-x-full absolute pointer-events-none'
        }
      `}
    >
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.name}
          skill={skill}
          isVisible={isActive}
          index={index}
        />
      ))}
    </div>
  );
};

export default SkillCategory;