
import React from 'react';
import { SectionID, Course, Benefit } from './types';
import { BookOpen, Users, Award, ShieldCheck, Zap, Globe } from 'lucide-react';

export const NAV_ITEMS = [
  { id: SectionID.Hero, label: 'Home' },
  { id: SectionID.About, label: 'About' },
  { id: SectionID.Programs, label: 'Programs' },
  { id: SectionID.Benefits, label: 'Why ITVE' },
  { id: SectionID.Admissions, label: 'Apply' },
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Computer Science & IT',
    category: 'Technology',
    duration: '2 Years',
    description: 'Master the fundamentals of software development, networking, and digital systems.',
    image: 'https://picsum.photos/id/1/600/400'
  },
  {
    id: '2',
    title: 'Electrical Engineering',
    category: 'Engineering',
    duration: '3 Years',
    description: 'Learn power systems, circuit design, and industrial electronics in state-of-the-art labs.',
    image: 'https://picsum.photos/id/2/600/400'
  },
  {
    id: '3',
    title: 'Mechanical Design',
    category: 'Engineering',
    duration: '3 Years',
    description: 'Focus on CAD, manufacturing processes, and thermal systems for modern industry.',
    image: 'https://picsum.photos/id/3/600/400'
  },
  {
    id: '4',
    title: 'Graphic Design & UI/UX',
    category: 'Design',
    duration: '1 Year',
    description: 'Unlock your creative potential with professional design tools and user experience principles.',
    image: 'https://picsum.photos/id/4/600/400'
  },
  {
    id: '5',
    title: 'Health & Nursing',
    category: 'Medical',
    duration: '2 Years',
    description: 'Comprehensive training for future healthcare professionals in clinical and practical environments.',
    image: 'https://picsum.photos/id/5/600/400'
  },
  {
    id: '6',
    title: 'Civil Technology',
    category: 'Construction',
    duration: '3 Years',
    description: 'Learn urban planning, structural engineering, and sustainable building technologies.',
    image: 'https://picsum.photos/id/6/600/400'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Expert Faculty',
    description: 'Learn from industry veterans with years of practical experience in their respective fields.',
    icon: 'Users'
  },
  {
    title: 'Modern Labs',
    description: 'Access top-tier equipment and software mirroring current industrial standards.',
    icon: 'Zap'
  },
  {
    title: 'Global Recognition',
    description: 'Our certifications are valued by top employers both locally and internationally.',
    icon: 'Globe'
  },
  {
    title: 'Safety First',
    description: 'Rigorous safety protocols and professional environment for all technical training.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Hands-on Learning',
    description: '70% practical work ensures you are job-ready from the day you graduate.',
    icon: 'Award'
  },
  {
    title: 'Rich Curriculum',
    description: 'Course content updated annually to stay ahead of rapid technological changes.',
    icon: 'BookOpen'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
};
