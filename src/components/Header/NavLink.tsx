import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  icon: LucideIcon;
  label: string;
}

const NavLink = ({ icon: Icon, label }: NavLinkProps) => {
  return (
    <a
      href={`#${label.toLowerCase()}`}
      className="nav-item group flex flex-col items-center text-gray-300 hover:text-purple-500 transition-colors duration-300"
    >
      <Icon className="nav-icon w-5 h-5 mb-1" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
};

export default NavLink;