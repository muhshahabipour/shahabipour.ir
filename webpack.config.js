const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html')
});

let pathsToClean = ['dist']

let cleanOptions = {}

module.exports = env => {


    // Use env.<YOUR VARIABLE> here:
    console.log('NODE_ENV: ', env.NODE_ENV) // 'local'
    console.log('Production: ', env.production) // true

    let isProduction = env.production;

    return {
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build')
        },
        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(css|scss)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        useRelativePath: false
                    }
                },
                {
                    test: /\.handlebars$/,
                    exclude: /(node_modules|bower_components\/)/,
                    use: [{
                        loader: 'handlebars-loader',
                    }]
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader"
                    }]
                },
                {
                    test: /\.(gif|png|jpe?g|jpg|svg)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        plugins: [
            new CleanWebpackPlugin(isProduction ? pathsToClean : [], cleanOptions),
            HtmlWebpackPluginConfig,
            new webpack.LoaderOptionsPlugin({
                options: {
                    handlebarsLoader: {}
                }
            }),
            new UglifyJsPlugin({
                sourceMap: false
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            }),
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:3001/',
                reload: false,
            })
        ],
        devServer: {
            contentBase: './',
            historyApiFallback: true,
            port: 3001,
            hot: true
        },
        node: {
            fs: 'empty'
        }
    }
};