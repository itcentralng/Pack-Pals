import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>You have a new message from PackPals.</Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>Your delivery request has been accepted.</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    color: '#fff',
    marginBottom: 20,
  },
  notification: {
    backgroundColor: '#333', // Dark gray background for notifications
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  notificationText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Lato-Regular'
  },
});

export default NotificationScreen;
