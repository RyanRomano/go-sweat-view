import React from 'react';

export default class DropdownMenu extends React.Component {

    render() {
            return (
                <select value={this.props.selectedValue} 
                        onChange={(event) => this.props.handleDropDownChange(this.props.identifier, event)}
                >
                    <option value={-1}>-- Select --</option>
                    {this.props.identifier == 0   
                        ? this.props.optionGroups.map(optionGroup => {
                            return (
                                <optgroup key={optionGroup.id} label={optionGroup.name}>
                                    {this.props.options.map(option => {
                                        if(option.muscle_group_id == optionGroup.id){
                                            return(
                                                <option key={option.id} value={option.id}>{option.exercise_name}</option>
                                            )
                                        }
                                    })}
                                </optgroup>
                            )
                        })
                        : this.props.options.map(option => {
                            return (
                                <option key={option.id} value={option.id}>{option.equipment_type}</option>
                            )
                        })
                    }
                </select>
            )
    }
}
