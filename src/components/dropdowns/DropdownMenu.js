import React from 'react';

export default class DropdownMenu extends React.Component {

    render() {
        return (
            <div className="dd-wrapper">
                <select 
                    value={this.props.selectedValue} 
                    onChange={(event) => this.props.handleDropDownChange(this.props.identifier, event)}
                >
                    <option value={-1}>-- Select --</option>
                    {this.props.dropDownItems.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{item.exercise_name}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}