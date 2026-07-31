import React from 'react'
import {Link} from 'react-router-dom'
import { Clapperboard } from 'lucide-react'
const SignUp = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-900'>
        <div className='flex flex-col items-center bg-gray-800 rounded-2xl shadow-2xl w-full max-w-[400px] p-8 gap-4'>
            <div className='flex gap-2'>
                <Clapperboard size={30} />
                <h1 className='text-4xl font-extrabold'>Flick<span className='text-yellow-400'>Picker</span></h1>
            </div>
            <div className='text-center'>
                <h2 className='text-2xl font bold'>Welcome Back</h2>
                <p className='text-sm text-gray-400 mt-1'>Log In to pick up where you left off.</p>
            </div>
            <div className='flex flex-col gap-4  w-full'>
                <input type='email' placeholder='Email address' className='bg-gray-700 text-white outline-none border border-gray-600 focus:border-yellow-400 px-4 py-3 rounded-xl w-full transition-colors'/>
                <input type='password' placeholder='Password' className='bg-gray-700 text-white outline-none border border-gray-600 focus:border-yellow-400 px-4 py-3 rounded-xl w-full transition-colors'/>
                <input type='password' placeholder='Confirm Password' className='bg-gray-700 text-white outline-none border border-gray-600 focus:border-yellow-400 px-4 py-3 rounded-xl w-full transition-colors'/>
            </div>
            <button className='bg-yellow-400 font-bold text-black px-4 py-3 mt-2 rounded-xl w-full hover:bg-yellow-500 hover:scale-[1.02] active:scale-95 transition-all'>Sign Up</button>
            <p className='text-center text-gray-400 text-sm mt-4'>Already have an account?<Link to="/login" className='text-white hover:text-yellow-400 font-semibold transition-colors'> Log In</Link></p>
        </div>
        
        
    </div>
  )
}

export default SignUp