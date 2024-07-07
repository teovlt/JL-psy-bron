import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Analyse from '../pages/Analyse'
import Patient from '../pages/Patient'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/analyse' element={<Analyse />} />
        <Route path='/patient' element={<Patient />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
