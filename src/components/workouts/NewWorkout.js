import React from 'react';

export default class NewWorkout extends React.Component {

    render() {
        return (
            <div>
                <p>Create a new workout under Session ID {this.props.match.params.id}</p>
                <p>Heres a form.....</p>
                {/* todo: create a form -> on submit, post new workout with session_id of props id */}
            </div>
        )
    }
}