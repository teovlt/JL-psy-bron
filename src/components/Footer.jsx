import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  const call = () => {
    window.open('tel:0682293504')
  }

  return (
    <div className='flex flex-col justify-between items-center text-white bg-primary select-none py-2 px-4 md:px-20 md:py-4'>
      <div className='flex flex-col md:flex-row md:gap-4 items-center'>
        <a
          className='hover:underline cursor-pointer flex items-center gap-2'
          target='_blank'
          href='https://www.google.fr/maps/place/152+Av.+Franklin+Roosevelt,+69500+Bron/@45.7331485,4.906584,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4c19d4868f52f:0xfd5f8ee468e87ecb!8m2!3d45.7331448!4d4.9091589!16s%2Fg%2F11c2gpzjbm?entry=ttu'
        >
          <FaLocationDot />
          <span>152 Avenue Franklin Roosevelt 69500 Bron</span>
        </a>
        <p className='hover:underline cursor-pointer flex items-center gap-2' onClick={call}>
          <FaPhoneVolume />
          <span>06 82 29 35 04</span>
        </p>
      </div>
      <span className='text-center md:text-right mt-4 md:mt-0'>Copyright ©2024 par Jean-louis Clement | Tout droit reservés.</span>
    </div>
  )
}

export default Footer
