export interface Course {
  id: number;
  slug: string;
  title: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
  };
  status?: 'in-progress' | 'completed';
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
