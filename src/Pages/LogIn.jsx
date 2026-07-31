import React from 'react'
import { Link } from 'react-router-dom' 

const LogIn = () => {
  return (
    <div className='min-h-screen justify-center items-center flex bg-gray-900 p-4'>
        
        <div className='flex flex-col bg-gray-800 rounded-2xl shadow-2xl w-full max-w-[400px] p-8 gap-4'>
            <div className='text-center mb-4'>
                <h1 className='text-4xl font-extrabold mb-2 text-white'>
                    Flick<span className='text-yellow-400'>Picker</span>
                </h1>
                <h2 className='text-2xl font-bold text-gray-300'>Welcome Back</h2>
                <p className='text-gray-400 text-sm mt-1'>Log in to pick up where you left off.</p>
            </div>

            <div className='flex flex-col gap-4'>
                <input 
                    type='email' 
                    placeholder='Email address' 
                    className='bg-gray-700 text-white outline-none border border-gray-600 focus:border-yellow-400 px-4 py-3 rounded-xl w-full transition-colors'
                />
                <input 
                    type='password' 
                    placeholder='Password' 
                    className='bg-gray-700 text-white outline-none border border-gray-600 focus:border-yellow-400 px-4 py-3 rounded-xl w-full transition-colors'
                />
            </div>
            <div className='flex justify-end'>
                <button className='text-sm text-gray-400 hover:text-yellow-400 transition-colors'>
                    Forgot Password?
                </button>
            </div>

            <button className='bg-yellow-400 font-bold text-black px-4 py-3 mt-2 rounded-xl w-full hover:bg-yellow-500 hover:scale-[1.02] active:scale-95 transition-all'>
                Log In
            </button>

            <p className='text-center text-gray-400 text-sm mt-4'>
                New to FlickPicker?{' '}
                <Link to="/signup" className='text-white hover:text-yellow-400 font-semibold transition-colors'>
                    Sign up now.
                </Link>
            </p>
            
        </div>
    </div>
  )
}

export default LogIn