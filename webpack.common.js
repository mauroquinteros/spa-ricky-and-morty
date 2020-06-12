const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg|png|jpg|gif|mp4$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8142,
            name: '[hash].[ext]',
            outputPath: 'assets'
          }
        }
      }
    ]
  }
}