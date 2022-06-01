const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "/src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader', 'css-loader'
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
    mode: 'development'
};