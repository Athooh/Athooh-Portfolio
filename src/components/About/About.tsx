import React, { useEffect, useRef } from 'react';
import { Users, Brain, Code2, Rocket } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import AnimatedList from './AnimatedList';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-visible');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activities = [
    "Building scalable web applications",
    "Mentoring aspiring developers",
    "Contributing to open-source projects",
    "Organizing tech community events",
    "Exploring blockchain technologies"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 opacity-0 about-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 about-text">
            <p className="text-gray-300 leading-relaxed">
              As a passionate software engineer, I'm dedicated to pushing the boundaries
              of technology and fostering community growth. Currently, I'm making an impact
              at Zone 01 Kisumu, where I help shape the next generation of software developers
              through innovative training and mentorship.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I'm proud to serve as a Gophers community organizer, where I bring together
              developers to share knowledge and explore the possibilities of Go programming.
              Additionally, I'm contributing to AFyachain, a groundbreaking blockchain initiative
              that's transforming healthcare record management through decentralization.
            </p>

            <AnimatedList items={activities} />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <ExperienceCard 
              icon={Users}
              title="Community Leader"
              description="Gophers Community Organizer"
              gradient="from-blue-500 to-cyan-500"
            />
            <ExperienceCard 
              icon={Brain}
              title="Innovator"
              description="AFyachain Contributor"
              gradient="from-purple-500 to-pink-500"
            />
            <ExperienceCard 
              icon={Code2}
              title="Apprentice"
              description="Zone 01 Kisumu"
              gradient="from-orange-500 to-red-500"
            />
            <ExperienceCard 
              icon={Rocket}
              title="Tech Explorer"
              description="Blockchain Enthusiast"
              gradient="from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;