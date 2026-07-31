import React, { useState } from 'react';
import { Search, Clapperboard, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex justify-between p-4 bg-gray-600'>
      <div className='relative'>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className='flex items-center gap-2 border border-yellow-400 bg-gray-900 px-4 py-2 rounded-lg text-white cursor-pointer'
        >
          Categories
          <ChevronDown />
        </button>

        {isOpen && (
          <div className='absolute left-0 top-full mt-2 w-64 bg-gray-700 rounded-md shadow-lg flex flex-col z-50 overflow-hidden border border-gray-600'>
            
            {/* 1. Top rated telugu movies */}
            <Link 
              to="/results?q=Top%20Rated%20Telugu%20Movies&type=category" 
              onClick={() => setIsOpen(false)}
              className='p-3 text-left text-white hover:bg-gray-600 transition-colors block w-full border-b border-gray-600/50'
            >
              Top Rated Telugu Movies
            </Link>

            {/* 2. Top rated indian movies */}
            <Link 
              to="/results?q=Top%20Rated%20Indian%20Movies&type=category" 
              onClick={() => setIsOpen(false)}
              className='p-3 text-left text-white hover:bg-gray-600 transition-colors block w-full border-b border-gray-600/50'
            >
              Top Rated Indian Movies
            </Link>

            {/* 3. Top rated english movies */}
            <Link 
              to="/results?q=Top%20Rated%20English%20Movies&type=category" 
              onClick={() => setIsOpen(false)}
              className='p-3 text-left text-white hover:bg-gray-600 transition-colors block w-full border-b border-gray-600/50'
            >
              Top Rated English Movies
            </Link>

            {/* 4. Top Box Office(US) */}
            <Link 
              to="/results?q=Top%20Box%20Office%20(US)&type=category" 
              onClick={() => setIsOpen(false)}
              className='p-3 text-left text-white hover:bg-gray-600 transition-colors block w-full border-b border-gray-600/50'
            >
              Top Box Office (US)
            </Link>

            {/* 5. Most Popular Movies */}
            <Link 
              to="/results?q=Most%20Popular%20Movies&type=category" 
              onClick={() => setIsOpen(false)}
              className='p-3 text-left text-white hover:bg-gray-600 transition-colors block w-full border-b border-gray-600/50'
            >
              Most Popular Movies
            </Link>

            {/* 6. Most popular tv shows */}
            <Link 
              to="/results?q=Most%20Popular%20TV%20Shows&type=category" 
              onClick={() => setIsOpen(false)}
              className='p-3 text-left text-white hover:bg-gray-600 transition-colors block w-full'
            >
              Most Popular TV Shows
            </Link>

          </div>
        )}
      </div>
        
      <div className='flex gap-2 text-white items-center'>
        <Clapperboard size={30} />
        <h2 className='text-2xl font-bold'>
          <Link to='/home'>
            Flick<span className='text-yellow-400'>Picker</span>
          </Link>
        </h2>
      </div>

      <div className='flex gap-2 items-center text-white'>
        <Link 
          to='/search' 
          className='p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors flex items-center justify-center'
        >
          <Search className='cursor-pointer'/>
        </Link>
          
        <Link to="/login" className='hover:text-gray-300 font-semibold'>
          Login/SignUp
        </Link>
      </div>
    </div>
  );
};

export default Navbar;