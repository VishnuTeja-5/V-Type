import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full flex justify-center items-center border-b border-teal-800 p-2 bg-transparent'>
      <Link to={'/'}>
        <div className='rounded-md w-full p-2 flex justify-center items-center text-teal-600 font-semibold text-3xl'>
          <img src='./public/images/Logo.png' alt='logo' className='w-40 h-auto'></img>
        </div>
        
      </Link>
    </div>
  )
}

export default Header