
import { Link } from 'react-router-dom'
import { TextMotion, TextTyping } from './Components'

function App() {

  return (
    <>
    <div className='w-full h-full border border-emerald-900 rounded-lg border-cyan-80 text-emerald-600 flex flex-col justify-center bg-img lg:grid lg:grid-cols-12 '>

      <div className='w-full h-full p-2 flex flex-col gap-2 justify-center border-collapse rounded-t-lg bg-zinc-950 backdrop-blur-sm bg-opacity-50 col-start-1 col-end-6 lg:rounded-bl-lg'>
        <h2 className='flex justify-center items-center p-1 text-center sm:text-lg md:text-2xl lg:text-2xl'>
          Welcome to V-Type. A fast and free online coding platform. 
        </h2>
        
        <h1 className='flex justify-center items-center text-5xl p-2'>
        <TextTyping />
        </h1>

        <p className='flex justify-center items-center p-3' >
          <button className='flex justify-center items-center border rounded-lg border-cyan-900 p-2 text-teal-600 bg-slate-800 backdrop-blur-sm bg-opacity-35 hover:scale-[1.15] duration-[250ms] hover:bg-gradient-to-tr hover:from-teal-900 hover:to-cyan-950 hover:backdrop-blur-sm hover:bg-opacity-35'>

           <Link to={'/code'}> Lets Code &#10137; </Link>
          </button>
        </p>
        
      </div>
      <div className='p-2 w-full h-full rounded-b-lg bg-zinc-950 backdrop-blur-sm bg-opacity-50 flex justify-center items-center lg:col-start-6 lg:col-end-13 lg:rounded-tr-lg'>
        <img className='p-4 w-[85%] lg:w-full' src='editor.png' alt='editor img' />
      </div>
    </div>
    <div className='w-full h-auto rounded-lg mt-1 flex justify-center items-center p-4 text-emerald-500 border border-emerald-900 backdrop-blur-md bg-opacity-50'>
      <p className='text-center text-lg'>
        Our platform is compatible with 40+ languages. You can work with almost every desired language without any limitations. 
      </p>
    </div>
    </>
  )
}

export default App
