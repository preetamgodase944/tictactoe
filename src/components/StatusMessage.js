import React from 'react'

const StatusMessage = ({winner, current}) => {
  // const message = winner 
  //  ? `Winner is ${winner}` 
  //  : `Next Player is ${ current.isXNext ? 'X' : '0'}`;


  //every =>method is an method avilable for array in js and will run th ecallback function for each element must return a boolean value, this returns true only if this func. on each element returns True
  const noMovesLeft = current.board.every((e1)=> e1 !== null)

  return (
    <div className="status-message">
      {winner && <>
        winner is 
        {' '}
        <span className={winner === 'X' ? 'text-green' :' text-orange'}>
          {winner}
        </span>
      </>}
      {!winner && !noMovesLeft && 
      <>
      Next Player is <span className={current.isXNext? 'text-green' :'text-orange'}>{current.isXNext ? 'X' : '0'}</span>
      </>}
      {!winner && noMovesLeft && <>
      <span className="text-green">X</span> and <span className='text-orange'>0</span> tied
      </>}
    </div>
  )
};

export default StatusMessage


//to conditionally render the page we needto use { } and inside it && is for  condition