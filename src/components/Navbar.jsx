import React from 'react'

import { assets } from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-6 items-center'>
      <img className='w-30' src={assets.logo} alt="" />
      <button className='px-6 py-2 rounded-full hover:bg-red-400 hover:scale-105 active:scale-100 cursor-pointer flex gap-2 border'>login <img src={assets.arrow_icon} alt="" /></button>
    </div>
  )
}

export default Navbar
 