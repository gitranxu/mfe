const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.conf.js');
const path = require('path');
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
module.exports = merge(common, {
    //devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        inline:true,
        contentBase: path.resolve(__dirname, '../'+dist),
        host:'localhost',
        port:"8080",
        proxy: {
            '/portal': {
                 target: 'http://10.112.68.79:8080/portal', //300
                 //target: 'http://10.2.118.104:8080/portal',//任红颜
                changeOrigin: true,
                pathRewrite: {'^/portal' : ''}
            },
            '/ue': {
               target: 'http://10.144.34.65:8080/portal', //300
              changeOrigin: true,
              pathRewrite: {'^/ue' : ''}
          },
            '/HOWebApp': {
              target: 'http://10.0.222.12', //yuanyi 300
              changeOrigin: true,
          }
        }
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, '../'+dist),
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ],
            }
            // {
            //     test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            //     loader: 'url-loader?limit=1024&name=[hash:8].[name].[ext]'
            // },
            
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
			runEnv: JSON.stringify('local')
        }),
    ],
    mode: 'development',
});
