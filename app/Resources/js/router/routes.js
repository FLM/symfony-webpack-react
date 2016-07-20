import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'pages/App';
import Index from 'pages/Index';
import Page from 'pages/Page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="page" component={Page} />
  </Route>
);
