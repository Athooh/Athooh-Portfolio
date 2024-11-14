import React, { useState } from 'react';
import SkillCategory from './SkillCategory';
import CategorySelector from './CategorySelector';
import { skillsData } from './skillsData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="skills" className="py-20 bg-gray-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-purple-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          
          <CategorySelector 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </div>

        <div className="relative">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skills}
              isActive={activeCategory === category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;