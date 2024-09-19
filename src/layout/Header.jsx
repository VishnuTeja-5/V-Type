import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full flex justify-center items-center border-b border-emerald-800 p-2 bg-transparent'>
      <Link to={'/'}>
        <div className=' border border-gray-600 rounded-md w-full p-2 flex justify-center items-center text-emerald-400 font-semibold text-3xl'>
          V-Type..
        </div>
        
      </Link>
    </div>
  )
}

export default Header