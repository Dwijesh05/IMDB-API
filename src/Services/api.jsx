import axios from "axios";

const apiInstance = axios.create({
  baseURL: 'https://imdb236.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': 'imdb236.p.rapidapi.com',
    'Content-Type': 'application/json',
  }
});

// --- HOME SECTION FUNCTIONS ---

export const getTopSectionTrending = async () => {
  try {
    const res = await apiInstance.get('/api/imdb/india/trending-telugu');
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching trending Telugu movies:', error);
    return [];
  }
};

export const getTopSectionMostAnticipatedIndianMovies = async () => {
  try {
    const res = await apiInstance.get('/api/imdb/india/upcoming');
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching Most Anticipated Indian Movies:', error);
    return [];
  }
};

export const getBottomSectionTopRatedIndianMovies = async () => {
  try {
    const res = await apiInstance.get('/api/imdb/india/top-rated-indian-movies');
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching Top Rated Indian Movies:', error);
    return [];
  }
};

export const getBottomSectionTop250Movies = async () => {
  try {
    const res = await apiInstance.get('api/imdb/top250-movies');
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching Top 250 Movies:', error);
    return [];
  }
};

export const getBottomSectionTop250TVShows = async () => {
  try {
    const res = await apiInstance.get('/api/imdb/top250-tv'); 
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching Top 250 TV Shows:', error);
    return [];
  }
};

// --- NAVBAR DROPDOWN CATEGORY FUNCTIONS ---
// (These will ONLY run when you actually click a dropdown item and open Results.jsx!)

export const getTopRatedTelugu = async () => {
  try {
    const res = await apiInstance.get('/api/imdb/india/top-rated-telugu-movies');
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching Top Rated Telugu:', error);
    return [];
  }
};

export const getTopRatedIndian = async () => {
  try {
    const res = await apiInstance.get('/api/imdb/india/top-rated-indian-movies');
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching Top Rated Indian:', error);
    return [];
  }
};

export const getTopRatedEnglish = async () => {
  try {
    const res = await apiInstance.get('/api/imdb/top-rated-english-movies');
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching Top Rated English:', error);
    return [];
  }
};

export const getTopBoxOfficeUS = async () => {
  try {
    const res = await apiInstance.get('/api/imdb/top-box-office');
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching Box Office US:', error);
    return [];
  }
};

export const getMostPopularMovies = async () => {
  try {
    const res = await apiInstance.get('/api/imdb/most-popular-movies');
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching Most Popular Movies:', error);
    return [];
  }
};

export const getMostPopularTVShows = async () => {
  try {
    const res = await apiInstance.get('/api/imdb/most-popular-tv');
    return Array.isArray(res.data) ? res.data : res.data.results || [];
  } catch (error) {
    console.error('Error fetching Most Popular TV Shows:', error);
    return [];
  }
};

export const getAutocompleteSuggestions = async (query) => {
  if (!query || query.trim() === '') return [];
  try {
    const response = await apiInstance.get(`/api/imdb/autocomplete`, {
      params: { query: query.trim() }
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching autocomplete suggestions:', error);
    return [];
  }
};

// Full Search with filters (for results page or custom queries)
export const searchMovies = async ({ query = '', type = 'movie', genre = '', rows = 25 }) => {
  try {
    const params = { type, rows, sortOrder: 'ASC', sortField: 'id' };
    if (query) params.query = query;
    if (genre) params.genre = genre;

    const response = await apiInstance.get(`/api/imdb/search`, { params });
    return response.data || [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};