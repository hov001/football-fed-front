// Path
const path = require('path')
// Html Webpack Plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
// Clean Webpack Plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// Copy webpack plugin
const CopyPlugin = require('copy-webpack-plugin')
// Mini CSS Extract Plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// Optimize Css Assets Plugin
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// Terser Webpack Plugin
const TerserPlugin = require("terser-webpack-plugin")

// IsDev
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

console.log('IS DEV::', isDev)

// Optimization function
const optimization = () => {
  const result = {}

  if(isProd) {
    result.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  }

  return result
}

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 4200,
    hot: isDev
  },
  optimization: optimization(),
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      },
      inject : 'body'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff|eot)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.png', '.jpeg', '.jpg'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@header': path.resolve(__dirname, 'src/components/header'),
      '@footer': path.resolve(__dirname, 'src/components/footer'),
      '@homepage': path.resolve(__dirname, 'src/components/homepage'),
    },
  },
}
