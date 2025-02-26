/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { moderateScaling, verticalScaling } from '@src/utils/styleHelper';
import { MONTSERRAT } from '@src/config/fonts';
import CustomIcon from './CustomIcon';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const screenWidth = Dimensions.get('screen').width;
const rowStyles = createStyleSheet(theme => {
  const Colors = theme.colors;
  return {
    container: {
      height: verticalScaling(50),
    },
    profileContainer: {
      height: verticalScaling(60),
      backgroundColor: 'transparent',
      justifyContent: 'center',
    },
    parentView: {
      marginTop: verticalScaling(5),
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: verticalScaling(30),
      alignItems: 'center',
    },
    titleContainer: {
      fontSize: moderateScaling(16),
      color: Colors.baseWhite,
      textAlign: 'left',
      fontFamily: MONTSERRAT.MEDIUM,
      lineHeight: verticalScaling(26),
      maxWidth: moderateScaling(200),
    },
    iconStyle: {
      color: 'white',
      marginHorizontal: moderateScaling(10),
      fontSize: moderateScaling(25),
    },
    rightIconStyle: {
      color: '#090A0A',
      marginHorizontal: moderateScaling(10),
      fontSize: moderateScaling(22),
    },
    leftView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    rightView: {
      width: screenWidth / 9,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: moderateScaling(20),
    },
  };
});

const CustomHeader = ({
  leftIconName,
  rightIconName,
  title,
  onLeftPress,
  onRightPress,
  customStyle,
  darkMode = true,
  isProfile = false,
  rightStyle,
  overrideContainer,
}: {
  leftIconName?: string;
  rightIconName?: string;
  title?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  customStyle?: any;
  darkMode?: boolean;
  isProfile?: boolean;
  rightStyle?: any;
  overrideContainer?: any;
}) => {
  const { styles } = useStyles(rowStyles);
  return (
    <View
      style={[
        isProfile ? styles.profileContainer : styles.container,
        overrideContainer,
      ]}>
      <StatusBar
        hidden={false}
        backgroundColor={'white'}
        barStyle="dark-content"
      />
      <SafeAreaView style={[styles.parentView]}>
        {leftIconName ? (
          <View style={styles.leftView}>
            <TouchableOpacity
              hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              onPress={() => onLeftPress()}>
              <CustomIcon
                name={leftIconName}
                type={'tamdbApp'}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
            {title && <Text style={styles.titleContainer}>{title}</Text>}
          </View>
        ) : (
          <View style={{ width: screenWidth / 5 }} />
        )}

        {rightIconName ? (
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
            onPress={() => onRightPress()}
            style={styles.rightView}>
            <CustomIcon
              name={rightIconName}
              type={'tamdbApp'}
              style={[styles.rightIconStyle, rightStyle]}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: screenWidth / 5 }} />
        )}
      </SafeAreaView>
    </View>
  );
};

export default CustomHeader;
