import React from 'react';

export default class WorkoutList extends React.Component {

    render() {
        return(
            <div>
                {this.props.workouts.map(function (workout) {
                    return (
                        <div key={workout.id}>
                            <p>Exercise Name: {workout.exercise_name}</p>
                            <p>Equipment type: {workout.equipment_type}</p>
                            <p>Reps: {workout.reps}</p>
                            <p>Set 1: {workout.set1}</p>
                            <p>Set 2: {workout.set2}</p>
                            <p>Set 3: {workout.set3}</p>
                            <p>Notes: {workout.notes}</p>
                            <button>Edit</button>
                            <button>Delete</button>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
