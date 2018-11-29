import React from 'react';
import WorkoutListItem from './WorkoutListItem';

export default class WorkoutList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            workouts: []
        }
    }

    componentDidMount(){
        this.fetchWorkouts();
    }

    fetchWorkouts = () => {
        fetch(`http://localhost:3000/sessions/${this.props.match.params.id}/workouts`)
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
                {this.state.workouts.map(function (workout) {
                    return (
                        <WorkoutListItem workoutData={workout}/>
                    )
                })}
            </div>
        )
    }
}
