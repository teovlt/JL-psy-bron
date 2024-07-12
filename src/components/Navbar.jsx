import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FaPhoneVolume } from 'react-icons/fa'

const Navbar = () => {
  const call = () => {
    window.open('tel:0682293504')
  }

  return (
    <div className='flex justify-between bg-primary select-none py-2 px-5 md:px-20 md:py-4'>
      <div className='flex items-center gap-x-2 cursor-pointer'>
        <img src={logo} alt='Logo' className='w-7 h-7' />
        <Link className='text-white' to={'/'}>
          Jean-louis Clement
        </Link>
      </div>
      <div className='flex items-center gap-4 text-white'>
        {/* <CustomNavLink label='Accueil' link='/' />
        <CustomNavLink label='Le patient' link='/patient' />
        <CustomNavLink label='Analyse de la pratique' link='/analyse' /> */}
        <FaPhoneVolume />
        <p className='hover:underline cursor-pointer' onClick={call}>
          06 82 29 35 04
        </p>
      </div>
      {/* <div className='flex md:hidden items-center'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          <MdMenu className='w-8 h-8 text-white' />
        </button>
      </div>
      {isMenuOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50 overflow-hidden'>
          <div className='absolute top-4 right-4'>
            <button onClick={toggleMenu} className='focus:outline-none bg-primary p-2'>
              <MdMenu className='w-6 h-6 text-white' />
            </button>
          </div>
          <Link className='cursor-pointer select-none ease-in duration-200 py-2' to={'/'} onClick={toggleMenu}>
            Accueil
          </Link>
          <Link className='cursor-pointer select-none ease-in duration-200 py-2' to={'/patient'} onClick={toggleMenu}>
            Le patient
          </Link>
          <Link className='cursor-pointer select-none ease-in duration-200 py-2' to={'/analyse'} onClick={toggleMenu}>
            Analyse de la pratique
          </Link>
        </div>
      )} */}
    </div>
  )
}

export default Navbar
