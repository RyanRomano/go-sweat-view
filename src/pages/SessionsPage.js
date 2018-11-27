import React from 'react';
import SessionsListComponent from '../components/SessionsListComponent';

export default class HomePage extends React.Component {

    render() {
        return(
            <div>
                {/* // <NewSessionButtonComponent/> or something */}
                <h1>All sessions</h1>
                <SessionsListComponent/>
            </div>
        )
    }
}