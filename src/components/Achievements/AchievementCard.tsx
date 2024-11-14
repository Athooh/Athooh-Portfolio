import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Achievement {
  icon: LucideIcon;
  title: string;
  organization: string;
  description: string;
  date: string;
  color: string;
}

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  const Icon = achievement.icon;

  return (
    <div
      className="group relative bg-gray-800/50 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-500"
      style={{
        animation: 'fadeInUp 0.5s ease-out forwards',
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
      
      <div className="relative z-10">
        <div className="mb-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} p-2.5 transform group-hover:scale-110 transition-transform duration-500`}>
            <Icon className="w-full h-full text-white" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold group-hover:text-white transition-colors duration-300">
            {achievement.title}
          </h3>
          <p className="text-sm text-purple-400">
            {achievement.organization} • {achievement.date}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            {achievement.description}
          </p>
        </div>

        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-transparent via-transparent to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default AchievementCard;