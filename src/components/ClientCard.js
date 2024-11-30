import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import CustomButton from './CustomButton';
import { FontAwesome } from '@expo/vector-icons';

function ClientCard() {
  const clients = [
    {
      id: 1,
      name: 'Adam Kamal',
      clientpicture: 'https://www.theladders.com/wp-content/uploads/man_outside_091318.jpg',
      product: 'https://images.huffingtonpost.com/2015-05-26-1432611653-9586336-package.jpg',
      price: 'N5,000',
      rate: '4.5 (324)',
      from: 'Kaduna',
      to: 'Lagos',
      phone: '+2348108005192',
    },
    {
      id: 2,
      name: 'Judith Joshua',
      clientpicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFeo3P2ODfUghWLDjWm6yxL5lpHcOEECEPpQ&s',
      product: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS304oN_QxrdvxH0pECsktlAlLW82ycviTTIaIS68L0K-QvlmjB9tqsVEVxnyrnYNWHdek&usqp=CAU',
      price: 'N3,500',
      rate: '4.3 (524)',
      from: 'Kaduna',
      to: 'Sokoto',
      phone: '+2348108005192',
    },
  ];

  const sendSMS = async (phone, message) => {
    try {
      const response = await axios.post('https://0a5e-102-91-4-119.ngrok-free.app/api/send-sms', {
        to: phone,
        message,
      });
      Alert.alert('Success', 'SMS sent successfully!');
    } catch (error) {
      console.error('Error:', error.response?.data || error);
      Alert.alert('Error', 'Failed to send SMS.');
    }
  };
  
  
  

  return (
    <View>
      {clients.map((client) => (
        <TouchableOpacity
        onPress={() =>
          sendSMS(client.phone, `Hello, ${client.name}. I want to deliver your package from ${client.from} to ${client.to}.`)
        }
          key={client.id}
          style={{
            backgroundColor: '#000',
            padding: 20,
            width: '100%',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'gold',
            marginBottom: 20,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#000',
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Image
              source={{ uri: client.clientpicture }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Lato-Bold',
                  fontSize: 15,
                }}
              >
                {client.name}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FontAwesome name="star" size={12} color="gray" />
                <Text
                  style={{
                    color: 'gray',
                    fontFamily: 'Lato-Regular',
                    fontSize: 10,
                    marginLeft: 5,
                  }}
                >
                  Rates: {client.rate}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: 'gold',
                fontFamily: 'Lato-Bold',
                fontSize: 18,
              }}
            >
              {client.price}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: 'lightgray',
                fontFamily: 'Lato-Bold',
                fontSize: 14,
              }}
            >
              From: {client.from}
            </Text>
            <Text
              style={{
                color: 'lightgray',
                fontFamily: 'Lato-Bold',
                fontSize: 14,
              }}
            >
              To: {client.to}
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}
          >
            <Image
              source={{ uri: client.product }}
              style={{ width: 200, height: 200, borderRadius: 5 }}
            />
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity>
            <CustomButton title="Details" onPress={() => alert("Here are the complete details")} />
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() =>
              //   sendSMS(client.phone, `Hello, ${client.name}. I want to deliver your package from ${client.from} to ${client.to}.`)
              // }
            >
            <CustomButton
              title="Connect"
              
            />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default ClientCard;
