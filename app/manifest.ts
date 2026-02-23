import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rodi Sites',
    short_name: 'Rodi Sites',
    description:
      'Professionele websites als abonnement voor het MKB. Geen opstartkosten, alles inbegrepen.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF8',
    theme_color: '#4730C6',
    icons: [
      {
        src: '/rodi-sites-logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
