import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import RNSplashScreen from 'react-native-splash-screen';
import { useLoader } from '@src/hooks/loader.hook';
import { moderateScaling, verticalScaling } from '@src/utils/styleHelper';
import Page from '@src/components/Page';
import Loader from '@src/components/Loader';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Images from '@src/config/images';

const rowStyles = createStyleSheet(theme => {
  const Colors = theme.colors;
  return {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      resizeMode: 'contain',
      width: moderateScaling(240),
      height: verticalScaling(240),
      alignSelf: 'center',
      justifyContent: 'center',
    },
  };
});

type SplashScreenProps = {
  children:
    | JSX.Element
    | JSX.Element[]
    | React.FunctionComponent
    | React.FunctionComponent[];
};

function SplashScreen({ children }: SplashScreenProps) {
  const { styles } = useStyles(rowStyles);
  const [loaded, setLoaded] = React.useState(false);
  const { loader, loaderText, loaderExtraText, setLoader } = useLoader();
  const animation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    RNSplashScreen.hide();
    setTimeout(() => {
      startAnimation();
    }, 100);
  }, []);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0.5,
      duration: 1000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setLoaded(true);
      }
    });
  };

  if (loaded) {
    return children;
  }

  return (
    <Page imageAsBackground={true} isAuth={true}>
      <View style={styles.container}>
        <Animated.Image
          source={Images.tmdb}
          style={[
            styles.image,
            {
              transform: [{ scale: animation }],
            },
          ]}
        />
      </View>
      {loader && <Loader text={loaderText} extraText={loaderExtraText} />}
    </Page>
  );
}

export default SplashScreen;
