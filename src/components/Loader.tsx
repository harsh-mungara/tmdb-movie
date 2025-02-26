import { SCREEN_WIDTH } from '@src/config/constants';
import { MONTSERRAT } from '@src/config/fonts';
import { moderateScaling, verticalScaling } from '@src/utils/styleHelper';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const LOADER_SIZE = moderateScaling(270);
const FONT_SIZE = moderateScaling(270);
const LOADER_TOP_MARGIN = verticalScaling(25);
const screenWidth = Dimensions.get('screen').width;

export default function Loader({
  text,
  extraText,
  verified,
}: {
  text?: string;
  extraText?: string;
  verified?: boolean;
}) {
  const { styles } = useStyles(rowStyles);
  return (
    <Modal
      isVisible={true}
      animationIn="fadeInUp"
      // coverScreen={true}
      backdropColor={'#FCE5D1'}
      backdropOpacity={1}
      hasBackdrop={true}
      animationOut="fadeOutDown">
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image source={require('@assets/loader.gif')} style={styles.image} />
          {text && (
            <View style={[styles.messageContainer, styles.transBg]}>
              <Text style={styles.message}>{'Please wait...'}</Text>
              <Text style={styles.message}>{text}</Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

const rowStyles = createStyleSheet(theme => {
  const Colors = theme.colors;
  return {
    container: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      marginBottom: verticalScaling(80),
    },
    textContainer: {
      // width: LOADER_SIZE,
      height: LOADER_SIZE,
      position: 'absolute',
      // top: 0,
      // bottom: 0,
      left: 0,
      right: 0,
      alignSelf: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
    text: {
      fontSize: FONT_SIZE,
      color: Colors.black,
      fontFamily: MONTSERRAT.EXTRABOLD,
    },
    image: {
      width: LOADER_SIZE,
      height: LOADER_SIZE,
      // position: 'absolute',
      top: LOADER_TOP_MARGIN,
      alignSelf: 'center',
      // left: moderateScaling(50),
    },
    messageContainer: {
      backgroundColor: 'transparent',
      // borderWidth: moderateScaling(1),
      //   borderColor: colorMode.Secondary[500],
      borderRadius: moderateScaling(8),
      width: SCREEN_WIDTH - moderateScaling(40),
      marginTop: verticalScaling(20),
      padding: verticalScaling(16),
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    message: {
      color: Colors.black,
      fontFamily: MONTSERRAT.REGULAR,
      fontSize: moderateScaling(14),
      lineHeight: verticalScaling(20),
    },
    dottedStyle: {
      width: screenWidth / 2,
      height: verticalScaling(320),
      transform: [{ rotateZ: '180deg' }],
      // position: 'absolute',
      // top: verticalScaling(-100),
      opacity: 0.3,
    },
    parentContainer: {
      height: verticalScaling(320),
      flexDirection: 'row',
    },
    transBg: {
      backgroundColor: 'transparent',
    },
  };
});
