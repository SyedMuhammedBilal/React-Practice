import React, { Component } from 'react';

class Welcome extends Component {
    render(){
        return (
            <h1>
                Welcome {this.props.name} your skill is {this.props.skills}
            </h1>
        )
    }
}

export default Welcome