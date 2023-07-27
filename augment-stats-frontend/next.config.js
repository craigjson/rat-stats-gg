const moduleExports = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  env: {
    API_URL: process.env.API_URL,
  },
};
