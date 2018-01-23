const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: `${__dirname}/app/index.jsx`,
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.join(__dirname, 'app'), 'node_modules'],
    extensions: [' ', '.js', '.jsx'],
  },
  devServer: {
    inline: true,
    contentBase: `${__dirname}/public`,
    port: 3333,
    historyApiFallback: true,
  },
  module: {
    loaders: [{
      test: /\.js|.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: [
          'transform-decorators-legacy',
          'transform-class-properties',
        ],
      },
    }],
  },
};
