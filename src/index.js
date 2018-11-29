import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import SessionList from './components/sessions/SessionList';
import Session from './components/sessions/Session';
import NewSession from './components/sessions/NewSession';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sessions" component={SessionList}/>
                <Route path="/sessions/:id" component={Session}/>
                <Route path="/new-session" component={NewSession}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);
