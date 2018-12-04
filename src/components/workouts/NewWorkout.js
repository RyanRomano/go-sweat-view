import React from 'react';

export default class NewWorkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            session_id: this.props.match.params.id,
            exercise_id: 0,
            equipment_id: 0,
            sets: 3,
            reps: 0,
            set1: 0,
            set2: 0,
            set3: 0,
            notes: ""
        };
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit = (event) => {

        const newWorkout = {
            session_id: this.state.session_id,
            exercise_id: this.state.exercise_id,
            equipment_id: this.state.equipment_id,
            sets: this.state.sets,
            reps: this.state.reps,
            set1: this.state.set1,
            set2: this.state.set2,
            set3: this.state.set3,
            notes: this.state.notes
        }

        fetch(`http://localhost:3000/workouts/`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newWorkout)
        })
        .then(window.location.href = `http://localhost:1234/sessions/${this.state.session_id}`)
        .catch(error => console.error(error)); 

        console.log(newWorkout);
        event.preventDefault();

    }
    
    render() {
        return (
        <div>
            <h2>Create a new workout!</h2>
            <form onSubmit={this.handleSubmit}>

                <label>Exercise_ID
                    <input type="text" name="exercise_id" onChange={this.handleChange} />
                </label><br/>
                <label>Equipment_ID
                    <input type="text" name="equipment_id" onChange={this.handleChange} />
                </label><br/>
                <label>Number of Sets
                    <input type="text" name="sets" defaultValue={3} onChange={this.handleChange} />
                </label><br/>
                <label>Number of Reps
                    <input type="text" name="reps" onChange={this.handleChange} />
                </label><br/>
                <label>Set 1 weight
                    <input type="text" name="set1" onChange={this.handleChange} />
                </label><br/>
                <label>Set 2 weight
                    <input type="text" name="set2" onChange={this.handleChange} />
                </label><br/>
                <label>Set 3 weight
                    <input type="text" name="set3" onChange={this.handleChange} />
                </label><br/>
                <label>Notes
                    <input type="text" name="notes" onChange={this.handleChange} />
                </label><br/>

                <input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}
