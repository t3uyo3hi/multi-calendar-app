const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config(); // .env ファイルを読み込みます

// 環境変数を出力して確認
console.log("Supabase URL:", process.env.SUPABASE_URL);
console.log("Supabase Key:", process.env.SUPABASE_API_KEY);

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
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
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
    }),
    new webpack.DefinePlugin({
      "process.env.SUPABASE_URL": JSON.stringify(process.env.SUPABASE_URL),
      "process.env.SUPABASE_API_KEY": JSON.stringify(
        process.env.SUPABASE_API_KEY
      ),
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
