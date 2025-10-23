import React from 'react'
import image from '../assets/logo.svg'
import arrow_icon from '../assets/arrow_icon.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-6 items-center'>
      <img className='w-30' src={image} alt="" />
  <button className='px-6 py-1.5 rounded-full bg-800 text-black hover:-400 hover:scale-105 active:scale-100 cursor-pointer  border flex items-center gap-2' >login <img src={arrow_icon} className=' w-3' alt="" /></button>
    </div>
  )
}

export default Navbar
 