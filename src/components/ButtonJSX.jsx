import React from 'react'
import confetti from 'canvas-confetti'

function ButtonJSX() {

  const confettiFunc = () => {
    confetti()
  }

  return (
    <button 
      onClick={() => confettiFunc()} 
      className='bg-red-500'>This is a test
    </button>
  )
}

export default ButtonJSX