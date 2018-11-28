import React from 'react';

export default class SessionPage extends React.Component {

    render() {
        return(
            <div>
                <p>Session id: {this.props.match.params.id}</p>
                {/* load workoutListComponent here */}
            </div>
        )
    }
}