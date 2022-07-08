module.exports = {
  module: {
    rules: [{
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: true
        }
      }
    }]
  },
  externals: {
    jquery: 'jQuery'
  }
}
