
export interface NavItem {
  id: string;
  label: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export enum SectionID {
  Hero = 'hero',
  About = 'about',
  Programs = 'programs',
  Benefits = 'benefits',
  Admissions = 'admissions'
}
