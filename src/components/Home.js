import React from 'react';
import DropdownMenu from './dropdowns/DropdownMenu';

export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: 'Home Menu',
            title2: 'Another menu',
            selectedExerciseValue: '',
            selectedEquipmentValue: '',
            exercises: [],
            equipment: []
        }
        this.exerciseDropDownIdentifier = 0;
        this.equipmentDropDownIdentifier = 1;
    }

    componentDidMount(){
        this.fetchExercises();
        this.fetchEquipment();
    }

    fetchExercises = () => {
        fetch('http://localhost:3000/exercises')
        .then(response => response.json())
        .then(json => {
            json.forEach(exercise => {
                this.setState({ 
                    exercises: [...this.state.exercises, exercise] 
                });
            });
        })
        .catch(error => console.error(error));
    }

    fetchEquipment = () => {
        fetch('http://localhost:3000/exercises')
        .then(response => response.json())
        .then(json => {
            json.forEach(equipment => {
                this.setState({ 
                    equipment: [...this.state.equipment, equipment] 
                });
            });
        })
        .catch(error => console.error(error));
    }

    handleDropDownChange = (id, event) => {
        if(id == 0) {
            this.setState({selectedExerciseValue: event.target.value});
        } else {
            this.setState({selectedEquipmentValue: event.target.value});
        }
    }

    render() {
        return (
            <div>
                <p>Hello World! :)</p>
                <DropdownMenu
                    dropDownItems={this.state.exercises} 
                    dropDownTitle={this.state.title}
                    selectedValue={this.state.selectedExerciseValue}
                    handleDropDownChange={this.handleDropDownChange}
                    identifier={this.exerciseDropDownIdentifier}
                />
                <hr/>
                <DropdownMenu
                    dropDownItems={this.state.equipment} 
                    dropDownTitle={this.state.title2}
                    selectedValue={this.state.selectedEquipmentValue}
                    handleDropDownChange={this.handleDropDownChange}
                    identifier={this.equipmentDropDownIdentifier}
                />
            </div>
        )
    }
}
