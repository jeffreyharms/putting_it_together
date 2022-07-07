import React, { Component } from 'react';

export class PersonCard extends Component {
    render() {
        const {firstName, lastName, hairColor} = this.props
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Hair Color: {this.props.hairColor}</h3>
            </div>
        );
    }
}

export default PersonCard