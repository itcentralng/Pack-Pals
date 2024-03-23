import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LogoutButton from './LogoutButton'
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

function Navbar({ navigation }) {

  const handleSignup = () => {
    navigation.navigate('Login', { screen: 'Login' });
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>PackPals.</Text>
      <LogoutButton onPress={handleSignup} />
    </View>
  )
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        width: "100%",
        backgroundColor: "#000",
        padding: 10,
        paddingLeft: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    logo: {
        color: "gold",
        fontSize: 28,
        fontFamily: 'Lato-Bold'
    }
})

export default Navbar
