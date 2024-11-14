import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import ProfileImage from './ProfileImage';
import SocialLink from './SocialLink';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-screen px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-purple-500">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Seth Odhiambo
              </h1>
              <TypewriterText />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate software engineer with a keen eye for creating elegant solutions 
              to complex problems. Specializing in building robust and scalable applications 
              that make a difference.
            </p>

            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <SocialLink href="https://github.com" icon={Github} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="https://twitter.com/OAthooh" icon={Twitter} label="Twitter" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors duration-300">
                Download CV
              </button>
              <button className="w-full sm:w-auto px-8 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500/10 rounded-full font-medium transition-colors duration-300">
                Contact Me
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <ProfileImage />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;