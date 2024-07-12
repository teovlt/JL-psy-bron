import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FaPhoneVolume } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Navbar = () => {
  const call = () => {
    window.open('tel:0682293504')
  }

  return (
    <div className='flex justify-between bg-primary select-none py-2 px-5 md:px-20 md:py-2'>
      <div className='flex items-center flex-col gap-x-2 cursor-pointer'>
        <div className='flex items-center gap-x-2 cursor-pointer'>
          <img src={logo} alt='Logo' className='w-7 h-7' />
          <Link className='text-white' to={'/'}>
            Jean-louis Clement
          </Link>
        </div>
        <div className='flex items-center gap-4 text-white'>
          <FaLocationDot />
          <a
            className='hidden md:inline-block text-white hover:underline'
            target='_blank'
            href='https://www.google.fr/maps/place/152+Av.+Franklin+Roosevelt,+69500+Bron/@45.7331485,4.906584,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4c19d4868f52f:0xfd5f8ee468e87ecb!8m2!3d45.7331448!4d4.9091589!16s%2Fg%2F11c2gpzjbm?entry=ttu'
          >
            152 Avenue Franklin Roosevelt 69500 Bron
          </a>
        </div>
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
