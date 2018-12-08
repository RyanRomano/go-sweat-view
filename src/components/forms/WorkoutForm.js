import React from 'react';
import DropdownMenu from '../dropdowns/DropdownMenu';
export default class WorkoutForm extends React.Component {

    render() {
        const handleSubmit = this.props.handleSubmit;
        const handleDropDownChange = this.props.handleDropDownChange;
        const handleTextFieldChange = this.props.handleTextFieldChange;

        const formData = this.props.formData;

        const optionGroups = formData.option_group_array;
        const exerciseOptions = formData.exercises;
        const selectedExercise = formData.exercise_id;
        
        const equipmentOptions = formData.equipment;
        const selectedEquipment = formData.equipment_id;
        
        const exerciseIdentifier = 0;
        const equipmentIdentifier = 1;

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Exercise
                        <DropdownMenu
                            handleDropDownChange={handleDropDownChange}
                            optionGroups={optionGroups}
                            options={exerciseOptions} 
                            selectedValue={selectedExercise}
                            identifier={exerciseIdentifier}
                        />
                    </label><br/>
                    <label>Equipment
                        <DropdownMenu
                            handleDropDownChange={handleDropDownChange}
                            options={equipmentOptions} 
                            selectedValue={selectedEquipment}
                            identifier={equipmentIdentifier}
                        />
                    </label><br/>

                    <label>Number of Sets
                        <input type="text" name="sets" defaultValue={formData.sets} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <label>Number of Reps
                        <input type="text" name="reps" defaultValue={formData.reps} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <label>Set 1 weight
                        <input type="text" name="set1" defaultValue={formData.set1} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <label>Set 2 weight
                        <input type="text" name="set2" defaultValue={formData.set2} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <label>Set 3 weight
                        <input type="text" name="set3" defaultValue={formData.set3} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <label>Notes
                        <input type="text" name="notes" defaultValue={formData.notes} onChange={handleTextFieldChange}/>
                    </label><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
