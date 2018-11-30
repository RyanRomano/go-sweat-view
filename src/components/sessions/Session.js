import React from 'react';
import { Redirect } from 'react-router-dom'
import WorkoutListItem from '../workouts/WorkoutListItem';

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
    // Hit get /session/:id endpoint to get sessionid, date, muscles_worked

    // also hit workouts endpoint -> something like /session/{this.state.sessionid}/workouts
    // https://stackoverflow.com/questions/49754270/multiple-fetch-requests-with-setstate-in-react

    redirect = () => {
        this.props.history.push(`/sessions/${this.props.match.params.id}/new`);
    }

    render() {
        return(
                <div>
                    <h2>Working out {this.state.session.muscles_worked} on {this.state.session.date}</h2>
                    <button onClick={ () => this.redirect()}>Add a Workout</button>
                    <hr/>
                    
                    {this.state.workouts.map(function (workout) {
                        return (
                            <WorkoutListItem key={workout.id} workoutData={workout}/>
                        )
                    })}
                    
                </div>
        )
    }   
      
}
