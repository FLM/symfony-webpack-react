const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const getStyleLoader = function(preProcessor, includeStyleLoader) {
  includeStyleLoader = (includeStyleLoader !== false);

  return (includeStyleLoader ? 'style-loader!' : '') +
    'css-loader?' + // CSS-LOADER
    'modules&' + // ---> <enables Local scoped CSS by default
    'importLoaders=2&' + // ---> two additional loaders should be applied to @imported resources (autoprefixer & less/scss)
    'localIdentName=[hash:base64:12]' + // ---> format of the generated css class names
    '!postcss-loader' +
    '!' + preProcessor
    ;
};

module.exports = {
  //eslint config options. Part of the eslint-loader package
  eslint: {
    configFile: '.eslintrc',
  },
  debug: false,
  entry: {
    client: [
      'babel-polyfill',
      'bootstrap-loader/extractStyles',
      './app/Resources/js/app.js'
    ],
  },
  // Configure paths for served files ("client" will be served at /dist/client.js)
  output: {
    path: path.join(__dirname, 'web', 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  plugins: [
    // Keeps us from serving assets when the compile fails
    new webpack.NoErrorsPlugin(),

    // Automatically import jquery where $, etc. are used.
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),

    // Global variables
    new webpack.DefinePlugin({
      '__GLOBALS__.dev': 'false',
      '__GLOBALS__.prod': 'true',
    }),

    // Configure path for served CSS files ("desktop_css" will be served as /dist/desktop_css.css)
    new ExtractTextPlugin('[name].css'),
  ],
  resolve: {
    modules: [
      'app/Resources/js',
      'node_modules',
      '.',
    ],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      // Use Babel transpiler for JS files in certain paths where we might use ES6 etc.
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'app/Resources/js'),
        ],
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [
            ['provide-modules', {
                'helpers/logger': 'logger',
                'jquery': '$',
            }],
            'jsx-control-statements',
            'transform-decorators-legacy',
            'transform-inline-environment-variables',
          ],
        },
      },

      // Lint certain JS files
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: [
          path.join(__dirname, 'app/Resources/js'),
        ],
      },

      // Run both style-loader and css-loader for CSS files.
      // - The css-loader will go through the CSS file and find url() expressions and resolve them.
      // - The style-loader will insert the raw css into a style tag on your page.
      // - ExtractTextPlugin serves the result as CSS instead of JS
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
      },

      // Use magic CSS loader for certain less files
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: getStyleLoader('less', false) })
      },

      // Use magic CSS loader for certain scss files
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: getStyleLoader('sass', false) })
      },

      // Embed images as data-uris if less than a certain size
      {
        test: /\.(gif|png|jpg|jpeg)(\?v=.*)?$/, loader: 'url-loader?limit=8192'
      },

      // Use file-loader for fonts
      {
        test: /\.(eot|ttf|svg|woff|woff2)(\?v=.*)?$/, loader: 'file-loader'
      }
    ]
  },
  postcss: function() {
    return [autoprefixer({ browsers: 'last 2 version' })];
  }
};
