import React from 'react';
import { CheckCircle } from 'lucide-react';

interface AnimatedListProps {
  items: string[];
}

const AnimatedList = ({ items }: AnimatedListProps) => {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li 
          key={index}
          className="flex items-center space-x-3 opacity-0 animate-[slideIn_0.5s_ease-out_forwards]"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
          <span className="text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default AnimatedList;