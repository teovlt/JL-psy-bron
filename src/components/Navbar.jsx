import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { MdMenu } from 'react-icons/md'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='flex justify-between px-5 py-5 md:px-20 bg-white select-none'>
      <div className='flex items-center gap-x-2 cursor-pointer'>
        <img src={logo} alt='Logo' className='w-7 h-7' />
        <h2>Jean-louis Clement</h2>
      </div>
      <div className='hidden md:flex gap-x-10'>
        <h3 className='cursor-pointer select-none ease-in duration-200 hover:text-cyan-600'>Accueil</h3>
        <h3 className='cursor-pointer select-none ease-in duration-200 hover:text-cyan-600'>Le patient</h3>
        <h3 className='cursor-pointer select-none ease-in duration-200 hover:text-cyan-600'>Analyse de la pratique</h3>
      </div>
      <div className='flex md:hidden items-center'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          <MdMenu className='w-8 h-8' />
        </button>
      </div>
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='hidden md:flex flex-col gap-y-4'>
            <h3 className='cursor-pointer select-none ease-in duration-200 hover:text-cyan-600'>Accueil</h3>
            <h3 className='cursor-pointer select-none ease-in duration-200 hover:text-cyan-600'>Le patient</h3>
            <h3 className='cursor-pointer select-none ease-in duration-200 hover:text-cyan-600'>Analyse de la pratique</h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
