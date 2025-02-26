// screens/SearchScreen.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useStyles } from 'react-native-unistyles';
import rowStyles from './styles';
import { searchMovies } from '@src/sdk/api';
import CustomHeader from '@src/components/CustomHeader';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { styles } = useStyles(rowStyles);

  const handleSearch = async () => {
    if (query.trim()) {
      const movies = await searchMovies(query);
      setResults(movies);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        leftIconName="arrow-back"
        onLeftPress={() => navigation.goBack()}
        darkMode={false}
        title={''}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for movies..."
        placeholderTextColor="gray"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={results}
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
      />
    </View>
  );
}
