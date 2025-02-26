import Metrics from '@src/utils/metrics';
import DeviceInfo from '@src/utils/DeviceInfo';

export default {
  container: {
    flex: 1,
    // paddingTop: DeviceInfo.isIphoneX
    //   ? Metrics.navBarHeight + 24
    //   : Metrics.navBarHeight, // Same as custom navbar heigth in @navbar component\
  },
  topStyle: {
    flex: 1,
    paddingTop: DeviceInfo.isIphoneX
      ? Metrics.navBarHeight + 24
      : Metrics.navBarHeight, // Same as custom navbar heigth in @navbar component\
  },
};
