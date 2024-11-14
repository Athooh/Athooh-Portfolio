import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Athooh',
    label: 'GitHub',
    color: 'hover:text-purple-400'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/seth-athooh-8978a026a/',
    label: 'LinkedIn',
    color: 'hover:text-blue-400'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/oathooh',
    label: 'Twitter',
    color: 'hover:text-sky-400'
  },
  {
    icon: Mail,
    href: 'mailto:oathooh@gmail.com',
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