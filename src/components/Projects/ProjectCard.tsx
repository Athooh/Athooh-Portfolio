import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group relative bg-gray-800/50 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500"
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center space-x-2 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-gray-300 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      <div
        className={`
          overflow-hidden transition-all duration-500
          ${isExpanded ? 'max-h-96' : 'max-h-0'}
        `}
      >
        <div className="p-6 pt-0">
          <p className="text-gray-300 mb-4">{project.longDescription}</p>
          <h4 className="font-semibold mb-2 text-purple-400">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-900/80 text-gray-300 hover:text-purple-400 transition-colors duration-300"
      >
        <ChevronDown
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
};

export default ProjectCard;