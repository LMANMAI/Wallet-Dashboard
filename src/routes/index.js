import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage, DashboardPage } from '../pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="Dashboard" component={DashboardPage} />
            </Switch>            
        </Router>
    )
}

export default Routes
