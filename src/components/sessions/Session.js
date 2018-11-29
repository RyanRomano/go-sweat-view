import React from 'react';

export default class Session extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            session: {}
        }
    }

    componentDidMount(){
        this.fetchSession();
    }

    fetchSession = () => {
        fetch(`http://localhost:3000/sessions/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(json => this.setState({session:json[0]}));
    }
    // Hit get /session/:id endpoint to get sessionid, date, muscles_worked

    // also hit workouts endpoint -> something like /session/{this.state.sessionid}/workouts
    // https://stackoverflow.com/questions/49754270/multiple-fetch-requests-with-setstate-in-react

    render() {
        return(
                <div>
                    <p>Working out {this.state.session.muscles_worked} on {this.state.session.date}</p>
                    {/* render workoutlist here */}
                </div>
        )
    }   
      
}
