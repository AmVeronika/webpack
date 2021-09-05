const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
   entry: './src/main.js',// точка входа
   output: {// точка выхода
      filename: 'main.[contenthash].js',
      path: path.resolve(__dirname, 'app'),// __dirname - путь до файла config
      clean: true,
   },
   plugins: [
      new MiniCssExtractPlugin({ filename: 'style.[contenthash].css' }),
      new HtmlWebpackPlugin({
         template: 'index.html'
      })
   ],
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
         },
         {
            test: /.mp3$/,
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