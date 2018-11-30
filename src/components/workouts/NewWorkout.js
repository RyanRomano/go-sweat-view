import React from 'react';

export default class NewWorkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            session_id: this.props.match.params.id,
            exercise_id: 0,
            equipment_id: 0,
            sets: 0,
            reps: 0,
            set1: 0,
            set2: 0,
            set3: 0,
            notes: ""
        };
    }
    
    handleChange = (event) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    
    handleSubmit = (event) => {
        // const data = {
        //     "newWorkout":this.state.newWorkout
        // }

        // fetch(`http://localhost:3000/sessions/`, {
        //     method: 'post',
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify(data)
        // })
        // .then(window.location.href = `http://localhost:1234/sessions/${this.props.match.params.id}/workouts`)
        // .catch(error => console.error(error)); 

        console.log('Hello world');
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
                    <input type="text" name="sets" value={3} onChange={this.handleChange} />
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
