import React from 'react';

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        )
    }
}
