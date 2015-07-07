import React from 'react';
import Router, { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } from 'react-router';

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

export default Tab;
