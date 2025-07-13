/**
 * Copyright (c) 2025 Sergio Agreda
 * 
 * This code is proprietary and confidential.
 * All rights reserved.
 * 
 * Author: Sergio Agreda <sergioagreda21@outlook.com>
 * Created: May 2025
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/team/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/menu/**', // <-- Add this for your menu images
      },
    ],
  },
}

export default nextConfig