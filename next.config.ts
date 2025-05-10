import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    '9003-firebase-studio-1746857470764.cluster-aj77uug3sjd4iut4ev6a4jbtf2.cloudworkstations.dev',
  ],
  // Change the port the app runs on to 9003
  devServer: {
    port: 9003,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
