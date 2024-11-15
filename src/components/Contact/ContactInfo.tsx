import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'oathooh@gmail.com',
      link: 'mailto:oathooh@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 720 763 691',
      link: 'tel:+254720763691'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kisumu, Kenya',
      link: 'https://maps.app.goo.gl/YsPuH4tWjksNJe3Z7'
    }
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold mb-6">
        Let's create something
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {' '}amazing{' '}
        </span>
        together
      </h3>
      
      <p className="text-gray-300 leading-relaxed">
        Whether you have a project in mind or just want to chat, I'm always open to discussing new opportunities and ideas.
      </p>

      <div className="space-y-6">
        {contactDetails.map(({ icon: Icon, label, value, link }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">{label}</p>
              <p className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                {value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;