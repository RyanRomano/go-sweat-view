import React from 'react';

export default class WorkoutList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            workouts: []
        }
    }

    componentDidMount(){
        this.fetchWorkouts();
    }

    fetchWorkouts = () => {
        fetch(`http://localhost:3000/sessions/${this.props.match.params.id}/workouts`)
        .then(response => response.json())
        .then(json => {
            json.forEach(workout => {
                this.setState({ workouts: [...this.state.workouts, workout] });
            });
        })
        .catch(error => console.error(error));
    }

    render() {
        return(
            <div>
                {this.state.workouts.map(function (workout) {
                    return (
                        <div key={workout.id}>
                            <p>Exercise Name: {workout.exercise_name}</p>
                            <p>Equipment type: {workout.equipment_type}</p>
                            <p>Date: {workout.date}</p>
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
