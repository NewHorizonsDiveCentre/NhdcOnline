// Vue.js config

// CSS & JS files are outputted without chunk hashes
// > ASP.Net Core adds version hashes anyway, so they're not needed,
// > and we need static names to set up the Razor layout
// index.html generation is also disabled
// > Again, ASP.Net Core will handle this for us
// > only disable on production, to allow local dev debugging

module.exports = {
  chainWebpack: config => {
    // CSS renaming
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css');
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: '[name].css',
        chunkFilename: '[name].css'
      }]);
    }
    // index file disable
    if (process.env.NODE_ENV !== 'development') {
      config.plugins.delete('html');
      config.plugins.delete('preload');
      config.plugins.delete('prefetch');
    }
  },
  configureWebpack: {
    output: {
      // JS renaming
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  }
};