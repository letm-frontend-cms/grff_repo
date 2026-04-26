export interface Instructor {
  name: string;
  avatar: string;
}

export interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  level: string;
  category: string;
  duration: string;
  lessons: number;
  rating: number;
  reviewsCount: number;
  featured: boolean;
  image: string;
  instructor: Instructor;
  userStatus?: 'in-progress' | 'completed' | null;
}
