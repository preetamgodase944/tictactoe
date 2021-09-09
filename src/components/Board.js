import React from 'react';
import Square from './Square';

const Board = ({board, handleSquareClick}) => {

  
  
  console.log(board);
  const renderPosition= (position) =>{
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}/>
    );

  };
  return (
    <div className="board">
      <div className="board-row">
        { renderPosition(0) }
        { renderPosition(1) }
        { renderPosition(2) }
      </div>
      <div className="board-row">
        { renderPosition(3) }
        { renderPosition(4) }
        { renderPosition(5) }
      </div>
      <div className="board-row">
        { renderPosition(6) }
        { renderPosition(7) }
        { renderPosition(8) }
      </div>
    </div>
  )
};

export default Board;


//only in react class are written as className



//if we want to add a message above the Board we can do it in either The div board here or in app component before the <Board /> Component
//if we add it in this App component we won't have access to the state board and the handleSquareClick method
//so we want to have this state and handleSquareClick method in App.js and we pass board state and the method as properties of board element in App component