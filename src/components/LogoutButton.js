import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LogoutButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontFamily: 'Lato-Bold'
  },
});

export default LogoutButton;
