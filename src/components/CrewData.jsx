import React from 'react'

export const CrewData = ({ crew, setSelectedCrew, selectedCrewIndex, crewList }) => {
  return (
    <div className='flex flex-col h-max py-16 gap-4'>
        <h2 className='text-2xl uppercase text-gray-500'>{crew.role}</h2>
        <h1 className='text-5xl uppercase '>{crew.name}</h1>
        <p className='max-w-[700px]'>{crew.bio}</p>
        <ul className='flex flex-row gap-8 mt-16'>
            {crewList.map((_, index) => (
                <li 
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer ${selectedCrewIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                    onClick={() => setSelectedCrew(index)}
                />
            ))}
        </ul>
    </div>
  )
}