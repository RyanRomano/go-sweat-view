// import React from 'react';

// export default class EditWorkout extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             exercise_id: this.props.location.state.exercise_id,
//             equipment_id: this.props.location.state.equipment_id,
//             sets: this.props.location.state.sets,
//             reps: this.props.location.state.reps,
//             set1: this.props.location.state.set1,
//             set2: this.props.location.state.set2,
//             set3: this.props.location.state.set3,
//             notes: this.props.location.state.notes
//         };
//         this.workout_id = this.props.match.params.workoutid;
//         this.session_id = this.props.match.params.id;
//     }
    
//     handleChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         fetch(`http://localhost:3000/workouts/${this.workout_id}`, {
//             method: 'put',
//             headers: {'Content-Type':'application/json'},
//             body: JSON.stringify(this.state)
//         }).then(window.location.href = `http://localhost:1234/sessions/${this.session_id}`)
//         .catch(error => console.error(error));
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Edit Workout id:{this.workout_id}</h2>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>Exercise_ID
//                         <input type="text" name="exercise_id" defaultValue={this.state.exercise_id} onChange={this.handleChange} />
//                     </label><br/>
//                     <label>Equipment_ID
//                         <input type="text" name="equipment_id" defaultValue={this.state.equipment_id} onChange={this.handleChange} />
//                     </label><br/>
//                     <label>Number of Sets
//                         <input type="text" name="sets" defaultValue={this.state.sets} onChange={this.handleChange} />
//                     </label><br/>
//                     <label>Number of Reps
//                         <input type="text" name="reps" defaultValue={this.state.reps} onChange={this.handleChange} />
//                     </label><br/>
//                     <label>Set 1 weight
//                         <input type="text" name="set1" defaultValue={this.state.set1} onChange={this.handleChange} />
//                     </label><br/>
//                     <label>Set 2 weight
//                         <input type="text" name="set2" defaultValue={this.state.set2} onChange={this.handleChange} />
//                     </label><br/>
//                     <label>Set 3 weight
//                         <input type="text" name="set3" defaultValue={this.state.set3} onChange={this.handleChange} />
//                     </label><br/>
//                     <label>Notes
//                         <input type="text" name="notes" defaultValue={this.state.notes} onChange={this.handleChange} />
//                     </label><br/>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         )
//     }
// }
