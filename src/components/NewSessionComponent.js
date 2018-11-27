import React from 'react';

export default class NewSessionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            muscle: ''
        };
    }
    
    handleChange = (event) => {
        this.setState({muscle: event.target.value});
    }
    
    handleSubmit = (event) => {
        const data = {
            "date": new Date().toISOString(),
            "muscles_worked":this.state.muscle
        }

        fetch(`http://localhost:3000/sessions/`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(window.location.href = "http://localhost:1234/sessions")
        .catch(error => console.error(error)); 

        event.preventDefault();
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                <p>What do you want to work on today?</p>
                <br/>
                <input type="text" value={this.state.muscle} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}
