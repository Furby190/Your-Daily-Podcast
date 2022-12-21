const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;

module.exports = {
    entry: {
        home: './src/assets/js/home.js',
        artwork: './src/assets/js/artwork.js',
        news: './src/assets/js/news.js',
        podcast: './src/assets/js/podcast.js'
    },
    mode: env,

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'public'),
                watch: true
            }
        ],
        port: 3000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, 
            {
                test: /\.html$/,
                use: ['html-loader']
            }, 
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    env == 'development'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[hash][ext]'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output both options are
            // optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
