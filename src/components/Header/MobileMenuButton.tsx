import React from 'react';

interface MobileMenuButtonProps {
  onClick: () => void;
}

const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="md:hidden text-gray-300 hover:text-purple-500 transition-colors duration-300 p-2"
      aria-label="Toggle mobile menu"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
};

export default MobileMenuButton;