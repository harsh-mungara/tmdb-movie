import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_KEY = 'f1c608a1f3f43029a5c115c0d9422a62';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async category => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${category}`, {
      params: { api_key: API_KEY, language: 'en-US', page: 1 },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query,
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const saveFavorite = async movie => {
  try {
    const favorites = await getFavorites();
    const updatedFavorites = [...favorites, movie];
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Error saving favorite movie:', error);
  }
};

export const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error fetching favorite movies:', error);
    return [];
  }
};

export const removeFavorite = async movieId => {
  try {
    const favorites = await getFavorites();
    const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Error removing favorite movie:', error);
  }
};
