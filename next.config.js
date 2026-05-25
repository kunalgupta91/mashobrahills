/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Allow unoptimized local PNGs if needed (remove once images are properly sized)
    unoptimized: false,
  },
}

module.exports = nextConfig
