/* global module, __dirname */
const Webpack = require('webpack')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const DashboardPlugin = require('webpack-dashboard/plugin')
const path = require('path')

const IS_DEV = process.env.NODE_ENV === 'development'

const plugins = [
  new Webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: IS_DEV
        ? JSON.stringify('development')
        : JSON.stringify('production')
    }
  })
]

if (IS_DEV) {
  plugins.push(
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new DashboardPlugin()
  )
} else {
  plugins.push(
    new Webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  )
}

module.exports = {
  devtool: IS_DEV ? 'inline-source-map' : 'eval',
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    compress: false,
    inline: true,
    hot: true,
    open: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true
    }
  }
}
