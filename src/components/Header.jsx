import React from 'react'
import image from '../assets/header_img.png'

function Header() {
  return (
    <div className=' place-items-center px-20 py-25'>
        <img className='w-25 rounded-full bg-amber-200' src={image} alt="" />     
        <h2 className='gap-0.5 text-2xl text-shadow-50'>Hey Developer </h2>
        <h1 className='text-4xl text-shadow-current text-black'>Welcom to Jackspear Authentication </h1>
        <p className=''>Lets start with a quick poduct tour and and we will have you up and runing in on time</p> 
        <div className='px-2 py-1 rounded-full bg-white text-1 hover:scale-105 active:scale-100 cursor-pointer border border-blue-10 place-items-center'>
        <button>Get Started</button>
        </div>
    </div>
  )
}

export default Header
