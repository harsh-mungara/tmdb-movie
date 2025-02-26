import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('screen');
export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
  Dimensions.get('window');

export const BUILD_READ_VERSION = DeviceInfo.getReadableVersion();

export const TOAST_TYPE = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
};
