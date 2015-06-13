import React from 'react';
var App = require('./components/App');
var Index = require('./components/Index');
var Page = require('./components/Page');
var RouteNotFound = require('./components/RouteNotFound');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } = Router;

var routes = (
    <Route handler={App} path="/app_dev.php/app/example">
        <DefaultRoute name="index" handler={Index}/>
        <Route name="page" path="page" handler={Page}/>
        <NotFoundRoute handler={RouteNotFound}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});
