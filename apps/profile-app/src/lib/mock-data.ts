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
};
