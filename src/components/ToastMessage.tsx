import { Text, View } from 'react-native';
import React from 'react';
import { TOAST_TYPE } from '@src/config/constants';
import { MONTSERRAT } from '@src/config/fonts';
import { moderateScaling, verticalScaling } from '@src/utils/styleHelper';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type ToastMessageProps = {
  text1: string;
  text2: string;
  type: string;
};

export default function ToastMessage({
  type,
  text1,
  text2,
}: ToastMessageProps) {
  // const [show, setShow] = React.useState<boolean>(true);
  const { styles, theme } = useStyles(rowStyles);
  // if (!show) return null;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            type === TOAST_TYPE.FAILED
              ? theme.colors.error30
              : theme.colors.success30,
        },
      ]}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{text1}</Text>
        {/* <Text style={styles.time}>{text2}</Text> */}
      </View>
      {/* <AntDesign
        name="close"
        color={Colors.Shades[0]}
        size={16}
        onPress={() => {
          setShow(false);
          if (onPress) onPress();
        }}
      /> */}
    </View>
  );
}

const rowStyles = createStyleSheet(theme => {
  const Colors = theme.colors;
  return {
    container: {
      paddingHorizontal: moderateScaling(16),
      paddingVertical: verticalScaling(14.5),
      borderRadius: moderateScaling(8),
      flexDirection: 'row',
      alignItems: 'center',
      // marginTop: verticalScaling(15),
      marginHorizontal: moderateScaling(10),
    },
    messageContainer: {
      flex: 1,
    },
    message: {
      color: Colors.baseWhite,
      fontFamily: MONTSERRAT.MEDIUM,
      fontSize: moderateScaling(14),
      lineHeight: verticalScaling(20),
      textAlign: 'left',
    },
    time: {
      color: Colors.baseWhite,
      fontFamily: MONTSERRAT.REGULAR,
      fontSize: moderateScaling(12),
      lineHeight: verticalScaling(18),
    },
  };
});
