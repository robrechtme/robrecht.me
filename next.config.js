module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
    loader: 'imgix',
    path: 'https://www.datocms-assets.com/',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
