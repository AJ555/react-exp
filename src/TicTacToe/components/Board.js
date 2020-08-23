import React, { PureComponent } from "react";
/**
 * responsible for building the squares in the game and passing current state to the square
 */
class Board extends PureComponent {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

/**
 * Square in the game to display X/O. this is a presentational component
 * @param props has value X/O and onclick event
 */
function Square(props) {
  return (
    <div className="square" onClick={() => props.onClick()}>
      {props.value}
    </div>
  );
}

export default Board;
