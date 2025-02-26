import DeviceInfo from 'react-native-device-info';

export function isIphoneWithNotch() {
  return DeviceInfo.hasNotch();
}

function isIphoneWithDynamicIsland() {
  return DeviceInfo.hasDynamicIsland();
}
