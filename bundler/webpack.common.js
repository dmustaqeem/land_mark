const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            minify: true
        }),
        new MiniCSSExtractPlugin()
    ],
    devServer: {
        historyApiFallback: true
    },

    externals: [ /^@material-ui\/(core|icons)[\/a-zA-Z]*/ ],

    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // JS
            {
                test: /\.((js)|(jsx))$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        "presets": [ "@babel/preset-env","@babel/preset-react"]
                    }
                }
            },

            // CSS
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,  // a regular expression that catches .js files
                exclude: /node_modules/,
                loader: 'url-loader',
            },

            // Images
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },

            {
                test: /\.hdr$/, 
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },

             // Models
             {
                test: /\.(glb|gltf)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/models/'
                        }
                    }
                ]
            },

            {
                test: /\.obj/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/models/'
                        }
                    }
                ]
            },

            //Zapper
            {
                test: /zcv\.wasm$/,
                type: "javascript/auto",
                loader: "file-loader"
            },


            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            }
        ]
    }
}
