// screens/SearchScreen.js
import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import rowStyles from './styles';
import { getFavorites } from '@src/sdk/api';
import { useFocusEffect } from '@react-navigation/native';

export default function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);
  const { styles } = useStyles(rowStyles);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, []),
  );
  const loadFavorites = async () => {
    const favs = await getFavorites();
    setFavorites(favs);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite Movies</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('MovieDetail', { movie: item })}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              style={styles.poster}
            />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => {
          return <Text style={styles.title}>No Favorite movies added!</Text>;
        }}
      />
    </View>
  );
}
