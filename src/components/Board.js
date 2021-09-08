import React,{ useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState( Array(9).fill(null) );
  const [isXNext, setIsXNext] = useState(false);//for player
  //useState is a hook,allthe hooks's start with 'use'
  //  states are you used to represent state of something,
  //here using the useStates we are creating an array of size 9 and initializing its elements to null 
  //useStates returns two arrays one initial and another new one so we are destructuring it
  
  const handleSquareClick = position => {

    if( board[position]){
      return;
    }
    setBoard( previous => {
      return previous.map((square,pos)=>{
        if(pos === position){
          return isXNext ? 'X': '0';
        }
        return square;
      });
    } );
    setIsXNext((previous) => !previous);
  };
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
