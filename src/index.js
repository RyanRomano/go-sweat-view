import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import SessionsList from './components/sessions/SessionsList';
import WorkoutList from './components/workouts/WorkoutList';
import NewSession from './components/sessions/NewSession';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sessions" component={SessionsList}/>
                <Route path="/sessions/:id" component={WorkoutList}/>
                <Route path="/new-session" component={NewSession}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);
