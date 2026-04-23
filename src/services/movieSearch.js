const API_KEY = 'd2e19e09';

export const searchOmdbMovies = async (query, options = {}) => {
  const nextQuery = query.trim();

  if (!nextQuery) {
    return {
      movies: [],
      error: 'Enter a movie title to begin searching.',
      query: '',
    };
  }

  const params = new URLSearchParams({
    apikey: API_KEY,
    s: nextQuery,
  });

  if (options.type) {
    params.set('type', options.type);
  }

  const response = await fetch(`https://www.omdbapi.com/?${params.toString()}`);
  const data = await response.json();

  if (data.Response !== 'True') {
    return {
      movies: [],
      error: data.Error || 'No movies found.',
      query: nextQuery,
    };
  }

  return {
    movies: data.Search || [],
    error: '',
    query: nextQuery,
  };
};
