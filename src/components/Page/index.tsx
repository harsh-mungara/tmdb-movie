/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

const rowStyles = createStyleSheet(theme => {
  return {
    container: {
      flex: 1,
    },
  };
});

const Page = props => {
  const { styles, theme } = useStyles(rowStyles);
  const {
    children,
    headerColor = theme.colors.white,
    bottomSpace = true,
    backgroundColor = theme.colors.white,
  } = props;

  return (
    <>
      <SafeAreaView edges={['top']} style={{ backgroundColor: headerColor }} />
      <SafeAreaView
        edges={bottomSpace ? ['bottom', 'left', 'right'] : ['left', 'right']}
        style={[styles.container, { backgroundColor: backgroundColor }]}>
        {children}
      </SafeAreaView>
    </>
  );
};

export default Page;
