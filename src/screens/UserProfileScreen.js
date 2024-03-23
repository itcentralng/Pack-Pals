import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LogoutButton from '../components/LogoutButton';

const UserProfileScreen = ({ navigation }) => {
  const [profilePicture, setProfilePicture] = useState(null)
  const [staffInfo, setStaffInfo] = useState({
    name: '',
    email: '',
    address: '',
    nationality: '',
    contactNumber: '',
    rating: 4.5, // Example rating
    reviews: [
      { id: 1, text: 'Great service, very reliable!', author: 'Alice' },
      { id: 2, text: 'Excellent communication, highly recommended.', author: 'Bob' },
      // Add more reviews as needed
    ],
  });

  const fetchStaffInfo = () => {
    // Simulated data fetching
    setStaffInfo({
      name: 'John D. Alexer',
      email: 'johndalexer@gmail.com',
      address: 'No.11 Basuaner Isa Kaita, Kaduana',
      nationality: 'Nigeria',
      contactNumber: '081 56848384',
      rating: 4.5, // Example rating
      reviews: [
        { id: 1, text: 'Great service, very reliable!', author: 'Alice' },
        { id: 2, text: 'Excellent communication, highly recommended.', author: 'Bob' },
        // Add more reviews as needed
      ],
    });

    setProfilePicture('https://t3.ftcdn.net/jpg/01/74/17/14/360_F_174171415_o4EvnOmPdt1zn7x0wH9ZWw9ROsWHf34J.jpg')
  };

  useEffect(() => {
    fetchStaffInfo();
  }, []);

  const handleProfileUpdate = () => {
    // Handle profile update logic
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={20}
          color="gold"
          style={styles.starIcon}
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      <Text style={styles.heading}>Alexer_D</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rating: {staffInfo.rating}</Text>
        <View style={{ display: "flex", flexDirection: "row"}}>
        {renderStars(staffInfo.rating)}
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{staffInfo.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{staffInfo.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.text}>{staffInfo.address}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nationality:</Text>
        <Text style={styles.text}>{staffInfo.nationality}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Contact Number:</Text>
        <Text style={styles.text}>{staffInfo.contactNumber}</Text>
      </View>
      
      <Button title="Edit Profile" onPress={handleProfileUpdate} />
      <LogoutButton onPress={handleLogout} />

      <Text style={styles.reviewHeading}>Client Reviews:</Text>
      {staffInfo.reviews.map(review => (
        <View key={review.id} style={styles.reviewContainer}>
          <Text style={styles.reviewText}>{review.text}</Text>
          <Text style={styles.authorText}>- {review.author}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#000"
  },
  profilePicture: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "gold",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  ratingText: {
    color: "gold",
    fontFamily: "Lato-Bold",
    fontSize: 18
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    color: "gold",
    marginBottom: 5
  },
  rating: {
    fontSize: 16,
    marginBottom: 20,
    color: "gold"
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontFamily: 'Lato-Bold',
    marginRight: 10,
    width: 100,
    color: "#fff"
  },
  text: {
    flex: 1,
    fontFamily: 'Lato-Regular',
    color: "#fff"
  },
});

export default UserProfileScreen;
