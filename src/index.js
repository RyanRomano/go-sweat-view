import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);
