import React, { useState } from 'react'
import { TechnologyData } from '../components/TechnologyData'
import { TechnologyImage } from '../components/TechnologyImage'
import { useData } from '../contexts/DataContext'

export const Technology = () => {
  const {data} =useData()
  const [selectedTechnologyIndex, setSelectedTechnologyIndex] = useState(0)

  const selectedTechnology = data.technology[selectedTechnologyIndex]

  return (
    <main className='w-full  flex flex-col gap-8 px-32'>
      <h2 className='text-xl'><span className='text-gray-600'>03</span> SPACE LAUNCH 101</h2>
      <div className='flex flex-row gap-8'>
        <TechnologyData 
          selectedTechnology={selectedTechnology} 
          setSelectedTechnology={setSelectedTechnologyIndex} 
          selectedTechnologyIndex={selectedTechnologyIndex}
          technologyList={data.technology}
        />
        <TechnologyImage image={selectedTechnology.images.portrait} />
      </div>
    </main>
  )
}
