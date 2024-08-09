import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import {Layout} from './layouts/Layout'
import { Home } from './pages/Home'
import { Destination } from './pages/Destination'
import { Crew } from './pages/Crew'
import { Technology } from './pages/Technology'

export default function AppRouter() {
  return (
    <>
       <Routes>
      {/* El Layout envuelve todas las rutas */}
      <Route path="/" element={<Layout />}>
        {/* Las rutas hijas son renderizadas dentro del Layout */}
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Route>
    </Routes>
    </>


  )
}
