export interface User {
  _id: string;
  name: string;
  email: string;
  isVerified: boolean;
  mobile?: string;
  gender?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export type MinimalUser = Pick<User, "_id" | "name" | "email" | "isVerified">;

export type SessionSubscriber = (user: User | null) => void;
