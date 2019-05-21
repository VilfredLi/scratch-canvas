const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  bail: true,
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    filename: 'scratch-canvas.min.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'ScratchCanvas',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      })
    ]
  }
}
