import React from 'react'

export const CrewImage = ({crew:{images:{png}}}) => {
  return (
    <div className='w-full h-full overflow-hidden flex justify-center items-center'>
      <img className="object-cover w-full h-full max-h-[100%] max-w-[100%]" src={png}></img>
    </div>
  )
}
