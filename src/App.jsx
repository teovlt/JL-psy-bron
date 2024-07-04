import React from 'react'
import AppRouter from './router/router.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
