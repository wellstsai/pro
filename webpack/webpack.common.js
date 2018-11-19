const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(gif|png|jpg|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['../dist']),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: './index.html'
    }),
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets',
      },
    ]),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
};
