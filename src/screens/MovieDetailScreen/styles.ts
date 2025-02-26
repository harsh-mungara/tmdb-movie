import { createStyleSheet } from 'react-native-unistyles';
import { moderateScaling, verticalScaling } from '@src/utils/styleHelper';
import { MONTSERRAT } from '@src/config/fonts';

const rowStyles = createStyleSheet(theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: '#121212',
      paddingHorizontal: moderateScaling(10),
    },
    backdrop: {
      width: '100%',
      height: verticalScaling(250),
      borderRadius: moderateScaling(10),
    },
    contentContainer: {
      padding: moderateScaling(10),
    },
    title: {
      color: theme.colors.white,
      fontSize: moderateScaling(18),
      lineHeight: verticalScaling(30),
      marginVertical: verticalScaling(5),
      fontFamily: MONTSERRAT.BOLD,
    },
    metaContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: verticalScaling(5),
    },
    rating: {
      color: theme.colors.yellow,
      fontSize: moderateScaling(18),
      lineHeight: verticalScaling(30),
      marginVertical: verticalScaling(5),
      fontFamily: MONTSERRAT.BOLD,
      marginLeft: moderateScaling(10),
    },
    releaseDate: {
      color: theme.colors.grey100,
      fontSize: moderateScaling(14),
      lineHeight: verticalScaling(20),
      marginVertical: verticalScaling(5),
      fontFamily: MONTSERRAT.REGULAR,
      marginLeft: moderateScaling(10),
    },
    overview: {
      color: theme.colors.white,
      fontSize: moderateScaling(14),
      lineHeight: verticalScaling(20),
      marginVertical: verticalScaling(5),
      fontFamily: MONTSERRAT.REGULAR,
    },
    additionalInfo: {
      color: theme.colors.white,
      fontSize: moderateScaling(14),
      lineHeight: verticalScaling(20),
      marginVertical: verticalScaling(5),
      fontFamily: MONTSERRAT.REGULAR,
    },
  };
});
export default rowStyles;
