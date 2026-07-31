import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react'; 
import Navbar from '../Components/Navbar';
import MovieDetails from '../Components/MovieDetails';
import { 
  getTopRatedTelugu, 
  getTopRatedIndian, 
  getTopRatedEnglish, 
  getTopBoxOfficeUS, 
  getMostPopularMovies, 
  getMostPopularTVShows 
} from '../Services/api';

const Results = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || 'All Movies';
  const type = searchParams.get('type'); 

  // States for API data & loading
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // State to track which movie's details modal is active
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // Pagination state
  const [page, setPage] = useState(0);
  const itemsPerPage = 12;

  // 1. Fetch exact API depending on clicked dropdown button
  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      setPage(0); // Reset page to 0 when category changes

      let data = [];
      switch (query) {
        case 'Top Rated Telugu Movies':
          data = await getTopRatedTelugu();
          break;
        case 'Top Rated Indian Movies':
          data = await getTopRatedIndian();
          break;
        case 'Top Rated English Movies':
          data = await getTopRatedEnglish();
          break;
        case 'Top Box Office (US)':
          data = await getTopBoxOfficeUS();
          break;
        case 'Most Popular Movies':
          data = await getMostPopularMovies();
          break;
        case 'Most Popular TV Shows':
          data = await getMostPopularTVShows();
          break;
        default:
          data = await getMostPopularMovies();
      }

      setMovies(data);
      setLoading(false);
    };

    fetchCategoryData();
  }, [query]);

  // 2. Dynamic Pagination based on API response length
  const totalItems = movies.length;
  const maxPage = Math.max(0, Math.ceil(totalItems / itemsPerPage) - 1);

  // Slice actual API movies array for current page
  const currentMovies = movies.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const handlePrev = () => {
    setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const handleNext = () => {
    setPage((prevPage) => (prevPage < maxPage ? prevPage + 1 : prevPage));
  };

  return (
    <div className='h-screen bg-gray-900 flex flex-col text-white overflow-hidden w-full'>
        
        <div className='shrink-0'>
            <Navbar />
        </div>
        
        <div className='flex-grow flex flex-col justify-between px-5 py-2 min-h-0 overflow-hidden w-full'>

            {/* TITLE */}
            <h1 className='text-xl md:text-2xl font-bold shrink-0'>
                {type === 'category' ? (
                    <span className='text-yellow-400'>{query}</span>
                ) : (
                    <span>Results for: <span className='text-yellow-400'>{query}</span></span>
                )}
            </h1>

            {/* MOVIE GRID */}
            <div className='flex-grow flex items-center justify-center min-h-0 w-full my-1'>
                {loading ? (
                    <div className='text-yellow-400 font-semibold text-lg animate-pulse'>
                        Loading movies...
                    </div>
                ) : currentMovies.length > 0 ? (
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-h-full'>
                        {currentMovies.map((movie, index) => (
                            <div 
                                key={movie.id || index} 
                                onClick={() => setSelectedMovieId(movie.id)}
                                className='bg-gray-800 border border-gray-700 aspect-video w-full rounded-lg flex flex-col items-center justify-center hover:scale-105 hover:border-yellow-400 transition-all duration-300 cursor-pointer shadow-lg overflow-hidden relative group'
                            >
                                {movie.primaryImage ? (
                                    <img 
                                        src={movie.primaryImage} 
                                        alt={movie.primaryTitle || 'Movie'} 
                                        className='w-full h-full object-cover'
                                    />
                                ) : (
                                    <span className='text-gray-400 font-semibold text-sm px-2 text-center'>
                                        {movie.primaryTitle || `Movie ${page * itemsPerPage + index + 1}`}
                                    </span>
                                )}

                                {/* Movie Title Overlay on Hover */}
                                <div className='absolute bottom-0 inset-x-0 bg-black/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-center text-xs font-bold text-yellow-400 truncate'>
                                    {movie.primaryTitle}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='text-gray-400 text-lg'>No movies found.</div>
                )}
            </div>   

            {/* PAGINATION CONTROLS */}
            <div className='flex justify-center items-center gap-6 shrink-0 h-12 pb-1'>
                {page > 0 && (
                    <button 
                        onClick={handlePrev}
                        className='p-2 text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gray-800 rounded-full border border-gray-700 shadow-md'
                    >
                        <ChevronUp size={30} strokeWidth={2.5} />
                    </button>
                )}

                {page < maxPage && (
                    <button 
                        onClick={handleNext}
                        className='p-2 text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:translate-y-1 cursor-pointer bg-gray-800 rounded-full border border-gray-700 shadow-md'
                    >
                        <ChevronDown size={30} strokeWidth={2.5} />
                    </button>
                )}
            </div>

        </div>

        {/* DETAILS MODAL */}
        {selectedMovieId && (
          <MovieDetails
            movieId={selectedMovieId} 
            onClose={() => setSelectedMovieId(null)} 
          />
        )}
    </div>
  );
};

export default Results;