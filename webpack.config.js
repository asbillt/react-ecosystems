// Import path and webpack modules.
const path = require("path");
const webpack = require("webpack");

// Define the export configurations inside the JavaScript object.
module.exports = {
  // Define the entry point for webpack.
  entry: "./src/index.js",
  // Specify the mode configuration.
  mode: "development",
  module: {
    // Define the rules for how webpack is to transform the code.
    rules: [
      // Rule 1: Transform ES6 code into JavaScript.
      {
        // Look at all js and jsx files.
        test: /\.(js|jsx)$/,
        // Don't look in node_modules folder.
        exclude: /(node_modules)/,
        // Use the babel-loader.
        loader: "babel-loader",
        // Specify options.
        options: { presets: ["@babel/env"] },
      },
      // Rule 2: Style loader and CSS loader.
      // Allows CSS file imports at top of JavaScript files.
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  // Specify development server allowing us to view our application in a browser.
  devServer: {
    static: path.join(__dirname, "public/"),
    port: 3000,
    devMiddleware: {
      publicPath: "http://localhost:3000/dist/",
    },
    hot: "only",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
