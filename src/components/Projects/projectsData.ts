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
    id: 'ai-image-generator',
    title: 'Real Estate Listings App',
    description: 'A Platform to buy, sell and connect with contractors for a building project.',
    longDescription: 'Access a vast marketplace where you can buy and sell construction materials, tools, and equipment. Compare prices, read reviews, and choose the best suppliers.',
    image: 'images/builders.png',
    tags: ['Next.js', 'AI/ML', 'Canvas API', 'WebGL'],
    features: [
      'Comprehensive Marketplace',
      'Contractor Connection',
      'Project Management Tools',
      'Verified Professionals and Suppliers',
      'Cost Estimation',
      'Secure Transactions'
    ],
    github: '#https://github.com',
    demo: '#https://demo.com'
  },
  {
    id: 'smart-health',
    title: 'AfyaChain Solution',
    description: 'A blockchain driven health records management and decentralization.',
    longDescription: 'A sophisticated health records system that uses blockchain technlogy to secure data and ensure integrity while accessing the data from across the globe. Features real-time updates and personalized recommendations.',
    image: 'images/afyachain.png',
    tags: ['React Native', 'TensorFlow.js', 'GraphQL', 'Node.js'],
    features: [
      'Real-time health metrics monitoring',
      'Real-time data updates and accessibility',
      'AI-powered health predictions',
      'Personalized wellness recommendations',
      'Integration with popular HMIS systems'
    ],
    github: '#',
    demo: 'https://afyachain.co.ke'
  },
  {
    id: 'crypto-tracker',
    title: 'Groupie Tracker',
    description: 'The ultimate destination for music lovers and part-time adventurers.',
    longDescription: 'A dynamic platform designed to bring fans closer to the music and artists they love. Discover detailed artist biographies, explore their complete concert itineraries, and stay updated on the latest events.',
    image: 'images/groupieTracker.png',
    tags: ['Go', 'Html', 'Css', 'Javascript'],
    features: [
      'Artist Profiles',
      'Maps Integration',
      'Concert Itineraries',
      'Chat with Fellow Fans',
      'Personalized Notifications',
      'Secure Ticketing Links'
    ],
    github: '#https://github.com',
    demo: '#https://demo.com'
  }
];