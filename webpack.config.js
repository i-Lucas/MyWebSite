const config = require('./config.json')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|jpg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5000000 // 5mb
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            favicon: './src/assets/icon/favicon.png'
        })
    ],
    devServer: {
        historyApiFallback: true,
    },

    devtool: config.mode === 'dev' ? 'eval-cheap-module-source-map' : 'hidden-source-map'
}