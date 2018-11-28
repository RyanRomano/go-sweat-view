import React from 'react';
import WorkoutList from '../workouts/WorkoutList';
import {Link, BrowserRouter, Route} from 'react-router-dom';

export default class Session extends React.Component {

    render() {
        return(
            // <BrowserRouter>
                <div>
                    <p>Session ID: {this.props.sessionData.id}</p>
                    <p>Session Date: {this.props.sessionData.date}</p>
                    <p>Muscles Worked: {this.props.sessionData.muscles_worked}</p>
                    <Link to={{ 
                        pathname: `/sessions/${this.props.sessionData.id}`}}>
                        View Workouts
                    </Link>
                    <hr/>
                    {/* <Route path={`/sessions/${this.props.sessionData.id}`} component={Home}/> */}
                    <hr/>
                </div>
            // </BrowserRouter>
        )

        // function Home() {
        //     return (
        //         <div>
        //             <h2>Home + {this.props.hello}</h2>
        //         </div>
        //     );
        // }
    }   
      
}
