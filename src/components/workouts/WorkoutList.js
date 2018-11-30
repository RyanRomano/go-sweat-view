import React from 'react';
import WorkoutListItem from './WorkoutListItem';

export default class WorkoutList extends React.Component {
    render() {
        return(
            <div>
                {this.props.workouts.map(function (workout) {
                    return (
                        <WorkoutListItem key={workout.id} workoutData={workout}/>
                    )
                })}
            </div>
        )
    }
}
