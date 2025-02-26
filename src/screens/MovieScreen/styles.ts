import { createStyleSheet } from 'react-native-unistyles';
import { moderateScaling, verticalScaling } from '@src/utils/styleHelper';
import { MONTSERRAT } from '@src/config/fonts';
import { SCREEN_WIDTH } from '@src/config/constants';

const rowStyles = createStyleSheet(theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.black,
      padding: moderateScaling(15),
    },
    scrollView: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    tmdb: {
      width: moderateScaling(60),
      height: verticalScaling(55),
      borderRadius: moderateScaling(5),
      resizeMode: 'contain',
    },
    searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.grey100,
      padding: moderateScaling(15),
      borderRadius: moderateScaling(5),
      marginVertical: verticalScaling(5),
      fontFamily: MONTSERRAT.MEDIUM,
      width: SCREEN_WIDTH / 1.35,
    },
    searchText: {
      color: theme.colors.text,
      marginLeft: moderateScaling(10),
      fontFamily: MONTSERRAT.MEDIUM,
    },
    categoryTitle: {
      color: theme.colors.white,
      fontSize: moderateScaling(16),
      lineHeight: verticalScaling(24),
      marginVertical: verticalScaling(10),
      marginLeft: moderateScaling(15),
      fontFamily: MONTSERRAT.BOLD,
    },
    card: {
      width: SCREEN_WIDTH / 2.4,
      marginRight: moderateScaling(10),
      alignItems: 'center',
    },
    poster: {
      width: SCREEN_WIDTH / 2.4,
      height: verticalScaling(220),
      borderRadius: moderateScaling(10),
    },
    title: {
      color: theme.colors.white,
      fontSize: moderateScaling(16),
      lineHeight: verticalScaling(24),
      marginLeft: moderateScaling(15),
      fontFamily: MONTSERRAT.BOLD,
      marginTop: verticalScaling(10),
      width: SCREEN_WIDTH / 3,
    },
    favoriteButton: {
      top: verticalScaling(5),
    },
    cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };
});
export default rowStyles;
