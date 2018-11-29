import React from 'react';
import {Link} from 'react-router-dom';
import SessionsListItem from './SessionsListItem';

export default class SessionsList extends React.Component {

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
                <h2>Hello world - All Sessions</h2>
                <Link to="/new-session">New Session</Link>

                {this.state.sessions.map(function (session) {
                    return (
                        <SessionsListItem key={session.id} sessionData={session}/>
                    )
                })}
            </div>
        )
    }
}
