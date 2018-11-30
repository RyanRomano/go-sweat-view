import React from 'react';
import {Link} from 'react-router-dom';
import SessionListItem from './SessionListItem';

export default class SessionList extends React.Component {

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

    redirectToNewSession = () => {
        this.props.history.push(`/new-session`);
    }

    render() {
        return(
            <div>
                <h2>Hello world - All Sessions</h2>
                <button onClick={ () => this.redirectToNewSession()}>New Session</button>
                <hr/>
                {this.state.sessions.map(function (session) {
                    return (
                        <div>
                            <SessionListItem key={session.id} sessionData={session}/>
                            <Link to={`/sessions/${session.id}`}>View Workouts</Link>
                            <button>Edit</button>
                            <button>Delete</button>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
