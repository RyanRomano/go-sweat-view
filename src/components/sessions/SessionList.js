import React from 'react';
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

    deleteSession = (id) => {
        fetch(`http://localhost:3000/sessions/${id}`, {
            method: 'delete'
        })
        .then(response =>
            this.setState({sessions: this.state.sessions.filter(session => session.id !== id)})
        )
        .catch(error => console.error(error));
    }
    
    viewSession = (id) => {
        this.props.history.push(`/sessions/${id}`);
    }

    redirectToEditSession = (id) => {
        this.props.history.push(`/sessions/${id}/edit`);
    }

    render() {
        return(
            <div>
                <h2>All Sessions</h2>
                <button onClick={() => this.redirectToNewSession()}>New Session</button>
                <hr/>

                {this.state.sessions.map(session => {
                    return (
                        <SessionListItem 
                            key={session.id}
                            sessionData={session} 
                            deleteHandler={this.deleteSession} 
                            editHandler={this.redirectToEditSession} 
                            viewHandler={this.viewSession}
                        />
                    )
                })}
            </div>
        )
    }
}
