import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='flex flex-row  w-full max-w-7xl mx-auto mt-8 h-24 items-center uppercase'>
            <span >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g>
                </svg>
            </span>

            <div className='w-full h-px bg-gray-500' ></div>
            <ul className='h-full  max-w-3xl w-full  flex flex-row pl-24  gap-6 bg-black bg-opacity-25 items-center'>
                <li><Link to="/"><span className='font-bold'>00</span> Home</Link></li>
                <li><Link to="/destination"><span className='font-bold'>01</span> Destination</Link></li>
                <li><Link to="/crew"><span className='font-bold'>02</span> Crew</Link></li>
                <li><Link to="/technology"><span className='font-bold'>03</span> Technology</Link></li>
            </ul>
        </header>
    )
}
