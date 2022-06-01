const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
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
        extensions: ['.tsx','.ts', '.js', '.jsx'],
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