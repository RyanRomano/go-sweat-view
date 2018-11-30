import React from 'react';

export default class SessionListItem extends React.Component {



    render() {
        let session = this.props.sessionData;
        return (
            <div>
                <p>Session ID: {session.id}</p>
                <p>Session Date: {session.date}</p>
                <p>Muscles Worked: {session.muscles_worked}</p>
            </div>
        )
    }
}
