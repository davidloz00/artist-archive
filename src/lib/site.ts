/**
 * Build URLs that work both locally and when the Astro site is hosted
 * under a GitHub Pages project path such as /artist-archive/.
 */
export const siteBase = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:|#|data:|javascript:)/i.test(path)) return path;
  return `${siteBase}${path.replace(/^\/+/, '')}`;
}
