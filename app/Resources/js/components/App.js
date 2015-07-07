import React from 'react';
import Tab from 'local/components/Tab';
import Router, { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } from 'react-router';

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

export default App;
