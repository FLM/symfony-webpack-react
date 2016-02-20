var fs = require('fs');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var compress = require('compression');
var arguments = require('minimist')(process.argv.slice(2));
var parameters = {
  server: '127.0.0.1',
  port: 3100,
};

// Use single entry point?
if ('entry' in arguments) {
  console.log('Running webpack dev server with single entry point: ' + arguments.entry);
  var obj = {};
  obj[arguments.entry] = config.entry[arguments.entry];
  config.entry = obj;
}

var isPortTaken = function(portNr, fn) {
  var net = require('net')
  var tester = net.createServer()
    .once('error', function (err) {
      if (err.code != 'EADDRINUSE') return fn(err)
      fn(null, true)
    })
    .once('listening', function() {
      tester.once('close', function() { fn(null, false) })
        .close()
    })
    .listen(portNr)
};

isPortTaken(parameters['port'], function (error, inUse) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  if (inUse) {
    console.log('Port ' + parameters['port'] + ' is in use by another process!');
    process.exit(1);
  }
});

var app = express();
var compiler = webpack(config);

app.use(compress({}));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(parameters['port'], 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://' + parameters['server'] + ':' + parameters['port']);
});
