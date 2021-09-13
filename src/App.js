import React,{ useState } from "react";
import Board from "./components/Board"
import { calculateWinner } from "./helpers"
import "./styles/root.scss";

const App =() => {
  //  const [board, setBoard] = useState( Array(9).fill(null) );
  //  const [isXNext, setIsXNext] = useState(false);//for player
  //useState is a hook,all the hooks's start with 'use'
  //  states are used to represent state of something,
  //here using the useStates we are creating an array of size 9 and initializing its elements to null 
  //useStates returns two arrays one initial and another new one so we are destructuring it

  const [ history, setHistory ] = useState( [
    {board: Array(9).fill(null),isXNext:false},
  ] );

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  
   const winner = calculateWinner(current.board);
   const message = winner 
   ? `Winner is ${winner}` 
   : `Next Player is ${ current.isXNext ? 'X' : '0'}`;

   console.log(history);

   const handleSquareClick = (position) => {

    if( current.board[position] || winner ){
      return;
    }

    setHistory( previous => {
      const last = previous[previous.length-1];
      const newBoard = last.board.map((squareCurVal,curPos)=>{//ths will traverse through the board array (sqyuareCurVal is the value at the curPos -position)
        if(curPos === position){
          return last.isXNext ? 'X': '0';
        }
        return squareCurVal;
      });
      return previous.concat({board: newBoard, isXNext: !last.isXNext});
    } );
    // setIsXNext((previous) => !previous);
    
    setCurrentMove(previous=>previous+1);

   };
   
   
  return (
   <div className="app"> 
      <h1>TIC TAC TOE</h1>
      <h2>{ message }</h2>
      <Board board = {current.board} handleSquareClick ={handleSquareClick}/>   
   </div>
  )
};

export default App;
