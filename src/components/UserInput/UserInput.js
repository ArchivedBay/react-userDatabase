import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="UserInput">
                <h2>Please enter a username below</h2>
                <input type="text" onChange={this.props.handleInput} />



            </div>

        );
    }
}
export default UserInput;