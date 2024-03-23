import React from 'react'
import Navbar from '../components/Navbar'
import { ScrollView, StyleSheet, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import ClientCard from '../components/ClientCard'

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={{ padding: 20}}>
      <SearchBar placeholder='Search here...' />
      <ScrollView>
      <ClientCard />
      <ClientCard />
      </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingBottom: 120
  }
})

export default HomeScreen
