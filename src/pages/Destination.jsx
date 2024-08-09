import React, { useState } from 'react'
import { DestinationImage } from '../components/DestinationImage'
import { DestinationData } from '../components/DestinationData'
import { useData } from '../contexts/DataContext'

export const Destination = () => {
  const { data } = useData()
  const [selectedDestination, setSelectedDestination] = useState(data.destinations[0])
  console.log(data.destinations)
  return (
    <main className='w-full  flex flex-col gap-8 px-32'>
      <h2 className='text-xl'><span className='text-gray-600'>01</span> PICK YOUR DESTINATION</h2>
      <div className='flex flex-row gap-8'>
        <DestinationImage image={selectedDestination.images.png} />
        <DestinationData
          selectedDestination={selectedDestination}
          setSelectedDestination={setSelectedDestination}
          destinations={data.destinations}
        />
      </div>

    </main>
  )
}
