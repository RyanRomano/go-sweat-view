import React from 'react';
import WorkoutForm from '../forms/WorkoutForm';

export default class NewWorkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            session_id: this.props.match.params.id,
            exercise_id: -1,
            equipment_id: -1,
            sets: '',
            reps: '',
            set1: '',
            set2: '',
            set3: '',
            notes: '',
            exercises: [],
            equipment: [],
            option_group_array: []
        };
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
                this.setState({ exercises: [...this.state.exercises, exercise] });

                if (!this.state.option_group_array.some(group => group.id == exercise.muscle_group_id)) {
                    let optionGroupData = {
                        id: exercise.muscle_group_id,
                        name: exercise.muscle_group
                    }
                    this.setState({ 
                        option_group_array: [...this.state.option_group_array, optionGroupData] 
                    });
                }
            });
        })
        .catch(error => console.error(error));
    }

    fetchEquipment = () => {
        fetch('http://localhost:3000/equipment')
        .then(response => response.json())
        .then(json => {
            json.forEach(equipment => {
                this.setState({ equipment: [...this.state.equipment, equipment] });
            });
        })
        .catch(error => console.error(error));
    }

    handleDropDownChange = (id, event) => {
        if(id == 0) {
            this.setState({exercise_id: event.target.value});
        } else {
            this.setState({equipment_id: event.target.value});
        }
    }
    
    handleTextFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        const newWorkout = {
            session_id: this.state.session_id,
            exercise_id: this.state.exercise_id,
            equipment_id: this.state.equipment_id,
            sets: this.state.sets,
            reps: this.state.reps,
            set1: this.state.set1,
            set2: this.state.set2,
            set3: this.state.set3,
            notes: this.state.notes,
        }
       
        if(newWorkout.exercise_id == -1 && newWorkout.equipment_id == -1) {
            alert('Please select an exercise and type of equipment used!');
        } else if(newWorkout.exercise_id == -1) {
            alert('Please select an exercise!');
        } else if(newWorkout.equipment_id == -1) {
            alert('Please select the type of equipment used!');
        } else {
            fetch(`http://localhost:3000/workouts/`, {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(newWorkout)
            })
            .then(window.location.href = `http://localhost:1234/sessions/${this.state.session_id}`)
            .catch(error => console.error(error)); 
        }
    }

    render() {
        return (
            <div>            
                <h2>New Workout</h2>
                <WorkoutForm
                    handleSubmit={this.handleSubmit} 
                    handleTextFieldChange={this.handleTextFieldChange} 
                    handleDropDownChange={this.handleDropDownChange}
                    formData={this.state}
                />
            </div>
        )
    }
}
