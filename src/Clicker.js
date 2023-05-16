import React from 'react'

export const Clicker = () => {

    const handleClick = (message)=>{
        console.log(message);
    }

  return (
    <div>
        <button onClick={()=> handleClick("Up") }>Up</button>
        <button onClick={()=> handleClick("Down") }>Down</button>
    </div>
  )
}
