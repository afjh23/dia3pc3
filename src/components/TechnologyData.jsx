import React from 'react'

export const TechnologyData = ({ selectedTechnology, setSelectedTechnology, selectedTechnologyIndex, technologyList }) => {
  return (
    <div className='flex flex-row gap-6 w-3/5'>
        <ul className='flex flex-col gap-6'>
            {technologyList.map((tech, index) => (
                <li
                    key={index}
                    className={`w-20 h-20 rounded-full border-2 flex justify-center items-center text-2xl cursor-pointer 
                    ${selectedTechnologyIndex === index ? 'bg-white text-gray-900 border-none' : ' text-white border-gray-500'}`}
                    onClick={() => setSelectedTechnology(index)}
                >
                    {index + 1}
                </li>
            ))}
        </ul>
        <div className='flex flex-col gap-4'>
            <span className='uppercase'>The terminology...</span>
            <h1 className='uppercase text-6xl mb-4'>{selectedTechnology.name}</h1>
            <span className='w-4/5'>{selectedTechnology.description}</span>
        </div>
    </div>
  )
}
