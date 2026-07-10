export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: 'Boshlang\'ich' | 'O\'rtacha' | 'Mukammal' | 'Barchaga mos';
  outcome: string;
  rating: number;
  studentsCount: number;
  price: string;
  highlights: string[];
  skills: string[];
  syllabus: { title: string; desc: string }[];
}

export interface Expert {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  university: string;
  description: string;
  topicsTaught: string[];
  quote: string;
  imageSeed: string; // Seed or URL indicator for custom avatars
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  before: string;
  after: string;
  outcomeMetric: string;
  avatarSeed: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
