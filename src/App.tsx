import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from './components/Toast';
import '@src/utils/unistyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './screens/splash/SplashScreen';
import { enableScreens } from 'react-native-screens';

const App = () => {
  React.useEffect(() => {
    if (Platform.OS === 'ios') {
      enableScreens(false);
    }
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SplashScreen>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </SplashScreen>
          <Toast />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
