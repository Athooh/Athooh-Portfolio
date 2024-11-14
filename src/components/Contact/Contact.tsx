import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ParticleField from './ParticleField';

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMessageSent(true);
    setTimeout(() => setIsMessageSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <ParticleField />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-purple-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ContactInfo />
          <ContactForm onSubmit={handleSubmit} isMessageSent={isMessageSent} />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default Contact;