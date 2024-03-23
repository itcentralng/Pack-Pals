import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo

const InputField = ({ placeholder, secureTextEntry, onChangeText, iconName }) => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name={iconName} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontFamily: 'Lato-Regular',
    color: "#fff"
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
    color: 'gray',
  },
});

export default InputField;
