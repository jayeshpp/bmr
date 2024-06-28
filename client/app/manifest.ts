import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bangalore Malayali Riders',
    short_name: 'BMR',
    description: 'Grasp life by the handlebars',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/assets/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable' as any,
      },
      {
        src: '/assets/icons/android-chrome-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/assets/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/assets/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
    ],
    screenshots: [
      {
        src: '/assets/screenshots/screenshot-desktop.png',
        sizes: '1920x1080',
        type: 'image/png',
      },
      {
        src: '/assets/screenshots/screenshot-mobile.png',
        sizes: '360x640',
        type: 'image/png',
      },
    ],
  };
}
