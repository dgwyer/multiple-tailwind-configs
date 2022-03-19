const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    'block1/index': [path.resolve(__dirname, "src", "block1", "main1.js")],
    'block2/index': [path.resolve(__dirname, "src", "block2", "main2.js")],
  },
  watch: true,
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'build'),
  },
  plugins: [new MiniCssExtractPlugin({
    // filename: "style.css",
    filename: ({ chunk }) => `${chunk.name.replace("/js/", "/css/")}.css`,
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  }
};