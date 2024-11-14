import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-500 text-gray-300 hover:text-white transition-all duration-300 group"
      aria-label={label}
    >
      <Icon className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
};

export default SocialLink;