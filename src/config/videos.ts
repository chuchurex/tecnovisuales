/**
 * Video assets configuration for Tecnovisuales
 *
 * CDN_BASE: Change this URL when migrating videos to Cloudflare R2 or another CDN.
 * Example: 'https://videos.tecnovisuales.com' or 'https://pub-xxxxx.r2.dev'
 *
 * For local development, videos are served from /videos/ in the public folder.
 */
export const CDN_BASE = '/videos';

/**
 * Video map: section → { desktop, mobile?, poster }
 * Paths are relative to CDN_BASE
 */
export const heroVideos = {
  home: {
    desktop: 'heroes/hero-home.mp4',
    poster: 'posters/hero-home.jpg',
  },
  services: {
    desktop: 'heroes/hero-services.mp4',
    poster: 'posters/hero-services.jpg',
  },
  about: {
    desktop: 'heroes/hero-about.mp4',
    poster: 'posters/hero-about.jpg',
  },
  corporate: {
    desktop: 'heroes/hero-corporate.mp4',
    mobile: 'mobile/hero-corporate-mobile.mp4',
    poster: 'posters/hero-corporate.jpg',
    posterMobile: 'posters/hero-corporate-mobile.jpg',
  },
  events: {
    desktop: 'heroes/hero-events.mp4',
    mobile: 'mobile/hero-events-mobile.mp4',
    poster: 'posters/hero-events.jpg',
    posterMobile: 'posters/hero-events-mobile.jpg',
  },
  social: {
    desktop: 'heroes/hero-social.mp4',
    mobile: 'mobile/hero-social-mobile.mp4',
    poster: 'posters/hero-social.jpg',
    posterMobile: 'posters/hero-social-mobile.jpg',
  },
  streaming: {
    desktop: 'heroes/hero-events.mp4',
    poster: 'posters/hero-events.jpg',
  },
  realestate: {
    desktop: 'heroes/hero-realestate.mp4',
    poster: 'posters/hero-realestate.jpg',
  },
  podcasts: {
    desktop: 'heroes/hero-corporate.mp4',
    poster: 'posters/hero-corporate.jpg',
  },
  portfolio: {
    desktop: 'heroes/hero-home.mp4',
    poster: 'posters/hero-home.jpg',
  },
} as const;

/** Helper to get full URL for a video asset */
export function videoUrl(path: string): string {
  return `${CDN_BASE}/${path}`;
}
