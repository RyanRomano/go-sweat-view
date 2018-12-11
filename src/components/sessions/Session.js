import React from 'react';
import WorkoutList from '../workouts/WorkoutList';
import NotFound from '../NotFound';

export default class Session extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            session: {},
            workouts: [],
            isFound: false,
            errorMessage: `Session ${this.props.match.params.id} not found!`
        }
    }

    componentWillMount(){
        this.fetchSession();
        this.fetchWorkouts();
    }

    fetchSession = () => {
        fetch(`http://localhost:3000/sessions/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(json => 
            {if(json.length > 0){
                this.setState({
                    session:json[0],
                    isFound: true
                })
            }}
        );
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

    redirectToEditWorkout = (id) => {
        this.props.history.push(`/sessions/${this.state.session.id}/workouts/${id}/edit`);
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
        {
            if(this.state.isFound){
                return (
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
            } else {
                return <NotFound message={this.state.errorMessage}/>
            }
        }
    }
}
