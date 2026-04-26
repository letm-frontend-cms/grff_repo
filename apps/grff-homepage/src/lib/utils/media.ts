const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

export function strapiMediaUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}
