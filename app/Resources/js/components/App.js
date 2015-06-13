import React from 'react';
import Index from './Index';
import Tab from './Tab';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } = Router;

var App = React.createClass({
    getInitialState: function () {
        return { };
    },
    render: function () {
        return (
            <div className="app">
                <ul className="nav nav-tabs">
                    <Tab route="index" text="Index"/>
                    <Tab route="page" text="Example page"/>
                </ul>
                <div className="container">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;
