// webpack.config.js

const dotenv = require("dotenv");
const webpack = require("webpack");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

module.exports = {
  entry: './src/index.jsx', // ここでエントリーポイントを指定する
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // 出力先ディレクトリ
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream/"),
    },
    alias: {
      '~': path.resolve(__dirname, 'src'),
       './aws-exports': path.resolve(__dirname, 'src/aws-exports.js'),
    },
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
