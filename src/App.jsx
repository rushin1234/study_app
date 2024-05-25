import React from 'react'
import Home from './pages/Home/Home'
import PYQ from './pages/PYQ/PYQ'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/PYQ/:subject' element={<PYQ />} />
    </Routes>
  )
}

export default App