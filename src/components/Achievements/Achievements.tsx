import React from 'react';
import { Trophy, Users, Brain, Award, Star, Rocket } from 'lucide-react';
import AchievementCard from './AchievementCard';

const achievements = [
  {
    icon: Trophy,
    title: 'HealthTech Hackathon Winner',
    organization: 'Afyachain',
    description: 'Led the winning team in developing an innovative blockchain-based healthcare data management solution, recognized as the Best Health Tech Solution.',
    date: '2024',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: Users,
    title: 'Kisumu Gophers Community Leader',
    organization: 'Tech Community',
    description: 'Founded and lead the Kisumu Gophers Community, organizing regular meetups, workshops, and hackathons to empower local developers in Golang.',
    date: '2024 - Present',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'Zone 01 Apprentice',
    organization: 'Zone 01 Kisumu',
    description: 'Part of the over 100 aspiring developers, helping them master full-stack development and secure positions at top tech companies.',
    date: '2024 - Present',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Open Source Contributor',
    organization: 'Various Projects',
    description: 'Active contributor to multiple open-source projects, with over 500+ contributions and several widely-used packages.',
    date: '2021 - Present',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Star,
    title: 'Tech Speaker',
    organization: 'Multiple Conferences',
    description: 'Featured speaker at regional tech conferences, sharing insights on blockchain, Golang, and modern web development.',
    date: '2022 - Present',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Rocket,
    title: 'Innovation Award',
    organization: 'Kenya Developer Awards',
    description: 'Received recognition for innovative contributions to the local tech ecosystem and community development initiatives.',
    date: '2023',
    color: 'from-indigo-500 to-violet-500'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notable <span className="text-purple-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Recognitions and milestones that showcase my commitment to excellence and community impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;