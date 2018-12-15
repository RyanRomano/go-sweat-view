import React from 'react';

export default class SaveSession extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            session_id: this.props.match.params.id,
            muscles_worked: '',
            edit_mode: false
        };
        this.db_server = process.env.SERVER;
        this.client_server = process.env.DEV;
    }

    componentDidMount(){
        if(this.props.match.url.endsWith('edit')){
            this.setState({edit_mode: true});
            this.fetchSession();
        }
    }

    fetchSession = () => {
        fetch(`http://${this.db_server}/sessions/${this.state.session_id}`)
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
        const newSession = {
            muscles_worked: this.state.muscles_worked
        }
        if(!this.state.edit_mode){
            Object.assign(newSession, {date: new Date().toISOString()});
            fetch(`http://${this.db_server}/sessions/`, {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(newSession)
            })
            .then(window.location.href = `http://${this.client_server}/sessions`)
            .catch(error => console.error(error)); 
        } else {
            fetch(`http://${this.db_server}/sessions/${this.state.session_id}`, {
                method: 'put',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(newSession)
                })
            .then(window.location.href = `http://${this.client_server}/sessions/`)
            .catch(error => console.error(error));
        }
    }
    
    render() {
        return (
        <div>
            <h3>{!this.state.edit_mode ? "New Session" : "Edit Session"}</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p>{!this.state.edit_mode ? `What do you want to work on today?` : ``}</p>
                    <input type="text" value={this.state.muscles_worked} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}
