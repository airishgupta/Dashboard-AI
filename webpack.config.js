const webpack = require('webpack');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'src/dist/');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  watchOptions: {
    poll: true
  },
  entry: {
    basic: './src/index.jsx',
    common: ['react', 'react-dom'],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]-[hash].min.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      exclude: /node_modules/,
      test: /\.jsx?$/,
    },
    {
      loader: 'eslint-loader',
      test: /\.jsx?$/,
      options: {
        emitWarning: true,
      },
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        "css-loader",
        'sass-loader',
      ],
    },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      exclude: ['json'],
      cleanOnceBeforeBuildPatterns: [`${BUILD_DIR}`],
    }),
    new HtmlWebpackPlugin({
      title: 'StudyCourt.html',
      template: 'src/template/index.html',
      hash: true,
    }),
  ],
};
