import React from 'react';
import WorkoutList from '../workouts/WorkoutList';

export default class Session extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            workouts: [],
            date: null
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
                this.setState({ date: workout.date });
            });
        })
        .catch(error => console.error(error));
    }

    render() {
        return(
            <div>
                <h2>Session ID: {this.state.date}</h2>
                <button>Add a new Workout</button>
                <WorkoutList workouts={this.state.workouts}/>
            </div>
        )
    }
}
