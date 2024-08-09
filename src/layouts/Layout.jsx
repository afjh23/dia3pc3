import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import {Header} from '../components/Header'

export const Layout = () => {
    const location = useLocation()
    const getBackgroundClass = () => {
        switch (location.pathname) {
          case '/destination':
            return 'bg-destination';
          case '/crew':
            return 'bg-crew';
          case '/technology':
            return 'bg-technology';
          default:
            return 'bg-home';
        }
    }
  return (
    <div className={`min-h-screen flex flex-col bg-cover bg-center ${getBackgroundClass()} text-white`}>
      <Header />
      <div className="max-h-[600px]  max-w-7xl mt-20 mx-auto mb-16">
        <Outlet />
      </div>
    </div>
  )
}
