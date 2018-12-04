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
        this.props.history.push(`/sessions/${this.state.session.id}/new`);
    }

    redirectToEditWorkout = (id, data) => {
        this.props.history.push({
            pathname:`/sessions/${this.state.session.id}/workouts/${id}/edit`,
            state: data
        });
    }

    deleteWorkout = (id) => {
        fetch(`http://localhost:3000/workouts/${id}`, {
            method: 'delete'
        })
        .then(response =>
            this.setState({workouts: this.state.workouts.filter(workout => workout.id !== id)})
        )
        .catch(error => console.error(error));
    }

    render() {
        return(
                <div>
                    <h2>Working out {this.state.session.muscles_worked} on {this.state.session.date}</h2>
                    <button onClick={() => this.redirectToNewWorkout()}>Add a Workout</button>
                    <hr/>
                    <WorkoutList 
                        workouts={this.state.workouts} 
                        deleteHandler={this.deleteWorkout} 
                        editHandler={this.redirectToEditWorkout}
                    />
                </div>
        )
    }   
}
