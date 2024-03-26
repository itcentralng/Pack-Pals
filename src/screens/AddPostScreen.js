import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, Image, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import * as ImagePicker from 'expo-image-picker';

function AddPostScreen() {
  const [productName, setProductName] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [deliveryDateTime, setDeliveryDateTime] = useState(new Date());
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission required', 'Please enable camera roll permissions to upload images.');
        }
      }
    })();
  }, []);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handlePost = () => {
    // Handle posting logic here
    console.log('Posting data:', {
      productName,
      productWeight,
      pickupLocation,
      deliveryLocation,
      deliveryDateTime,
      image
    });
  };

  const onChange = (event, selectedDateTime) => {
    const currentDateTime = selectedDateTime || deliveryDateTime;
    setIsDateTimePickerVisible(Platform.OS === 'ios');
    setDeliveryDateTime(currentDateTime);
  };

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <TouchableOpacity onPress={handlePickImage}>
          <View style={styles.uploadButton}>
            <Text style={styles.uploadText}>Upload Image</Text>
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.label}>Add Product Name:</Text>
      <InputField
        placeholder="Product Title"
        onChangeText={(text) => setProductName(text)}
        iconName="user"
      />
      <Text style={styles.label}>Add Product Weight (optional):</Text>
      <InputField
        placeholder="Weight"
        onChangeText={(text) => setProductWeight(text)}
        iconName="user"
      />
      <Text style={styles.label}>From:</Text>
      <InputField
        placeholder="Pickup Location"
        onChangeText={(text) => setPickupLocation(text)}
        iconName="user"
      />
      <Text style={styles.label}>To:</Text>
      <InputField
        placeholder="Delivery Location"
        onChangeText={(text) => setDeliveryLocation(text)}
        iconName="user"
      />
      <Text style={styles.label}>Select Delivery Date and Time:</Text>
      <TouchableOpacity onPress={showDateTimePicker} style={styles.datePickerButton}>
        <Text style={styles.datePickerText}>{deliveryDateTime.toLocaleString()}</Text>
      </TouchableOpacity>
      {isDateTimePickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={deliveryDateTime}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={{ marginTop: 30}}>
      <LoginButton title="Post" onPress={handlePost} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 20,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  uploadText: {
    color: '#fff',
    textAlign: 'center',
  },
  label: {
    color: "#fff",
    fontFamily: "Lato-Bold",
    fontSize: 15,
    marginBottom: 10,
    marginTop: 15,
  },
  datePickerButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  datePickerText: {
    color: "#000",
    fontSize: 16,
  },
});

export default AddPostScreen;
