var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, include: path.resolve("src"), loader: "babel-loader" }
    ]
  },
  externals: {
    react: "react"
  }
};
