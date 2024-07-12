import React from 'react'
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
        <FaPhoneVolume />
        <p className='hover:underline cursor-pointer' onClick={call}>
          06 82 29 35 04
        </p>
      </div>
    </div>
  )
}

export default Navbar
