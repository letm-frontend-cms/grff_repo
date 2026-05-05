export interface Blog {
  _id: string;
  title: string;
  slug?: string;
  tag?: string;
  content: string;
  createdAt?: string;
}
