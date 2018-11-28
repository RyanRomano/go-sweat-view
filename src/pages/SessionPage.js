import React from 'react';
import WorkoutListComponent from '../components/WorkoutListComponent';
export default class SessionPage extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            workouts: [],
        }
    }

    componentDidMount(){
        this.fetchWorkouts();
    }

    fetchWorkouts = () => {
        let id = this.props.match.params.id;
        fetch(`http://localhost:3000/sessions/${id}/workouts`)
        .then(response => response.json())
        .then(json => {
            json.forEach(workout => {
                this.setState({ workouts: [...this.state.workouts, workout] });
            });
        })
        .catch(error => console.error(error));
    }

    render() {
        return(
            <div>
                <WorkoutListComponent workouts={this.state.workouts}/>
            </div>
        )
    }
}