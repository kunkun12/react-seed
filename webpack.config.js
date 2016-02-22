var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
config = {
    entry: ["webpack-dev-server/client?http://localhost:8080", 'webpack/hot/dev-server', path.resolve(__dirname, 'source/main.js')],
    context: path.resolve(process.cwd(), 'source'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
        publicPath: "http://localhost:8080/build"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.jade$/,
            loader: 'html!jade-html'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.sass$/,
            loader: "style!css!sass?indentedSyntax&includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib") + "&includePaths[]=" + path.resolve(__dirname, "./mixins/app_mixins")
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=1&name=[path][name]-[hash:8].[ext]'
        }]
    },
    resolve: {
        root: [path.resolve(process.cwd(), 'source'), path.resolve(__dirname, 'node_modules')], //设置搜索目录
        alias: {
            images: './images' // 设置路径的别名
        },
        extensions: ['', '.js', '.jade']
    },
    plugins: [
        //    new HtmlWebpackPlugin({  // Also generate a test.html
        //         filename: 'index.html',
        //         template:'source/index.jade',
        // })
        //用了该插件就可以在jsx里使用require("jquery")
        // new webpack.ProvidePlugin({
        //     jQuery: "jquery",
        //     $: "jquery"
        // })
        //     new webpack.DefinePlugin({
        //             PRODUCTION: JSON.stringify(!!gulp.env.production)
        // })

    ]
};

module.exports = config;