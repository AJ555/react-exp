import React, { Component } from "react";
// import { Router, Route } from "react-router";
import "./App.css";
// import TicTacToe from "./TicTacToe/tictactoe";
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <p>This message is from a class component</p>
        <h1>Hello World</h1>
        <Welcome name="User"></Welcome>
        <p>Click on the links to navigate further:</p>
        <ol>
        
        </ol>
      </div>
    );
  }
}

function Welcome(props) {
  return (
    <div>
      <p>This message is from a functional component</p>
      <h1>Welcome, {props.name}</h1>
    </div>
  );
}

export default App;
