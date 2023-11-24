module.exports = function override(config, env) {
    config.resolve.fallback = {
      timers: require.resolve('timers-browserify'),
    };
  
    return config;
  };
  