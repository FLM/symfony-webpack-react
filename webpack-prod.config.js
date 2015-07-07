// Example usage when preparing deploy:
// node_modules/.bin/webpack --config webpack-prod.config.js --progress --profile --colors

var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: false,
    entry: [
        './app/Resources/js/app.js'
    ],
    output: {
        path: path.join(__dirname, 'web/dist'),
        filename: 'bundle.js',
        publicPath: 'http://127.0.0.1:3000/static/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'local': path.join(__dirname, 'app/Resources/js')
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'app/Resources/js'),
                loader: 'babel'
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both style-loader and css-loader. The css-loader will go through the CSS file and find url() expressions and resolve them. The style-loader will insert the raw css into a style tag on your page.
            }
        ]
    }
};
