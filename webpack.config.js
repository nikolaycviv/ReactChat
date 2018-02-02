const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');
const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
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
            }
            // ,
            // {
            //     test: /\.(jpg|png)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]',
            //             outputPath: 'img/',
            //             publicPath: 'img/'
            //         }
            //     }]
            // }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
    ]
};
