import React, { Component } from 'react';
import './App.css';

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    exploderText: ""
  };

  textChangeHandler = (event) => {
    this.setState({
      exploderText: event.target.value
    });
  };

  destroyCharHandler = (event, index) => {
    let textArray = this.state.exploderText.split("");
    textArray.splice(index, 1);
    const newString = textArray.join("");

    this.setState({exploderText: newString});
  };

  render() {
    let characterList = null;

    if (this.state.exploderText.length > 0) {
      let textArray = this.state.exploderText.split("");

      characterList = textArray.map((character, index) => {
        return <CharComponent char={character} key={index} clickHandler={(event) => this.destroyCharHandler(event, index)}/>
      });
    }

    return (
      <div className="App">
        <h1>Text Exploder</h1>
        <hr />
        <h2>Enter your text below</h2>
        <input id="exploderTextBox" type="text" onChange={this.textChangeHandler} value={this.state.exploderText}/>
        <label htmlFor="exploderTextBox">Text must be at least 5 characters long.</label>
        <p>Your text is {this.state.exploderText.length} characters long.</p>
        <ValidationComponent textLength={this.state.exploderText.length} />
        <hr />
        <h2>Destroy your text!</h2>
        {characterList}
      </div>
    );
  }
}

export default App;
