/**
 * Created by eugenekagan on 10/31/16.
 */
module.exports = {
  entry: ['./app/utils.js', './app/app.js'],
  output: {
    filename: 'bundle.js'
  },


  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: 'node_modules',
    //     loader: 'jshint-loader'
    //   }
    // ],
    loaders: [{
      test: /\.es6$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};