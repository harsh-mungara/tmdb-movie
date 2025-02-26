import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { moderateScaling, verticalScaling } from '@src/utils/styleHelper';

export const defaultOptionsForStack: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'fade',
  contentStyle: {
    backgroundColor: 'transparent',
  },
  navigationBarColor: 'white',
  // navigationBarHidden: true,
};

export const defaultScreenOptionsForTab: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    display: 'flex',
    backgroundColor: '#ECF0FC',
    height: verticalScaling(60),
  },
};
