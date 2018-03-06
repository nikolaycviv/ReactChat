const ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    React = require('react'),
    ReactDOM = require('react-dom'),
    webpack = require('webpack'),
    extractPlugin = new ExtractTextPlugin({
        filename: 'main.css'
    });

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true
    },
    entry: './src/entry.js', // entry point
    module: {
        rules: [
            {
                test: /\.js?$/, // search for js files
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // place where bundled app will be served
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        extractPlugin,
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/views/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
