import React from 'react';
import { Code2, Server, Wrench } from 'lucide-react';

interface CategorySelectorProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  { id: 'frontend', label: 'Frontend', icon: Code2 },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'tools', label: 'Tools', icon: Wrench },
];

const CategorySelector = ({ activeCategory, setActiveCategory }: CategorySelectorProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveCategory(id)}
          className={`
            group flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base
            transition-all duration-300 transform hover:scale-105 w-full sm:w-auto
            ${activeCategory === id
              ? 'bg-purple-500 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-purple-500/10 hover:text-purple-500'
            }
          `}
        >
          <Icon className={`
            w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300
            ${activeCategory === id ? 'animate-[spin_4s_linear_infinite]' : 'group-hover:rotate-12'}
          `} />
          <span className="font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;