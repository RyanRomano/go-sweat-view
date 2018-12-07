import React from 'react';

export default class DropdownMenu extends React.Component {
    render() {
        let muscleIDarray = [];

        let renderEquipmentOptions = this.props.dropDownItems.map(item => {
            return (
                <option key={item.id} value={item.id}>{item.equipment_type}</option>
            )
        });

        let renderExerciseOptions = this.props.dropDownItems.map((group, muscle_group_index) => {
            if(!muscleIDarray.includes(group.muscle_group_id)) {
                muscleIDarray.push(group.muscle_group_id);
                return (
                    <optgroup key={group.muscle_group_id} label={group.muscle_group}>
                        {group.muscle_group_id}
                        {this.props.dropDownItems.map(exercise => {
                            if(exercise.muscle_group_id == (muscle_group_index + 1)){
                                return (
                                    <option key={exercise.id} value={exercise.id}>{exercise.exercise_name}</option>
                                )
                            }
                        })}
                    </optgroup>
                );
        }});

        let renderOptions;

        if(this.props.identifier == 0){
            renderOptions = renderExerciseOptions;
        } else {
            renderOptions = renderEquipmentOptions;
        }

        return (
            <select 
                value={this.props.selectedValue} 
                onChange={(event) => this.props.handleDropDownChange(this.props.identifier, event)}
            >
                <option value={-1}>-- Select --</option>
                {renderOptions}
            </select>
        )
    }
}
