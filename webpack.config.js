const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
  entry: './src/index.js',
  output:  {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          },
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true }
        }
      },
      {
        test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css',
    }),
  ]
};

// TODO: investigate how to do this with the mode argument
// https://github.com/webpack/webpack/issues/6460
if (JSON.stringify(process.env.NODE_ENV) === `"production"`) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'sass-loader'
      },
    ]
  });
} else {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'sass-loader'
      },
    ]
  });
}

module.exports = config;
