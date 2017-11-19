const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './'
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        watchContentBase: true,
        compress: true,
        hot: true,
        useLocalIp: true,
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                use: {
                    loader:   "babel-loader",
                    options: {
                        presets: ['react', 'stage-2']
                    }
                }
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader' ]
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.template.html',
            filename: './index.html',
            title: "Strona Asbirotm"
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ] 
};