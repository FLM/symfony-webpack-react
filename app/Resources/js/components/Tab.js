import React from 'react';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } = Router;

var Tab = React.createClass({
    contextTypes: {
        router: React.PropTypes.func.isRequired
    },
    render: function () {
        return (
            <li className={this.context.router.isActive(this.props.route) ? 'active' : ''}><Link to={this.props.route}>{this.props.text}</Link></li>
        );
    }
});

module.exports = Tab;
