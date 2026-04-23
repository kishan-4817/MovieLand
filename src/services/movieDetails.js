const API_KEY = 'd2e19e09';

export const getMovieDetails = async (id) => {
  const params = new URLSearchParams({
    apikey: API_KEY,
    i: id,
    plot: 'full',
  });

  const response = await fetch(`https://www.omdbapi.com/?${params.toString()}`);
  const data = await response.json();

  if (data.Response !== 'True') {
    throw new Error(data.Error || 'Unable to load movie details.');
  }

  return data;
};
