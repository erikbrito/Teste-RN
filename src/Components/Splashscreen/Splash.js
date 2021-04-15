import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.TextLoading}> Loading ... </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#4175c5',
    justifyContent: 'center',
  },
  TextLoading: {
    fontSize: 55,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
})

export default Splash;
