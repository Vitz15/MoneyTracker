import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from './components/Button';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.Textatas}>Username</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan username anda"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.Textatas}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Password anda"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  outerContainer: {
    padding: 20,
    flex: 1,
  },
  welcomeText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  Textatas: {
    margin: 5,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
