import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import SessionList from './components/sessions/SessionList';
import Session from './components/sessions/Session';
import SaveSession from './components/sessions/SaveSession';
import SaveWorkout from './components/workouts/SaveWorkout';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sessions" component={SessionList}/>
                <Route exact path="/sessions/:id" component={Session}/>
                <Route path="/sessions/:id/workouts/:workoutid/edit" component={SaveWorkout}/> 
                <Route path="/sessions/:id/new" component={SaveWorkout}/>
                <Route path="/new" component={SaveSession}/>
                <Route path="/sessions/:id/edit" component={SaveSession}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);
