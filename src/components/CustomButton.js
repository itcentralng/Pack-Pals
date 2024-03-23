import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function CustomButton({title}) {
  return (
    <TouchableOpacity style={{ width: 100, padding: 10, backgroundColor: "gold", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20}}>
      <Text style={{ fontFamily: "Lato-Bold"}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
