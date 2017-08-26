import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/index.js';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
)