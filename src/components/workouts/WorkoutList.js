import React from 'react';
import WorkoutListItem from './WorkoutListItem';

export default class WorkoutList extends React.Component {
    
    render() {
        return(
            <div>
                {this.props.workouts.map(function (workout) {
                    return (
                        <div key={workout.id}>
                            <WorkoutListItem 
                                workoutData={workout} 
                                deleteHandler={this.props.deleteHandler}
                            />
                            <hr/>
                        </div>
                    )
                }, this)}
            </div>
        )
    }
}
