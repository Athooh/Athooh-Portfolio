export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 'crypto-tracker',
    title: 'CryptoTracker Pro',
    description: 'Real-time cryptocurrency tracking platform with advanced analytics and portfolio management.',
    longDescription: 'A comprehensive cryptocurrency tracking platform that provides real-time price updates, advanced technical analysis tools, and portfolio management features. Built with React and TypeScript, utilizing WebSocket connections for live data.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'WebSocket', 'TailwindCSS'],
    features: [
      'Real-time price tracking with WebSocket integration',
      'Advanced technical analysis charts',
      'Portfolio management with performance metrics',
      'Customizable price alerts and notifications'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 'ai-image-generator',
    title: 'AI Art Studio',
    description: 'AI-powered image generation platform with style transfer and artistic filters.',
    longDescription: 'An innovative AI-powered platform that allows users to generate unique artwork, apply style transfers, and create custom filters. Leverages machine learning models for real-time image processing.',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'AI/ML', 'Canvas API', 'WebGL'],
    features: [
      'Real-time AI image generation',
      'Custom style transfer algorithms',
      'Advanced filter creation tools',
      'Community gallery and sharing features'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 'smart-health',
    title: 'AfyaChain Solution',
    description: 'A blockchain driven health records management and decentralization.',
    longDescription: 'A sophisticated health records system that uses blockchain technlogy to secure data and ensure integrity while accessing the data from across the globe. Features real-time updates and personalized recommendations.',
    image: '/src/components/images/afyachain.png',
    tags: ['React Native', 'TensorFlow.js', 'GraphQL', 'Node.js'],
    features: [
      'Real-time health metrics monitoring',
      'Real-time data updates and accessibility',
      'AI-powered health predictions',
      'Personalized wellness recommendations',
      'Integration with popular HMIS systems'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];