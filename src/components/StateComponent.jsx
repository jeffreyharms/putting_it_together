import React, { Component } from 'react'

export class StateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: props.propsAge
        }
    }

    render() {
        const birthdayTime = () => {
            this.setState({age: this.state.age +1})
        }
    return (
        <div>
            <button onClick={() => this.setState({age: this.state.age+1})}>Severe Trauma</button>
            <button onClick ={birthdayTime}>Birthday Time!</button>
            <h3>Age: {this.state.age}</h3>
        </div>
    )
    }
}

export default StateComponent