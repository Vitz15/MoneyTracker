import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/icon';

const splashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Money Tracker</Text>
    </View>
  );
};

export default splashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
