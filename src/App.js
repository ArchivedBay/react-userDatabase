import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';
import DatabaseFields from './components/DatabaseFields/DatabaseFields';
import Button from './components/Button/Button';

class App extends Component {

  state = {
    userNameDynamic: 'someName',
    userNameStatic: 'foodLover9679',
    showContent: false,
    people: [
      { firstName: 'Alex', lastName: 'Smith' },
      { firstName: 'Sarah', lastName: 'Simmons' },
      { firstName: 'Astonia', lastName: "Du'jeane" },
      { firstName: 'Marissa', lastName: 'Branford' },
    ]
  }

  inputEventHandler = (event) => {
    this.setState({
      userNameDynamic: event.target.value
    });
  }

  toggleContentHandler = () => {
    let currentState = this.state.showContent;
    this.setState({
      showContent: !currentState
    });
  }

  addUserHandler = () => {
    let newVal = this.state.userNameDynamic.split(' ');
    if (newVal.length === 2) { //if and only if the length is 2, i.e it's a first and a last name
      console.log(newVal);
      this.setState({
        people: [...this.state.people, {
          firstName: newVal[0], lastName: newVal[1]
        }]
      })
    }
  }


  render() {
    let contentToRender = null;

    if (this.state.showContent) {
      contentToRender = (
        <div>
          <DatabaseFields data={this.state.people} /> {/* Pass our data objects into the fields */}
        </div>
      );
    }

    return (
      <div className="App">
        <Button toggleContent={this.toggleContentHandler} />
        <UserInput handleInput={this.inputEventHandler} />
        <UserOutput
          usernameDynamic={this.state.userNameDynamic}
          usernameStatic={this.state.userNameStatic}
          addUser={this.addUserHandler}
        />

        {contentToRender} {/* our data table can be shown / hidden this way. */}
      </div>

    );
  }
}
export default App;
