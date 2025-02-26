import { createStyleSheet } from 'react-native-unistyles';
import { moderateScaling, verticalScaling } from '@src/utils/styleHelper';
import { MONTSERRAT } from '@src/config/fonts';
import { SCREEN_WIDTH } from '@src/config/constants';

const rowStyles = createStyleSheet(theme => {
  const Colors = theme.colors;
  return {
    container: {
      flex: 1,
      backgroundColor: Colors.black,
      padding: moderateScaling(15),
    },
    header: {
      color: theme.colors.white,
      fontSize: moderateScaling(18),
      lineHeight: verticalScaling(30),
      marginVertical: verticalScaling(10),
      fontFamily: MONTSERRAT.BOLD,
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
      color: theme.colors.white,
      fontSize: moderateScaling(14),
      lineHeight: verticalScaling(20),
      marginVertical: verticalScaling(10),
      fontFamily: MONTSERRAT.BOLD,
      width: SCREEN_WIDTH / 1.3,
      marginLeft: moderateScaling(10),
    },
  };
});
export default rowStyles;
