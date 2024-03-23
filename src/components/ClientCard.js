import React from 'react'
import { View, Text, Image } from 'react-native'
import CustomButton from './CustomButton'
import { FontAwesome } from '@expo/vector-icons'

function ClientCard() {

    const clientpicture = "https://www.theladders.com/wp-content/uploads/man_outside_091318.jpg"
    const product = "https://images.huffingtonpost.com/2015-05-26-1432611653-9586336-package.jpg"
    
  return (
    <View style={{backgroundColor: "#000", padding: 20, width: "100%", borderRadius: 10, borderWidth: 2, borderColor: "gold", marginBottom: 20}}>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#000", padding: 5, borderRadius: 5}}>
        <Image source={{ uri: clientpicture }} style={{ width: 50, height: 50, borderRadius: 50}} />
        <View>
        <Text style={{color: "#fff", fontFamily: "Lato-Bold", fontSize: 15}}>Bello Abdul</Text>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <FontAwesome name="star" size={12} color="gray" />
        <Text style={{color: "#fff", fontFamily: "Lato-Regular", fontSize: 10, color: "gray", marginLeft: 5}}>Rates: 4.5 (324)</Text>
        </View>
        </View>
        <Text style={{color: "#fff", fontFamily: "Lato-Bold", fontSize: 18, color: "gold"}}>N1,000</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",marginTop: 20, padding: 10}}>
        <Text style={{color: "lightgray", fontFamily: "Lato-Bold", fontSize: 14}}>From: Kaduna</Text>
        <Text style={{color: "lightgray", fontFamily: "Lato-Bold", fontSize: 14}}>To: Lagos</Text>
      </View>

      <View style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20}}>
      <Image source={{ uri: product }} style={{ width: 200, height: 200, borderRadius: 5}} />
      </View>

      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <CustomButton title='Details' />
      <CustomButton title='Chats' />
      </View>
    </View>
  )
}

export default ClientCard
