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
      /**
       * For pre-processing the CSS files i.e. loading them in RAM as the JS object and then parse them
       */
      {
        test: /\.css$/i,
        /* For injecting the CSS in the DOM from the generated JS bundle we need --> npm install --save-dev style-loader
         * Without this code will not compile when the css file is being imported in the component JS file
         * This will not WORK ALONE you have the use 'css-loader' as well
         * so these will be evaluated from Right to Left
         * CSS loader will put the CSS imported in the JS
         * Style loader will pull the css and put that in the DOM as the script tag
         */
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  /**
   * This will be reading the HTML file and copy it "dist" folder, with name given in 'filename' key.
   * Will this run after the loader -- Yes should be be cause Babel-loader should be transforming the JSX to JS.
   * If this is commented out then HTML files will not be copied in the 'dist' folder.
   */
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
