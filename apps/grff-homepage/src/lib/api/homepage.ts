import { StrapiClient } from '@nitindhakad/strapisdk';
import { strapiMediaUrl } from '$lib/utils/media';
import type {
  HomepageData,
  HeroData,
  StatData,
  FeaturedCoursesData,
  FeaturedCourseCardData,
  FeaturesData,
  FeatureCardData,
  CTAData,
} from '$lib/types/homepage';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const client = new StrapiClient(STRAPI_URL);

function mapHero(raw: any): HeroData {
  return {
    badgeText: raw.badgeText ?? '',
    titleLine1: raw.titleLine1 ?? '',
    titleHighlight: raw.titleHighlight ?? '',
    subtitle: raw.subtitle ?? '',
    primaryButtonText: raw.primaryButtonText ?? '',
    primaryButtonLink: raw.primaryButtonLink ?? '',
    secondaryButtonText: raw.secondaryButtonText ?? '',
    secondaryButtonLink: raw.secondaryButtonLink ?? '',
  };
}

function mapStats(raw: any[]): StatData[] {
  return (raw ?? []).map((s: any) => ({
    value: s.value ?? '',
    label: s.label ?? '',
  }));
}

function mapFeaturedCourses(section: any, cards: any[]): FeaturedCoursesData {
  return {
    sectionLabel: section?.sectionLabel ?? '',
    sectionTitle: section?.sectionTitle ?? '',
    sectionTitleHighlight: section?.sectionTitleHighlight ?? '',
    sectionSubtitle: section?.sectionSubtitle ?? '',
    cards: (cards ?? []).map((c: any): FeaturedCourseCardData => ({
      title: c.title ?? '',
      image: strapiMediaUrl(c.image?.url ?? c.image ?? ''),
      category: c.category ?? '',
    })),
  };
}

function mapFeatures(section: any, cards: any[]): FeaturesData {
  return {
    sectionTitle: section?.sectionTitle ?? '',
    sectionTitleHighlight: section?.sectionTitleHighlight ?? '',
    sectionSubtitle: section?.sectionSubtitle ?? '',
    cards: (cards ?? []).map((c: any): FeatureCardData => ({
      title: c.title ?? '',
      description: c.description ?? '',
      iconName: c.iconName ?? 'BookOpen',
    })),
  };
}

function mapCTA(raw: any): CTAData {
  return {
    title: raw?.title ?? '',
    subtitle: raw?.subtitle ?? '',
    buttonText: raw?.buttonText ?? '',
    buttonLink: raw?.buttonLink ?? '',
  };
}

function mapStrapiResponse(response: any): HomepageData {
  const data = response?.data ?? response;
  return {
    hero: mapHero(data.hero),
    stats: mapStats(data.stats),
    featuredCourses: mapFeaturedCourses(data.featuredCoursesSection, data.featuredCourseCards),
    features: mapFeatures(data.featuresSection, data.featureCards),
    cta: mapCTA(data.cta),
  };
}

export async function fetchHomepage(): Promise<HomepageData> {
  const response = await client.request('/api/homepage', {
    params: {
      populate: {
        hero: true,
        stats: true,
        featuredCoursesSection: true,
        featuredCourseCards: { populate: '*' },
        featuresSection: true,
        featureCards: true,
        cta: true,
      },
    },
  });
  return mapStrapiResponse(response);
}
