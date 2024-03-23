import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSignup = () => {
    console.log('Signup data:', { username, password, creditCardNumber, expiryDate, cvv });
    navigation.navigate('Login', { screen: 'Login' });
  };

  return (
    <View style={styles.container}>

<Image
  source={{ uri: 'https://t3.ftcdn.net/jpg/02/71/50/76/360_F_271507618_P9LjFIaWLV3E0ukpU5A2xkxpu8Xfgrsw.jpg' }}
  style={styles.imageTop}
/>
      <Image
  source={{ uri: 'https://t3.ftcdn.net/jpg/02/71/50/76/360_F_271507618_P9LjFIaWLV3E0ukpU5A2xkxpu8Xfgrsw.jpg' }}
  style={styles.imageBottom}
/>

      <Header />
      <InputField
        placeholder="Email Address"
        onChangeText={(text) => setUsername(text)}
        iconName="user"
      />
      <InputField
        placeholder="Create Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        iconName="lock"
        placeholderTextColor="lightgray"
      />
      <InputField
        placeholder="Credit Card Number"
        onChangeText={(text) => setCreditCardNumber(text)}
        iconName="credit-card"
      />
      <InputField
        placeholder="Expiry Date (MM/YY)"
        onChangeText={(text) => setExpiryDate(text)}
        iconName="calendar"
      />
      <InputField
        placeholder="CVV"
        secureTextEntry={true}
        onChangeText={(text) => setCvv(text)}
        iconName="lock"
      />
      <LoginButton title="Signup" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#000"
  },
  imageTop: {
    width: 400,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    position: "absolute",
    top: -90,
    left: -30,
  },
  imageBottom: {
    width: 400,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    position: "absolute",
    bottom: -110,
    right: 0,
    transform: "rotate(180deg)",
  },
});

export default SignupScreen;
