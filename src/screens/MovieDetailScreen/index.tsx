import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import rowStyles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '@src/components/CustomHeader';

export default function MovieDetailScreen({ route, navigation }) {
  const { movie } = route.params;
  const { styles } = useStyles(rowStyles);

  return (
    <ScrollView style={styles.container}>
      <CustomHeader
        leftIconName="arrow-back"
        onLeftPress={() => navigation.goBack()}
        darkMode={false}
        title={''}
      />
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }}
        style={styles.backdrop}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.metaContainer}>
          <Ionicons name="star" size={24} color="gold" />
          <Text style={styles.rating}>{movie.vote_average.toFixed(1)}</Text>
          <Text style={styles.releaseDate}>• {movie.release_date}</Text>
        </View>
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={styles.additionalInfo}>
          Language: {movie.original_language.toUpperCase()}
        </Text>
        <Text style={styles.additionalInfo}>
          Total Votes: {movie.vote_count}
        </Text>
        <Text style={styles.additionalInfo}>
          Popularity: {movie.popularity.toFixed(1)}
        </Text>
      </View>
    </ScrollView>
  );
}
