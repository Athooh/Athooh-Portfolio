import React from 'react';
import { Code2, Home, User2, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              DevPortfolio
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { icon: Home, label: 'Home' },
              { icon: User2, label: 'About' },
              { icon: Briefcase, label: 'Projects' },
              { icon: Mail, label: 'Contact' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="nav-item group flex flex-col items-center text-gray-300 hover:text-purple-500 transition-colors duration-300"
              >
                <Icon className="nav-icon w-5 h-5 mb-1" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </nav>

          <button className="md:hidden text-gray-300 hover:text-purple-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;