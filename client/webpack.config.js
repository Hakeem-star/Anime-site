const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: { publicPath: "/" },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.(gif|png|jpg|svg)(\?.*$|$)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 800000000000192,
              name: "[name].[ext]",
              publicPath: "images/",
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],

  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
};
