import React from 'react';
import {Link} from 'react-router-dom';
export default class SessionListItem extends React.Component {

    render() {
        let session = this.props.sessionData;
        return (
            <div>
                <p>Session ID: {session.id}</p>
                <p>Session Date: {session.date}</p>
                <p>Muscles Worked: {session.muscles_worked}</p>
                <button onClick={() => this.props.viewHandler(session.id)}>View Workouts</button>
                <button onClick={() => this.props.editHandler(session.id)}>Edit</button>
                <button onClick={() => this.props.deleteHandler(session.id)}>Delete</button>
                <hr/>
            </div>
        )
    }
}
