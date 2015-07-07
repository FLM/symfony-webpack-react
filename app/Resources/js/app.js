import React from 'react';
import App from 'local/components/App';
import Index from 'local/pages/Index';
import Page from 'local/pages/Page';
import RouteNotFound from 'local/pages/RouteNotFound';
import Router, { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } from 'react-router';

var routes = (
    <Route handler={App} path="/app_dev.php/">
        <DefaultRoute name="index" handler={Index}/>
        <Route name="page" path="page" handler={Page}/>
        <NotFoundRoute handler={RouteNotFound}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});
