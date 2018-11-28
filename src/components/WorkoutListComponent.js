import React from 'react';

export default class WorkoutListComponent extends React.Component {

    render() {
        return(
            <div>
                {this.props.workouts.map(function (workout) {
                    return (
                        <div key={workout.id}>
                            <p>{workout.date}</p>
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

// {id: 4, session_id: 1, date: "2011-07-01T10:30:30.000Z", exercise_name: "Leg Press", equipment_type: "Machine", …}
// date: "2011-07-01T10:30:30.000Z"
// equipment_type: "Machine"
// exercise_name: "Leg Press"
// id: 4
// notes: "Another workout"
// reps: 69
// session_id: 1
// set1: 420
// set2: 420
// set3: 420
// sets: 3