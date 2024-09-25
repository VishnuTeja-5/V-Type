import React from 'react';
import { Bullets } from '../Components'

const Features = () => {
    const array = [
        'No complex setup required',
        'One click to submit & run code',
        'Performance metrics will be shown after compiling',
        'We support upto 40+ languages',
        'We provide 50 code editor themes',
        'Eyecatchy U.I',
        'Easy to use',
        'All these features for free'
      ];


  return (
    <div className='w-full min-h-fit mt-2 p-4 border rounded-xl border-gray-700 grid grid-cols-12 grid-rows-9 md:grid-rows-5 lg:grid-rows-3 overflow-hidden'>
      <div className='w-20 h-20 bg-gradient-to-r from-cyan-800 to-teal-600 rounded-full blur-xl col-start-1 -z-10 opacity-80'></div>
      <div className='w-32 h-32 bg-gradient-to-r from-cyan-800 to-teal-600 rounded-full blur-xl col-start-4  row-start-12 -z-10 opacity-30'></div>
      <div className='w-40 h-40 bg-gradient-to-r from-cyan-800 to-teal-600 rounded-full blur-2xl col-start-12 row-start-11 -z-10 opacity-30'></div>
      <div className='w-12 h-12 bg-gradient-to-r from-cyan-800 to-teal-600 rounded-full blur-xl col-start-7 row-start-3 -z-10 opacity-70'></div>
      <div className='w-14 h-14 bg-gradient-to-r from-cyan-800 to-teal-600 rounded-full blur-xl col-start-10 row-start-1 -translate-y-11 -z-10 opacity-90'></div>


      <div className='absolute left-0 w-full overflow-hidden flex flex-col gap-6 col-start-1 row-start-1'>
        
        <h1 className='bg-clip-text text-transparent font-bold bg-gradient-to-br from-sky-800 to-teal-600 text-5xl flex justify-center items-center ' > Our Features </h1>
        
        <div className='flex flex-col gap-4 md:grid md:grid-cols-2 gap-y-4 lg:grid-cols-3 overflow-hidden'>
        {
          array.map((ele,key) => (
            <div key={key} >
            <Bullets delay={0.6}>
            <p className='min-h-[6rem] md:min-h-32 flex justify-center items-center text-center text-teal-500 text-lg border border-gray-700 px-4 py-2 mx-12 bg-clip-text text-transparent font-semibold bg-gradient-to-r from-sky-800 to-teal-600 bg-opacity-50 backdrop-blur-sm rounded-lg text-opacity-65'>
              {ele} 
            </p>
          </Bullets>
          </div>
          ))
        }
        </div>
      </div>
      
      
    </div>
  )
}

export default Features
