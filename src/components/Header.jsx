import React from 'react'
import image from '../assets/header_img.png'
import hand_wave from '../assets/hand_wave.png'

function Header() {
  return (
    <div className=' place-items-center px-20 py-25 bg-amber-'>
        <img className='w-25 rounded-full bg-amber-200' src={image} alt="" />  

        <h2 className=' text-2xl text-shadow-50 text-center flex items-center gap-3 mb-4 '>Hey Developer <img src={hand_wave}  className='w-8' alt="" /> </h2>

        <h1 className='text-4xl text-shadow-current text-black text-center'>Welcom to Jackspear Authentication </h1>

        <p className='text-center'>Lets start with a quick poduct tour and and we will have you up and runing in on time</p> 

        <div className='px-2 py-1 rounded-full bg-white text-1 hover:scale-105 active:scale-100 cursor-pointer border border-blue-10 place-items-center mt-4'>
        <button>Get Started</button>
        </div>
    </div>
  )
}

export default Header
