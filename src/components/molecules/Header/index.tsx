import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {DummyPhoto} from '../../../assets/Images';

const Header = ({text, backButton, onPress, type}) => {
  if (type === 'ProfilePicture') {
    return (
      <View style={styles.containerPhoto}>
        <View>
          <Text style={styles.appTitle}>Money Tracker</Text>
          <Text style={styles.appSubTitle}>Track Your Money</Text>
        </View>
        <Image source={DummyPhoto} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="arrow-back" onPress={onPress} />
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 38,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 26,
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  appSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  containerPhoto: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
