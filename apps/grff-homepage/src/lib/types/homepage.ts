export interface HeroData {
  badgeText: string;
  titleLine1: string;
  titleHighlight: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface StatData {
  value: string;
  label: string;
}

export interface FeaturedCoursesData {
  sectionLabel: string;
  sectionTitle: string;
  sectionTitleHighlight: string;
  sectionSubtitle: string;
  cards: FeaturedCourseCardData[];
}

export interface FeaturedCourseCardData {
  title: string;
  image: string;
  category: string;
}

export interface FeaturesData {
  sectionTitle: string;
  sectionTitleHighlight: string;
  sectionSubtitle: string;
  cards: FeatureCardData[];
}

export interface FeatureCardData {
  title: string;
  description: string;
  iconName: 'BookOpen' | 'Brain' | 'BarChart3' | 'Newspaper';
}

export interface CTAData {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface HomepageData {
  hero: HeroData;
  stats: StatData[];
  featuredCourses: FeaturedCoursesData;
  features: FeaturesData;
  cta: CTAData;
}
