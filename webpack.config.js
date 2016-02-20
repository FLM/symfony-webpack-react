var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var BitBarWebpackStatusPlugin = require('bitbar-webpack-status-plugin');

var parameters = {
  server: '127.0.0.1',
  port: 3100,
};

var hotLoaderClient = 'webpack-hot-middleware/client?path=http://' + parameters['server'] + ':' + parameters['port'] + '/__webpack_hmr';

var getStyleLoader = function(preProcessor)
{
    return 'style!' +
      'css?' + // CSS-LOADER
      'modules&' + // ---> <enables Local scoped CSS by default
      'importLoaders=2&' + // ---> two additional loaders should be applied to @imported resources (autoprefixer & less/scss)
      'sourceMap&' + // ---> include sorcemaps
      'localIdentName=[local]___[hash:base64:5]' + // ---> format of the generated css class names
      '!postcss-loader' + // POSTCSS-LOADER (autoprefixer etc)
      '!' + preProcessor + '?' +
      'outputStyle=expanded&' +
      'sourceMap'
      ;
}

module.exports = {
    //eslint config options. Part of the eslint-loader package
    eslint: {
        configFile: '.eslintrc',
    },
    devtool: 'eval',
    entry: {
        client: [
            hotLoaderClient,
            'bootstrap-loader',
            './app/Resources/js/app.js'
        ],
    },
    // Configure paths for served files ("client" will be served at http://127.0.0.1:3002/static/client.js)
    output: {
        path: path.join(__dirname, 'web', 'dist'),
        filename: '[name].js',
        publicPath: 'http://' + parameters['server'] + ':' + parameters['port'] + '/static/'
    },
    plugins: [
        new BitBarWebpackStatusPlugin(),

        // Hot reload CSS/JS in development environment
        new webpack.HotModuleReplacementPlugin(),

        // Keeps us from serving assets when the compile fails
        new webpack.NoErrorsPlugin(),

        // Automatically import jquery where $, etc. are used.
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),

        // Global variables
        new webpack.DefinePlugin({
            '__GLOBALS__.dev': 'true',
            '__GLOBALS__.prod': 'false',
        }),

        // Ignore unused moment locales
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /sv/),
    ],
    resolve: {
        modules: [
            'app/Resources/js',
            'node_modules'
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
                    presets: ['es2015', 'stage-0', 'react', 'react-hmre'],
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
            {
                test: /\.css$/,
                loader: 'style!css'
            },

            // Use magic CSS loader for certain less files
            {
                test: /\.less$/,
                loader: getStyleLoader('less')
            },

            // Use magic CSS loader for certain scss files
            {
                test: /\.scss$/,
                loader: getStyleLoader('sass')
            },

            // Embed gifs as data-uris if less than a certain size
            {
                test: /\.(gif)(\?v=.*)?$/, loader: 'url-loader?limit=8192&minetype=image/gif'
            },

            // Embed pngs as data-uris if less than a certain size
            {
                test: /\.(png)(\?v=.*)?$/, loader: 'url-loader?limit=8192&minetype=image/png'
            },

            // Embed jpgs as data-uris if less than a certain size
            {
                test: /\.(jpeg|jpg)(\?v=.*)?$/, loader: 'url-loader?limit=8192&minetype=image/jpeg'
            },

            // Use file-loader for fonts
            {
                test: /\.(eot|ttf|svg|woff|woff2)(\?v=.*)?$/, loader: 'file-loader'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer({ browsers: 'last 2 version' })];
    }
};
