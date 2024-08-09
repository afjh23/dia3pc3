import React from 'react'

export const DestinationImage = ({image}) => {
  console.log(image)
  return (
    <div className='flex-1'>
            <img src={image}></img>
        </div>
  )
}
