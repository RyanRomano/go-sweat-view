import React from 'react';

export default class Session extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            session: null
        }
    }

    // Hit get /session/:id endpoint to get sessionid, date, muscles_worked

    // also hit workouts endpoint -> something like /session/{this.state.sessionid}/workouts
    // https://stackoverflow.com/questions/49754270/multiple-fetch-requests-with-setstate-in-react

    render() {
        return(
                <div>
                {/* render date here once */}
                {/* render workoutlist here */}
                    <p>Hello world + {this.props.match.params.id}</p>
                </div>
        )
    }   
      
}
