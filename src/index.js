import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AllSessionsPage from './pages/AllSessionsPage';
import SessionPage from './pages/SessionPage';
import NewSessionPage from './pages/NewSessionPage';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/sessions" component={AllSessionsPage}/>
                <Route path="/sessions/:id" component={SessionPage}/>
                <Route path="/new-session" component={NewSessionPage}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);
