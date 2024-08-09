import React from 'react'

export const DestinationData = ({ selectedDestination, setSelectedDestination, destinations }) => {
    return (
        <div className='flex-1 mx-20'>

            <ul className='flex flex-row gap-4'>
                {destinations.map((destination) => (
                    <li
                        key={destination.name}
                        className={`cursor-pointer ${selectedDestination.name === destination.name ? 'font-bold border-b-2' : ''}`}
                        onClick={() => setSelectedDestination(destination)}
                    >
                        {destination.name.toUpperCase()}
                    </li>
                ))}
            </ul>

            <h1 className='uppercase text-7xl my-6'>{selectedDestination.name}</h1>
            <span>{selectedDestination.description}</span>
            <div className='w-full h-px mt-8 bg-slate-700 my-4'></div>
            <div className='flex flex-row gap-8'>
                <div className='flex flex-col'>
                    <span className='text-sm'>AVG. DISTANCE</span>
                    <span className='uppercase text-xl font-bold'>{selectedDestination.distance}</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm'>EST. TRAVEL TIME</span>
                    <span className='uppercase text-xl font-bold'>{selectedDestination.travel}</span>
                </div>
            </div>
        </div>
    )
}
