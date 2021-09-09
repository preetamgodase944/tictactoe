import React,{ useState } from "react";
import Board from "./components/Board"
import { calculateWinner } from "./helpers"
import "./styles/root.scss";

const App =() => {
   const [board, setBoard] = useState( Array(9).fill(null) );
   const [isXNext, setIsXNext] = useState(false);//for player
  //useState is a hook,all the hooks's start with 'use'
  //  states are used to represent state of something,
  //here using the useStates we are creating an array of size 9 and initializing its elements to null 
  //useStates returns two arrays one initial and another new one so we are destructuring it
   const winner = calculateWinner(board);
   const message = winner ? `Winner is ${winner}` : `Next Player is ${ isXNext ? 'X' : '0'}`;

   const handleSquareClick = position => {

    if( board[position] || winner ){
      return;
    }
    setBoard( previous => {
      return previous.map((squareCurVal,curPos)=>{
        if(curPos === position){
          return isXNext ? 'X': '0';
        }
        return squareCurVal;
      });
    } );
    setIsXNext((previous) => !previous);
   };
   
   
  return (
   <div className="app"> 
      <h1>TIC TAC TOE</h1>
      <h2>{ message }</h2>
      <Board board = {board} handleSquareClick ={handleSquareClick}/>   
   </div>
  )
};

export default App;
