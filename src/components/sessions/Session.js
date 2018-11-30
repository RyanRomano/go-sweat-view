import React from 'react';
import WorkoutList from '../workouts/WorkoutList';

export default class Session extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            session: {},
            workouts: []
        }
    }

    componentDidMount(){
        this.fetchSession();
        this.fetchWorkouts();
    }

    fetchSession = () => {
        fetch(`http://localhost:3000/sessions/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(json => this.setState({session:json[0]}));
    }

    fetchWorkouts = () => {
        fetch(`http://localhost:3000/sessions/${this.props.match.params.id}/workouts`)
        .then(response => response.json())
        .then(json => 
            json.forEach(workout => {
                this.setState({ workouts: [...this.state.workouts, workout] });
            })
        );
    }

    redirectToNewWorkout = () => {
        this.props.history.push(`/sessions/${this.props.match.params.id}/new`);
    }

    render() {
        return(
                <div>
                    <h2>Working out {this.state.session.muscles_worked} on {this.state.session.date}</h2>
                    <button onClick={() => this.redirectToNewWorkout()}>Add a Workout</button>
                    <hr/>
                    <WorkoutList workouts={this.state.workouts}/>
                </div>
        )
    }   
}
