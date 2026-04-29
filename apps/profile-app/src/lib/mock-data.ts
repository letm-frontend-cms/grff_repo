export interface Course {
  id: number;
  slug: string;
  title: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
  };
  progress: number;
}

export interface TestResult {
  id: number;
  courseId: number;
  courseTitle: string;
  score: number;
  maxScore: number;
  date: string;
  passed: boolean;
}

export interface UserProfile {
  name: string;
  username: string;
  email: string;
  bio: string;
  location: string;
  website: string;
  joinedDate: string;
  avatar: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  skills: string[];
  enrolledCourses: Course[];
  testHistory: TestResult[];
}

export const MOCK_PROFILE: UserProfile = {
  name: 'Alex Johnson',
  username: 'alexj',
  email: 'alex@grff.dev',
  bio: 'Frontend engineer passionate about microfrontend architecture, design systems, and developer experience.',
  location: 'San Francisco, CA',
  website: 'https://grff.dev',
  joinedDate: 'January 2024',
  avatar: 'AJ',
  stats: {
    posts: 24,
    followers: 512,
    following: 138,
  },
  skills: ['Svelte', 'TypeScript', 'Tailwind CSS', 'NX', 'Module Federation', 'Node.js'],
  enrolledCourses: [
    {
      id: 1,
      slug: 'react-typescript-masterclass',
      title: 'React & TypeScript Masterclass',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80',
      instructor: { name: 'Priya Sharma', avatar: 'https://i.pravatar.cc/150?u=priya' },
      progress: 68,
    },
    {
      id: 2,
      slug: 'nodejs-backend-development',
      title: 'Node.js Backend Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
      instructor: { name: 'Rahul Verma', avatar: 'https://i.pravatar.cc/150?u=rahul' },
      progress: 32,
    },
  ],
  testHistory: [
    {
      id: 1,
      courseId: 1,
      courseTitle: 'React & TypeScript Masterclass',
      score: 85,
      maxScore: 100,
      date: '2024-03-15',
      passed: true
    },
    {
      id: 2,
      courseId: 2,
      courseTitle: 'Node.js Backend Development',
      score: 92,
      maxScore: 100,
      date: '2024-04-02',
      passed: true
    },
    {
      id: 3,
      courseId: 4,
      courseTitle: 'System Design Fundamentals',
      score: 65,
      maxScore: 100,
      date: '2024-04-10',
      passed: false
    }
  ]
};
