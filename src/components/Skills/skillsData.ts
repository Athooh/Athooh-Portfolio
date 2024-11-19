import { LucideIcon } from 'lucide-react';
import {
  FileCode2,
  Palette,
  Code2,
  Blocks,
  // FileJson,
  Layers,
  // Server,
  Database,
  GalleryVerticalEnd,
  Binary,
  Container,
  GitBranch,
  Terminal,
  // Cloud,
  Workflow
} from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
}

export const skillsData: Record<string, Skill[]> = {
  frontend: [
    { name: 'HTML5', icon: FileCode2, level: 95 },
    { name: 'CSS3', icon: Palette, level: 90 },
    { name: 'JavaScript', icon: Code2, level: 92 },
    // { name: 'TypeScript', icon: FileJson, level: 88 },
    { name: 'React', icon: Blocks, level: 90 },
    { name: 'Tailwind CSS', icon: Layers, level: 85 },
  ],
  backend: [
    { name: 'Go', icon: GalleryVerticalEnd, level: 85 },
    { name: 'Python', icon: Binary, level: 82 },
    // { name: 'Node.js', icon: Server, level: 88 },
    // { name: 'C', icon: Server, level: 88 },
    { name: 'PostgreSQL', icon: Database, level: 80 },
    { name: 'MySQL', icon: Database, level: 85 },
  ],
  tools: [
    { name: 'Docker', icon: Container, level: 85 },
    { name: 'Git', icon: GitBranch, level: 90 },
    { name: 'Linux', icon: Terminal, level: 88 },
    // { name: 'AWS', icon: Cloud, level: 80 },
    { name: 'Figma', icon: Workflow, level: 85 },
    { name: 'Canva', icon: Workflow, level: 85 },
  ],
};