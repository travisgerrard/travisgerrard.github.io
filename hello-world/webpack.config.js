function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

var config = {
  entry: {
    bugTracker: getEntrySources([
        './src/app.js'
    ])
  },
  output: {
      publicPath: 'http://localhost:8080/',
      filename: 'public/[name].js'
  },

  module : {
    loaders : [
      { test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  },
};

module.exports = config;
