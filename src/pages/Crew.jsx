import React, { useState } from 'react'
import { CrewData } from '../components/CrewData'
import { CrewImage } from '../components/CrewImage'
import { useData } from '../contexts/DataContext'

export const Crew = () => {
  const {data} =useData()
  const [selectedCrewIndex, setSelectedCrewIndex] = useState(0)
  
  const selectedCrew = data.crew[selectedCrewIndex]

  return (
    <main className='w-full flex flex-col gap-8 px-32'>
      <h2 className='text-xl'><span className='text-gray-600'>02</span> MEET YOUR CREW</h2>
      <div className='flex flex-row gap-8'>
        <CrewData 
          crew={selectedCrew} 
          setSelectedCrew={setSelectedCrewIndex} 
          selectedCrewIndex={selectedCrewIndex}
          crewList={data.crew}
        />
        <CrewImage crew={selectedCrew} />
      </div>
    </main>
  )
}
