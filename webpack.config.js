'use strict';

const webpack = require('webpack');

module.exports = {
  entry:   [ `${__dirname}/app/frontend/entrypoint.js`],
  output:  {
    path:     `${__dirname}/public`,
    filename: 'bundle.js'
  },
  module:  {
    loaders: [
      {
        test:    /\.js$/,
        exclude: /(node_modules)/,
        loader:  'babel-loader',
        query:   {
          presets: ['es2015']
        }
      },
      {
        test:    /\.html/,
        include: [`${__dirname}/app/frontend/component`],
        loader:  'raw-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test:    /\.scss/,
        loaders: ["style-loader", "raw-loader", "sass-loader"]
      }
    ]
  },
  plugins: [

  ]
};
