import React from 'react'

const StatusMessage = ({winner, current}) => {
  // const message = winner 
  //  ? `Winner is ${winner}` 
  //  : `Next Player is ${ current.isXNext ? 'X' : '0'}`;


  //every =>method is an method avilable for array in js and will run th ecallback function for each element must return a boolean value, this returns true only if this func. on each element returns True
  const noMovesLeft = current.board.every((e1)=> e1 !== null)

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !noMovesLeft && `Next Player is ${ current.isXNext ? 'X' : '0'}`}
      {!winner && noMovesLeft && `X and 0 tied`}
    </h2>
  )
};

export default StatusMessage


//to conditionally render the page we needto use { } and inside it && is for  condition