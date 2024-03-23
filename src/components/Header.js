import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PackPals</Text>
      <Text style={styles.titleSlogan}>On the Go, On the Move, On Delivery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 100,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Lato-Bold',
    color: "gold",
    zIndex: 2,
    textAlign: "center"
  },
  titleSlogan: {
    fontSize: 18,
    color: "lightgray",
    fontFamily: 'Lato-Regular',
    zIndex: 2,
    textAlign: "center"
  },
});

export default Header;
