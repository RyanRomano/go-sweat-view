import React from 'react';

export default class EditSession extends React.Component {

    render() {
        return (
            <div>
                <p>Hello world! Edit Session # {this.props.match.params.id} here.</p>
            </div>
        )
    }
}
