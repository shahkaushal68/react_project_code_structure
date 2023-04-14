const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  // cache: false,
  devServer: {
    port: 9090,
    hot: true, // enable hot module replacement
    historyApiFallback: true,
    open: true, // enable t open app in browser
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
      // "Cache-Control": "no-store",
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser.js",
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_TYPE": JSON.stringify("development"),
      "process.env.REACT_APP_NAME": JSON.stringify("Imperum"),
      "process.env.REACT_APP_API_URL": JSON.stringify(
       "http://192.168.1.175:5003/api/"
      ),
      "process.env.REACT_APP_REQUEST_TOKEN": JSON.stringify(
        "U2FsdGVkX1+i7B6ywWA6P1Booqo6qkPsEYXIqLFtNCQ="
      ),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
