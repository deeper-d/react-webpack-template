const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextWebpackPlugin("stylesheets/[name].[chunkhash:8].css");
const Happypack = require('happypack');
const happyThreadPool = Happypack.ThreadPool({ size: 5 });
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/pages/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        hot: true, // 热替换
        contentBase: path.join(__dirname, 'dist'), // server文件的根目录
        compress: false, // 开启gzip
        port: 8080, // 端口
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: 'Happypack/loader?id=js',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: 'happypack/loader?id=css',
                include: [
                    path.resolve(__dirname, 'src'),
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|bmp|eot|wof|woff2|ttf)/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "img/[name].[contenthash:8].[ext]"
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(), // HMR允许在运行时更新各种模块，而无需进行完全刷新
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: path.resolve(__dirname, 'dist/index.html')
        }),
        new Happypack({
            // id 标识符，要和 rules 中指定的 id 对应起来
            id: 'js',
            // 需要使用的 loader，用法和 rules 中 Loader 配置一样
            // 可以直接是字符串，也可以是对象形式
            loaders: [
                {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            ],
            threadPool: happyThreadPool
        }),
        new Happypack({
            id: 'css',//和rule中的id=css对应
            loaders: ['style-loader', 'css-loader','postcss-loader', 'less-loader'],
        }),
    ]
};
