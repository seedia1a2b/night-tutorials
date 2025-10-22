import React from 'react'
import image from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-6 items-center'>
      <img className='w-30' src={image} alt="" />
  <button className='px-6 py-1.5 rounded-full bg-800 text-black hover:-400 hover:scale-105 active:scale-100 cursor-pointer  border ' >login</button>
    </div>
  )
}

export default Navbar
 