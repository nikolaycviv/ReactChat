const ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ManifestPlugin = require('webpack-manifest-plugin'),
    FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
    path = require('path'),
    React = require('react'),
    ReactDOM = require('react-dom'),
    extractPlugin = new ExtractTextPlugin({
        filename: 'main.css'
    });

module.exports = {
    devServer: {
        contentBase: './dist',
        // inline: true, // autorefresh
        // port: 8080 // development port server
    },
    entry: './src/js/index.js', // entry point
    externals: {
        React,
        ReactDOM
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // search for js files
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
                test: /\.css$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }]
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/, // search for js files 
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint'],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // place where bundled app will be served
        publicPath: '/',
    },
    plugins: [
        extractPlugin,
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/views/index.html'
        }),
        new ManifestPlugin({
            seed: {
                short_name: 'Chat'
            },
            writeToFileEmit: true
        }),
        new FaviconsWebpackPlugin({
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: '#fff',
            // emit all stats of the generated icons
            emitStats: false,
            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                windows: false,
                yandex: false
            },
            // inject the html into the html-webpack-plugin
            inject: true,
            // your source logo
            logo: './src/images/favicon.ico',
            // generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            // persistentCache: true,
            // the prefix for all image files (might be a folder or a name)
            // prefix: 'icons-[hash]/',
            // the name of the json containing all favicon information
            // statsFilename: 'iconstats-[hash].json',
            // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
            title: 'ReactChat'
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
}
