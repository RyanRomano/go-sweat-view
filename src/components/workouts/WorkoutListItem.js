import React from 'react';

export default class WorkoutListItem extends React.Component {



    render() {
        let workout = this.props.workoutData;

        let currentWorkoutData = {
            exercise_id: workout.exercise_id,
            equipment_id: workout.equipment_id,
            sets: workout.sets,
            reps: workout.reps,
            set1: workout.set1,
            set2: workout.set2,
            set3: workout.set3,
            notes: workout.notes
        }

        return (
            <div key={workout.id}>
                <p>Workout ID: {workout.id}</p>
                <p>Exercise Name: {workout.exercise_name}</p>
                <p>Exercise ID: {workout.exercise_id}</p>
                <p>Equipment type: {workout.equipment_type}</p>
                <p>Equipment ID: {workout.equipment_id}</p>
                <p>Reps: {workout.reps}</p>
                <p>Set 1: {workout.set1}</p>
                <p>Set 2: {workout.set2}</p>
                <p>Set 3: {workout.set3}</p>
                <p>Notes: {workout.notes}</p>
                <button onClick={() => this.props.editHandler(workout.id, currentWorkoutData)}>Edit</button>
                <button onClick={() => this.props.deleteHandler(workout.id)}>Delete</button>
                <hr/>
            </div>        
        )
    }
}
