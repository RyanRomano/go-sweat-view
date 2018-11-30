import React from 'react';

export default class EditWorkout extends React.Component {

    render() {
        return (
            <p>Edit Workout id:{this.props.match.params.workoutid}</p>
        )
    }
}