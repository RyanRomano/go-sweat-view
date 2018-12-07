import React from 'react';
import DropdownMenu from '../dropdowns/DropdownMenu';
export default class WorkoutForm extends React.Component {

    render() {
        const workout = this.props.workoutData;

        const handleSubmit = this.props.handleSubmit;
        const handleTextFieldChange = this.props.handleTextFieldChange;
        const handleDropDownChange = this.props.handleDropDownChange;

        const exercises = workout.exercises;
        const selectedExercise = workout.exercise_id;
        const exerciseIdentifier = this.props.exerciseDropDownIdentifier;

        const equipment = workout.equipment;
        const selectedEquipment = workout.equipment_id;
        const equipmentIdentifier = this.props.equipmentDropDownIdentifier;

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Exercise
                        <DropdownMenu
                            dropDownItems={exercises} 
                            selectedValue={selectedExercise}
                            handleDropDownChange={handleDropDownChange}
                            identifier={exerciseIdentifier}
                        />
                    </label><br/>
                    <label>Equipment
                        <DropdownMenu
                            dropDownItems={equipment} 
                            selectedValue={selectedEquipment}
                            handleDropDownChange={handleDropDownChange}
                            identifier={equipmentIdentifier}
                        />
                    </label><br/>
                    <label>Number of Sets
                        <input type="text" name="sets" defaultValue={workout.sets} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <label>Number of Reps
                        <input type="text" name="reps" defaultValue={workout.reps} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <label>Set 1 weight
                        <input type="text" name="set1" defaultValue={workout.set1} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <label>Set 2 weight
                        <input type="text" name="set2" defaultValue={workout.set2} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <label>Set 3 weight
                        <input type="text" name="set3" defaultValue={workout.set3} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <label>Notes
                        <input type="text" name="notes" defaultValue={workout.notes} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
