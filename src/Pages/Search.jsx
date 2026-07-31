import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchInput.trim()) {
  
      navigate(`/results?q=${encodeURIComponent(searchInput)}&type=search`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center mt-10'>
        <input 
          type="text" 
          placeholder='Search for a movie' 
          onKeyDown={handleSearch} 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)} 
          className='w-[85%] bg-gray-700 text-white outline-none border-b-2 border-gray-600 focus:border-yellow-400 py-2 transition-colors text-center'
        />
      </div>
    </div>
  );
};

export default Search;