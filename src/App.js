import React,{ useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./helpers"
import "./styles/root.scss";

const NEW_GAME =[
  {board: Array(9).fill(null),isXNext:false},
]

const App =() => {
  //  const [History, setBoard] = useState( Array(9).fill(null) );
  //  const [isXNext, setIsXNext] = useState(false);//for player
  //useState is a hook,all the hooks's start with 'use'
  //  states are used to represent state of something,
  //here using the useStates we are creating an array of size 9 and initializing its elements to null 
  //useStates returns two arrays one initial and another new one so we are destructuring it

  const [ history, setHistory ] = useState( NEW_GAME );

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  
   const {winner,winningSquares} = calculateWinner(current.board);
   

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
    
    setCurrentMove(previous => previous+1);

   };

   const moveTo = (move)=>{
     setCurrentMove(move);
   }
   
   const setNewGame=()=>{
     setHistory(NEW_GAME)
     setCurrentMove(0)
   }
  return (
   <div className="app"> 
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner= { winner } current = {current}/>
      <Board board = {current.board} handleSquareClick ={handleSquareClick} winningSquares={winningSquares}/>  
      <button type="button" onClick={setNewGame} 
      className={`btn-reset ${winner ? 'active' : ''}`}> Set New Game</button> 
      <h2 style={{fontWeight: 'normal'}}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove = {currentMove}/>
    <div className='bg-balls'></div>
   </div>
  );
};

export default App;
