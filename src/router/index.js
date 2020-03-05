import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Details from '../pages/details';

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/details" component={Details} />
            </Switch>
        </Router>
    )
}
