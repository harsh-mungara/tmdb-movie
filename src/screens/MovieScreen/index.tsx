import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useStyles } from 'react-native-unistyles';
import rowStyles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  fetchMovies,
  getFavorites,
  removeFavorite,
  saveFavorite,
} from '@src/sdk/api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { toastFailed, toastSuccess } from '@src/utils/toast';
import { useLoader } from '@src/hooks/loader.hook';
import Images from '@src/config/images';

export default function MoviesScreen({ navigation }) {
  const { setLoader } = useLoader();
  const [movies, setMovies] = useState({
    now_playing: [],
    popular: [],
    top_rated: [],
    upcoming: [],
  });
  const { styles } = useStyles(rowStyles);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setLoader(true);
    const fetchAllMovies = async () => {
      const nowPlaying = await fetchMovies('now_playing');
      const popular = await fetchMovies('popular');
      const topRated = await fetchMovies('top_rated');
      const upcoming = await fetchMovies('upcoming');
      setMovies({
        now_playing: nowPlaying,
        popular,
        top_rated: topRated,
        upcoming,
      });
      setLoader(false);
    };
    fetchAllMovies();
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favs = await getFavorites();
    setFavorites(favs);
  };

  const toggleFavorite = async movie => {
    if (favorites.some(fav => fav.id === movie.id)) {
      await removeFavorite(movie.id);
      toastFailed('Movie removed from favorites');
    } else {
      await saveFavorite(movie);
      toastSuccess('Movie added to favorites');
    }
    loadFavorites();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.tmdb} style={styles.tmdb} />
        <TouchableOpacity
          style={styles.searchBox}
          onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={24} color="gray" />
          <Text style={styles.searchText}>Search for movies...</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {Object.entries(movies).map(([category, data]) => (
          <View key={category}>
            <Text style={styles.categoryTitle}>
              {category.replace('_', ' ').toUpperCase()}
            </Text>
            <FlatList
              data={data}
              horizontal
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('MovieDetail', { movie: item })
                    }>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                      }}
                      style={styles.poster}
                    />
                  </TouchableOpacity>
                  <View style={styles.cardFooter}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity
                      onPress={() => toggleFavorite(item)}
                      style={styles.favoriteButton}>
                      <Ionicons
                        name={
                          favorites.some(fav => fav.id === item.id)
                            ? 'heart'
                            : 'heart-outline'
                        }
                        size={24}
                        color="red"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
