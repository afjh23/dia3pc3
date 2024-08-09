import React from 'react'

export const Home = () => {
  return (
    <main className='flex flex-row h-full'>
      <div className='flex-1 p-8 px-64 flex flex-col justify-center place-content-evenly gap-5 h-full'>
      <span className='uppercase text-xl'>So, you want to travel to </span>
      <span className='uppercase text-9xl'>Space</span>
       Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </div>
      <div className='flex-1 flex items-end pb-8'>
        <div className='w-64 h-64 bg-white rounded-full flex justify-center items-center'> 
          <span className='uppercase text-2xl text-gray-900'>Explore</span></div>
      </div>
    </main>
  )
}
