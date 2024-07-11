import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Analyse from '../pages/Analyse'
import Patient from '../pages/Patient'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/analyse' element={<Analyse />} />
        <Route path='/patient' element={<Patient />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRouter
