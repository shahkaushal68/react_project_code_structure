const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser.js",
      compress: {
        // remove warnings
        warnings: false,
        // Drop console statements
        drop_console: true,
      },
    }),
    new webpack.DefinePlugin({
      process: { env: { NODE_ENV: JSON.stringify("production") } },
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
