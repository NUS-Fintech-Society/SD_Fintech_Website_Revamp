import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  // Permanent (308) redirects: add one here whenever a page moves or is removed, so old links and bookmarks still land.
  redirects: async () => [
    { source: '/departments/external', destination: '/departments/external-relations', permanent: true },
    { source: '/departments/internal', destination: '/departments/internal-affairs', permanent: true },
    { source: '/departments/software', destination: '/departments', permanent: true },
  ],
};

export default nextConfig;
