import React from 'react'

const End = ({score,setQid,setStop}) => {

  const handleClick = () => {
    setQid(1);
    setStop(false);
  }

  return (
    <div className='end'>
      <h1 className="endText">You Have Earned : {score}</h1>
      <button className='endButton' onClick={handleClick}>Start Again</button>
    </div>
  )
}

export default End
