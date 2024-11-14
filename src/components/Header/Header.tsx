import React, { useState } from 'react';
import { Home, User2, Briefcase, Mail, Code, Trophy } from 'lucide-react';
import Logo from './Logo';
import NavLink from './NavLink';
import MobileMenuButton from './MobileMenuButton';

const navigationItems = [
  { icon: Home, label: 'Home' },
  { icon: User2, label: 'About' },
  { icon: Code, label: 'Skills' },
  { icon: Briefcase, label: 'Projects' },
  { icon: Trophy, label: 'Achievements' },
  { icon: Mail, label: 'Contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
          </nav>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <nav className="py-4 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-purple-500 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;