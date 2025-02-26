import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesScreen from '@src/screens/MovieScreen';
import MovieDetailScreen from '@src/screens/MovieDetailScreen';
import { defaultScreenOptionsForTab } from '@src/config/navigator';
import SearchScreen from '@src/screens/SearchScreen';
import FavoritesScreen from '@src/screens/FavoritesScreen';
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MovieStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={MoviesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const getTabBarVisibility = (route: Partial<Route<string>>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  return (
    routeName === 'Movies' || routeName === 'Favorites' || routeName === ''
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={defaultScreenOptionsForTab}>
      <Tab.Screen
        name="Movies"
        component={MovieStack}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film" size={size} color={color} />
          ),
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
