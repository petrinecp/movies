var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'postcss-loader'],
        fallback: "style-loader" // když se to nepovede
      })
    }]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'), // zde bude výsledek
  },
  plugins: [
    new ExtractTextPlugin("style.css"), // soubor pojmenujeme
  ]
}