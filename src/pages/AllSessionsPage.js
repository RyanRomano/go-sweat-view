import React from 'react';
import {Link} from 'react-router-dom';
import SessionsListComponent from '../components/SessionsListComponent';

export default class AllSessionsPage extends React.Component {

    // fetch all sessions - send as data thru SessionsListComponent

    constructor(props){
        super(props);
        this.state = {
            sessions: []
        }
    }

    componentDidMount(){
        this.fetchSessions();
    }

    fetchSessions = () => {
        fetch('http://localhost:3000/sessions')
        .then(response => response.json())
        .then(json => {
            json.forEach(session => {
                this.setState({ sessions: [...this.state.sessions, session] });
            });
        })
        .catch(error => console.error(error));
    }

    render() {
        return(
            <div>
                <Link to="/new-session">New Session</Link>
                <h1>All sessions</h1>
                <SessionsListComponent sessions={this.state.sessions}/>
            </div>
        )
    }
}