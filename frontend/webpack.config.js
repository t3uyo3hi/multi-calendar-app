const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

// .envファイルを読み込む
const env = dotenv.config().parsed;

// 環境変数をオブジェクトに変換
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/main.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: [/\.ts$/, /\.tsx$/],
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                        },
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, "node_modules")],
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            templateParameters: {
                REACT_APP_SUPABASE_URL: env.REACT_APP_SUPABASE_URL,
                REACT_APP_SUPABASE_API_KEY: env.REACT_APP_SUPABASE_API_KEY,
            },
        }),
        new webpack.DefinePlugin({
            "process.env.REACT_APP_SUPABASE_URL": JSON.stringify(process.env.REACT_APP_SUPABASE_URL),
            "process.env.REACT_APP_SUPABASE_API_KEY": JSON.stringify(process.env.REACT_APP_SUPABASE_API_KEY),
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "src"),
        },
        port: 8080,
        historyApiFallback: true,
    },
};
