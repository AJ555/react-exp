import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import Counter from "./Counter/counter";

// import App from "./App";
// import TicTacToe from "./TicTacToe/tictactoe";
// import { Router, Route } from "react-router";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router>
      <Route path="/" component={App}>
      </Route>
    </Router> */}
    <Counter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
