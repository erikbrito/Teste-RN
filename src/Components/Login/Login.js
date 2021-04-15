import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  return (
    <View style={styles.container}>

      <Icon name="key" size={45} color="#4175c5" style={styles.icon} />

      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
      />

      <RectButton onPress={() => { }} style={[styles.Button, styles.BtnLogin]}>
        <Text style={styles.TextLogin}>Register</Text>
      </RectButton>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#f0f0f5',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },
  icon: {
    textAlign: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 35,
    color: '#4175c5',
  },
  Button: {
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  BtnLogin: {
    backgroundColor: '#4175c5',
  },
  TextLogin: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '200',
    alignSelf: 'center',
  },
});

export default Login;
