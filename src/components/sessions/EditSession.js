import React from 'react';

export default class EditSession extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            muscles_worked: this.props.location.state
        };
    }
    
    handleChange = (event) => {
        this.setState({muscles_worked: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/sessions/${this.props.match.params.id}`, {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
        }).then(window.location.href = `http://localhost:1234/sessions/`)
        .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
            <h2>Edit Session id:{this.props.match.params.id}</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="muscles_worked" defaultValue={this.state.muscles_worked} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
}
