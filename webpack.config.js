const HtmlWebPackPlugin = require("html-webpack-plugin");
/**
 * This is the minimal configurations that needed by the Webpack 4.0
 * By default it's entry point is src/index.js
 * By default the output is dist/main.js
 * @todo : Now question arises how to change it :)
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      /**
       * This will load the Html files in the RAM and as JS object and they can be further
       * used as template and can be worked on and injection.
       * This is the extra setting that has to be done for using the HTML templates.
       * @todo can we inject the SEO things after this ?
       */
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
  /**
   * This will be reading the HTML file and copy it "dist" folder, with name given
   * in 'filename' key.
   * Ques: Will this run after the loader -- Yes should be because
   * Babel-loader should be transforming the JSX to JS.
   * If this is commented out then HTML files will not be copied in the 'dist' folder.
   */
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
