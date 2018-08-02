import React, { Component } from 'react';
import './AddUserButton.css';

class AddUserButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.handler}> {`${this.props.buttonText}`}- is this correct? </button>
        );
    }
}
export default AddUserButton