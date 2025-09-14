import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dloi5v8zj/**', // будь-які шляхи після цього
      },
    ],
  },
};

export default nextConfig;
