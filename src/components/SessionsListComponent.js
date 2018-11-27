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
                            {/* https://stackoverflow.com/questions/30115324/pass-props-in-link-react-router */}
                            {/* <Link to={'/session/'+session.id }>Create Idea</Link> */}

                            <p>Session ID: {session.id}</p>
                            <p>Session Date: {session.date}</p>
                            <p>Muscles Worked: {session.muscles_worked}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}