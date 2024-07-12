import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomNavLink = ({ label, link }) => {
  return (
    <NavLink
      className={({ isActive }) => `relative cursor-pointer select-none ease-in duration-200 text-white ${isActive ? 'active' : ''}`}
      to={link}
    >
      {label}
      <span className='underline-animation absolute bottom-0 left-1/2 h-[2px] bg-white transition-all duration-200 ease-in-out transform -translate-x-1/2'></span>
    </NavLink>
  )
}

export default CustomNavLink
