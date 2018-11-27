import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SessionsPage from './pages/SessionsPage';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/sessions" component={SessionsPage}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);
