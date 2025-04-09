/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '**', // Allow any hostname
            port: '',
            pathname: '**', // Allow any pathname
          },
          {
            protocol: 'https',
            hostname: '**', // Allow any hostname
            port: '',
            pathname: '**', // Allow any pathname
          },
        ],
      },
};

export default nextConfig;
