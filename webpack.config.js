const port = process.env.PORT || 8080;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'main.[fullhash].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif|mpc|mps|mpb|cxc|cxs|cxb|tga|mtl|fbx|ico)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                        name: '[name].[fullhash].[ext]',
                        outputPath: 'assets'
                    }
                  },
                ],
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.json$/,
                use: ['json-loader'],
                type: 'javascript/auto'
              },
              {
                test: /\.obj$/,
                loader: 'webpack-obj-loader'
              },
              {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
              }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico',
            manifest: "./public/manifest.json",
        })
    ],
    devServer:{
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}