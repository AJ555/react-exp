import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Counter from "./Counter/counter";
import { Switch } from "react-router-dom";
// import TicTacToe from "./TicTacToe/tictactoe";
class App extends Component {
  render() {
    return (
      <div className="main-container-app">
        <p>This message is from a class component</p>
        <h1>Hello World</h1>
        <Welcome name="User"></Welcome>
        <p>Click on the links to navigate further:</p>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ol>

        <Switch>
          <Route path="/counter" exact component={Counter} />
          <Route path="/" exact>
            <h1>Hello from the homepage!</h1>
          </Route>
          <Route path="/*" render={() => <h1>404 Not Found.</h1>} />
        </Switch>
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
