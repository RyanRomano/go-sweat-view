import React from 'react';
import NewSessionComponent from '../components/NewSessionComponent';

export default class NewSession extends React.Component {

    render() {
        return(
            <div>
                <h2>Create a new session!</h2>
                <NewSessionComponent/>
            </div>
        )
    }
}