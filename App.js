import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
// import ReceiveDocumentsScreen from './src/screens/ReceiveDocumentsScreen';
// import UploadDocumentScreen from './src/screens/UploadDocumentScreen';
// import AppraisalFeedbackScreen from './src/screens/AppraisalFeedbackScreen';
// import RequestLeaveScreen from './src/screens/RequestLeaveScreen';
// import LeaveRequestsScreen from './src/screens/LeaveRequestsScreen';
// import LeaveRequestDetailsScreen from './src/screens/LeaveRequestDetailsScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import Chats from './src/screens/ChatsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Define the custom font mapping
const customFonts = {
  'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
  'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
  // Add other font variants if needed
};

const LoadFonts = async () => {
  await Font.loadAsync(customFonts);
};

// const LeaveManagementStack = () => (
//   <Stack.Navigator headerMode="none">
//     <Stack.Screen name="RequestLeave" component={RequestLeaveScreen} options={{ headerShown: false }} />
//     <Stack.Screen name="LeaveRequests" component={LeaveRequestsScreen} options={{ headerShown: false }} />
//     <Stack.Screen name="LeaveRequestDetails" component={LeaveRequestDetailsScreen} options={{ headerShown: false }} />
//   </Stack.Navigator>
// );

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Receive Documents') {
          iconName = focused ? 'document-text' : 'document-text-outline';
        } else if (route.name === 'Upload Document') {
          iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
        } else if (route.name === 'Chats') {
          iconName = focused ? 'star' : 'star-outline';
        } else if (route.name === 'Notification') {
          iconName = focused ? 'calendar' : 'calendar-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'gold',
      inactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: "#000" } // Set background color to black
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    {/* <Tab.Screen name="Receive Documents" component={ReceiveDocumentsScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Upload Document" component={UploadDocumentScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Appraisal Feedback" component={AppraisalFeedbackScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Leave Management" component={LeaveManagementStack} options={{ headerShown: false }} /> */}
    <Tab.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} /> 
    <Tab.Screen name="Chats" component={Chats} options={{ headerShown: false }} /> 
    <Tab.Screen name="Profile" component={UserProfileScreen} options={{ headerShown: false }} /> 
  </Tab.Navigator>
);


const App = () => {
  useEffect(() => {
    LoadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
