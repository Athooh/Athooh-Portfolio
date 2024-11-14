import React from 'react';
import { Heart, Code2, ArrowUp } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm pt-20 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-6 h-6 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                OAthooh
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting digital experiences with passion and precision. Always learning, always creating.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              © {new Date().getFullYear()} Made with{' '}
              <Heart className="w-4 h-4 text-red-500 mx-1" /> by{' '}
              <span className="text-purple-400 ml-1">Seth Odhiambo</span>
            </p>

            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 group flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-purple-500/10 pointer-events-none" />
    </footer>
  );
};

export default Footer;