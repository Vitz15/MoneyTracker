import {StyleSheet, View} from 'react-native';
import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Button label="Sign In with Gmail" />
      <Button label="Sign In with Google" color="red" />
      <Button label="Sign in with Facebook" color="blue" />
      <Button label="Sign in with Apple" color="black" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
});
