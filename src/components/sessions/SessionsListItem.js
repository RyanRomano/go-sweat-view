import React from 'react';
import {Link} from 'react-router-dom';


export default class SessionListItem extends React.Component {

    render() {
        return (
            <div>
                <p>Session ID: {this.props.sessionData.id}</p>
                <p>Session Date: {this.props.sessionData.date}</p>
                <p>Muscles Worked: {this.props.sessionData.muscles_worked}</p>
                <Link to={{ 
                    pathname: `/sessions/${this.props.sessionData.id}`}}>
                    View Workouts
                </Link>
            </div>
        )
    }
}