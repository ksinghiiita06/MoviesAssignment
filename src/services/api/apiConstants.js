export const API_KEY = '58622cb9ed2b2a0610b17ef6159285be';
export const BASE_URL = 'https://api.themoviedb.org/';
export const API_VERSION = 3;

export const POPULAR_MOVIES = 'movie/popular?api_key={0}&language={1}&page={2}';

//Prepend API version
export const getCompleteUrl = url => `${API_VERSION}/${url}`;
