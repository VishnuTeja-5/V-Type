import React from "react";

import { Vortex,TextTyping,Button } from "../Components";

function VortexDemo() {
  return (
    (<div
      className="w-full mx-auto rounded-md h-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center w-full h-full">
        <div className='w-full h-full border border-gray-700 rounded-lg text-emerald-600 flex flex-col justify-center bg-zinc-950 backdrop-blur-[3px] bg-opacity-20 lg:grid lg:grid-cols-12 '>

            <div className='w-full h-full p-2 flex flex-col gap-4 justify-center border-collapse rounded-t-lg bg-zinc-950 bg-opacity-30 lg:col-start-1 lg:col-end-6 lg:rounded-bl-lg lg:rounded-tr-none'>
                <h2 className='flex justify-center items-center bg-clip-text text-transparent font-bold bg-gradient-to-br from-sky-800 to-teal-600 p-1 text-center sm:text-lg md:text-2xl lg:text-2xl'>
                    Welcome to V-Type.<br /> A fast and free online coding platform. 
                </h2>
                
                <h1 className='flex justify-center items-center text-5xl p-2'>
                    <TextTyping />
                </h1>

                <Button />
            </div>
            <div className='w-full h-full p-2 border-collapse rounded-b-lg bg-zinc-950 bg-opacity-30 flex justify-center items-center lg:col-start-6 lg:col-end-13 lg:rounded-tr-lg lg:rounded-bl-none'>
                <img className='p-4 bg-transparent w-[85%] lg:w-full' src='editor.gif' alt='editor img' />
            </div>
        </div>
      </Vortex>
    </div>)
  );
}

export default VortexDemo;
