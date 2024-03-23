import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#000",
    marginBottom: 10
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    backgroundColor: "#000",
    color: "#fff"
  },
});

export default SearchBar;
