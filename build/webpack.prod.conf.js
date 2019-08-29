const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.conf.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
let args = process.argv;
let runEnv;
if(args.indexOf('--300') != -1) {
    runEnv = '300';
}else if(args.indexOf('--500') != -1) {
    runEnv = '500';
}else if(args.indexOf('--800') != -1) {
    runEnv = '800';
}

let dist = 'dist';

const config = merge(common, {
    optimization: {
    // 分离chunks
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              name: "vendor",
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: "initial" // 只打包初始时依赖的第三方
            },
          }
        },
        minimizer: [
          // 压缩JS
          new UglifyJsPlugin({
            cache: true, // 开启缓存
            parallel: true, // 平行压缩
            sourceMap: true // set to true if you want JS source maps
          }),
          // 压缩css
          new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      // you can specify a publicPath here
                      // by default it use publicPath in webpackOptions.output
                      publicPath: '../'
                    }
                  },
                  'css-loader',
                  'postcss-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      // you can specify a publicPath here
                      // by default it use publicPath in webpackOptions.output
                      publicPath: '../'
                    }
                  },
                  'css-loader',
                  'postcss-loader',
                  'less-loader',
              ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin([dist+'/*'], {
            root: path.resolve(__dirname, '../')
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash:8].css',
            chunkFilename: 'static/css/[id].[hash:8].css'
        }),
        new webpack.DefinePlugin({
			runEnv: JSON.stringify(runEnv)
        }),
    ],
    //devtool: 'cheap-module-eval-source-map',
    mode: 'production',
    output: {
        filename: 'static/js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../'+dist),
    }
});
module.exports = config;
