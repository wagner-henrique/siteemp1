const nextConfig = {
  images: {
    domains: ['aceternity.com', 'images.unsplash.com', 'imgur.com', 'i.imgur.com'], // Adicione todos os domínios usados
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      
    ],
  },
}

module.exports = nextConfig