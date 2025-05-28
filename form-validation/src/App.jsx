import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full bg-white  flex md:flex-row flex-col' >
        <div className='md:w-1/2 min-h-screen flex flex-col gap-2 justify-center items-center p-6'>
          <h1 className='font-bold text-2xl md:text-4xl text-orange-500'>Agile Tribers</h1>
          <h4>Software Company Nagercoil</h4>
        </div>
        <div className='md:w-1/2 min-h-screen flex flex-col justify-center items-center p-4'>
        
        <form action="" className='flex flex-col w-60 md:w-80'>
        <div className='flex justify-start'>
        <h1 className='text-orange-400 font-bold text-xl mb-3'>Agile Tribers</h1>
        </div>
          <label htmlFor="name" className='mb-2'>Name : </label>
          <input type="text" name='name' id='name' placeholder='Enter Name'
           className='mb-2 outline-none border-none bg-gray-300 rounded-lg p-2' />
          <label htmlFor="email" className='mb-2'>Email : </label>
          <input type="email" name='email' id='email' placeholder='Enter Email'
           className='mb-2 outline-none border-none bg-gray-300 rounded-lg p-2' />
          <label htmlFor="name" className='mb-2'>Password : </label>
          <input type="password" name='password' id='password' placeholder='Enter Password'
           className='mb-2 outline-none border-none bg-gray-300 rounded-lg p-2' />
           <div className='flex justify-end mt-2'>
           <button className='mt-2 bg-amber-600 w-20 text-white font-medium rounded-lg p-1'>Login</button>
           </div>
        </form>

        </div>
        
      </div>
     
    </>
  )
}

export default App
