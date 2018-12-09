import React from 'react';

export default class EditSession extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            muscles_worked: ''
        };
    }

    componentDidMount(){
        this.fetchSession();
    }

    fetchSession = () => {
        fetch(`http://localhost:3000/sessions/${this.state.id}`)
        .then(response => response.json())
        .then(session => {
            this.setState({
                muscles_worked: session[0].muscles_worked
            })
        })
        .catch(error => console.error(error));
    }
    
    handleChange = (event) => {
        this.setState({muscles_worked: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/sessions/${this.state.id}`, {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
        }).then(window.location.href = `http://localhost:1234/sessions/`)
        .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
            <h2>Edit Session id:{this.state.id}</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="muscles_worked" value={this.state.muscles_worked} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
}
