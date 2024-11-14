import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com',
    label: 'GitHub',
    color: 'hover:text-purple-400'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: 'hover:text-blue-400'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com',
    label: 'Twitter',
    color: 'hover:text-sky-400'
  },
  {
    icon: Mail,
    href: 'mailto:seth@example.com',
    label: 'Email',
    color: 'hover:text-pink-400'
  }
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-10 h-10 flex items-center justify-center rounded-lg
            bg-gray-800/50 text-gray-400 ${color}
            transform hover:scale-110 transition-all duration-300
          `}
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;