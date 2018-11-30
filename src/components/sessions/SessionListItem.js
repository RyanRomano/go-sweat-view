import React from 'react';
import {Link} from 'react-router-dom';

export default class SessionListItem extends React.Component {

    redirectToEditSession = () => {
        this.props.history.push(`/sessions/${this.props.sessionData.id}/edit`);
    }

    render() {
        let session = this.props.sessionData;
        return (
            <div>
                <p>Session ID: {session.id}</p>
                <p>Session Date: {session.date}</p>
                <p>Muscles Worked: {session.muscles_worked}</p>
                <Link to={`/sessions/${session.id}`}>View Workouts</Link>
                <button onClick={()=>this.redirectToEditSession()}> Edit</button>
                <button>Delete</button>
                <hr/>
            </div>
        )
    }
}
