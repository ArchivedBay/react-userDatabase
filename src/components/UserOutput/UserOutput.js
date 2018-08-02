import React, { Component } from 'react';
import './UserOutput.css';
import AddUserButton from '../../components/AddUserButton/AddUserButton'

class UserOutput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="UserOutput">

                <div className="block">
                    <h3>Static State-based Username: </h3>
                    <h1>{this.props.usernameStatic}</h1>
                    <p>Note: this does not change.</p>
                </div>

                <div className="block">
                    <h3>Dynamic State-based Username: </h3>
                    <AddUserButton buttonText={this.props.usernameDynamic} handler={this.props.addUser} />
                    <p>
                        Note: this DOES change
                        based on the input you type above.
                    </p>
                </div>


            </div>

        );
    }
}
export default UserOutput