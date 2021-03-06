import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import colors from '../config/colors';

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
