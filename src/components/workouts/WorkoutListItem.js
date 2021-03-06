import React from 'react';

export default class WorkoutListItem extends React.Component {

    render() {
        let workout = this.props.workoutData;

        return (
            <div key={workout.id}>
                <p>Exercise Name: {workout.exercise_name}</p>
                <p>Equipment type: {workout.equipment_type}</p>
                <p>Sets: {workout.sets}</p>
                <p>Reps: {workout.reps}</p>
                <p>Set 1: {workout.set1}</p>
                <p>Set 2: {workout.set2}</p>
                <p>Set 3: {workout.set3}</p>
                <p>Notes: {workout.notes}</p>
                <button onClick={() => this.props.editHandler(workout.id)}>Edit</button>
                <button onClick={() => this.props.deleteHandler(workout.id)}>Delete</button>
                <hr/>
            </div>        
        )
    }
}
