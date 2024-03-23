import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LogoutButton from './LogoutButton'

function Navbar({ navigation }) {

  handleLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>PackPals.</Text>
      <LogoutButton onPress={handleLogout} />
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
