import React from 'react';

export default class SessionsListComponent extends React.Component {

// TODO: CREATE SINGLE SESSION COMPONENT AND PASS THIS DATA :) -> 
// RENDER INSIDE THAT INSTEAD OF DIV P P P 

    render() {
        return(
            <div>
                {this.props.sessions.map(function (session) {
                    return (
                        <div key={session.id}>
                            <p>{session.id}</p>
                            <p>{session.date}</p>
                            <p>{session.muscles_worked}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}