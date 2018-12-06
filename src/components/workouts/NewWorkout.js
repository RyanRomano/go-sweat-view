import React from 'react';
import WorkoutForm from '../forms/WorkoutForm';

export default class NewWorkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            session_id: this.props.match.params.id,
            exercise_id: null,
            equipment_id: null,
            sets: null,
            reps: null,
            set1: null,
            set2: null,
            set3: null,
            notes: ''
        };
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/workouts/`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
        })
        .then(window.location.href = `http://localhost:1234/sessions/${this.state.session_id}`)
        .catch(error => console.error(error)); 
    }
    
    render() {
        return (
            <div>            
                <h2>New Workout</h2>
                <WorkoutForm handleSubmit={this.handleSubmit} 
                             handleChange={this.handleChange} 
                             workoutData={this.state}
                />
            </div>
        )
    }
}
