import React from 'react';
import WorkoutList from '../workouts/WorkoutList';
import NotFound from '../NotFound';

export default class Session extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            session: {},
            workouts: [],
            isError: false,
            isLoaded: false,
            errorMessage: ``
        }
        this.db_server = process.env.SERVER;
        this.client_server = process.env.DEV;
    }

    componentWillMount(){
        this.fetchSession();
        this.fetchWorkouts();
    }

    fetchSession = () => {
        fetch(`http://${this.db_server}/sessions/${this.props.match.params.id}`)
        .then(response => {
            if(!response.ok){
                return response.text().then(Promise.reject.bind(Promise))
            } else {
                return response.json();
            }
        })
        .then(json => {
            this.setState({
                session:json[0],
                isLoaded: true
            })
        })
        .catch(error => {
            this.setState({
                isError: true,
                errorMessage: error
            })
        })
    }

    fetchWorkouts = () => {
        fetch(`http://${this.db_server}/sessions/${this.props.match.params.id}/workouts`)
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
        fetch(`http://${this.db_server}/workouts/${id}`, {
            method: 'delete'
        })
        .then(response =>
            this.setState({workouts: this.state.workouts.filter(workout => workout.id !== id)})
        )
        .catch(error => console.error(error));
    }
    
    render() {
        {
            if(!this.state.isError && this.state.isLoaded){
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
