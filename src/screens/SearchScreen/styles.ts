import { MONTSERRAT } from '@src/config/fonts';
import { moderateScaling, verticalScaling } from '@src/utils/styleHelper';
import { createStyleSheet } from 'react-native-unistyles';
import { SCREEN_WIDTH } from '@src/config/constants';

const rowStyles = createStyleSheet(theme => {
  const Colors = theme.colors;
  return {
    container: {
      flex: 1,
      backgroundColor: Colors.black,
      padding: moderateScaling(10),
    },
    searchInput: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.grey100,
      color: Colors.black,
      padding: moderateScaling(15),
      borderRadius: moderateScaling(5),
      marginVertical: verticalScaling(5),
      fontFamily: MONTSERRAT.MEDIUM,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: verticalScaling(15),
    },
    poster: {
      width: moderateScaling(100),
      height: verticalScaling(120),
      borderRadius: moderateScaling(10),
    },
    title: {
      color: Colors.white,
      padding: moderateScaling(15),
      fontFamily: MONTSERRAT.MEDIUM,
      fontSize: moderateScaling(14),
      lineHeight: verticalScaling(20),
      width: SCREEN_WIDTH / 1.5,
    },
  };
});
export default rowStyles;
