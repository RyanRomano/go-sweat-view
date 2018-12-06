import React from 'react';

export default class WorkoutForm extends React.Component {

    render() {
        const workout = this.props.workoutData;
        const handleChange = this.props.handleChange;
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Exercise_ID
                        <input type="text" name="exercise_id" defaultValue={workout.exercise_id} onChange={handleChange}/>
                    </label><br/>
                    <label>Equipment_ID
                        <input type="text" name="equipment_id" defaultValue={workout.equipment_id} onChange={handleChange}/>
                    </label><br/>
                    <label>Number of Sets
                        <input type="text" name="sets" defaultValue={workout.sets} onChange={handleChange}/>
                    </label><br/>
                    <label>Number of Reps
                        <input type="text" name="reps" defaultValue={workout.reps} onChange={handleChange}/>
                    </label><br/>
                    <label>Set 1 weight
                        <input type="text" name="set1" defaultValue={workout.set1} onChange={handleChange}/>
                    </label><br/>
                    <label>Set 2 weight
                        <input type="text" name="set2" defaultValue={workout.set2} onChange={handleChange}/>
                    </label><br/>
                    <label>Set 3 weight
                        <input type="text" name="set3" defaultValue={workout.set3} onChange={handleChange}/>
                    </label><br/>
                    <label>Notes
                        <input type="text" name="notes" defaultValue={workout.notes} onChange={handleChange}/>
                    </label><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
