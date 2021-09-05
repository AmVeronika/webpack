const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
   entry: './src/js/main.js',// точка входа
   output: {// точка выхода
      filename: 'main.[contenthash].js',
      path: path.resolve(__dirname, 'app'),// __dirname - путь до файла config
      clean: true,
   },
   plugins: [
      new MiniCssExtractPlugin({ filename: 'style.[contenthash].css' }),
      new HtmlWebpackPlugin({
         template: './src/index.html'
      }),
      new ImageMinimizerPlugin({
         minimizerOptions: {
            plugins: [
               ["gifsicle", { interlaced: true }],
               ["jpegtran", { progressive: true }],
               ["optipng", { optimizationLevel: 5 }],
            ],
         },
      }),
   ],
   module: {
      rules: [
         {
            test: /\.s?css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
         },
         {
            test: /\.(jpe?g|mp3|gif|mp4)$/i,
            loader: "file-loader",
         },
      ],
   },
   optimization: {
      minimizer: [
         new CssMinimizerPlugin(),
      ],
   },
   watch: true,
};