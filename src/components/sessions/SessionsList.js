import React from 'react';
import {Link} from 'react-router-dom';

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
                        <div key={session.id}>
                            {/* https://stackoverflow.com/questions/30115324/pass-props-in-link-react-router */}
                            {/* <Link to={'/session/'+session.id }>Create Idea</Link> */}

                            <p>Session ID: {session.id}</p>
                            <p>Session Date: {session.date}</p>
                            <p>Muscles Worked: {session.muscles_worked}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
