import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useMemo, useState, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './src/components/Screens/Splash Screen/SplashScreen';
import LoginScreen from './src/components/Screens/Login Screen/LoginScreen';
import Dashboard from './src/components/Screens/Dashboard/Dashboard';
import NotiProf from './src/components/NotiProf/NotiProf';
import MyFlock from './src/components/Screens/Flock Screen/MyFlock';
import CreateNewFlock from './src/components/Screens/Flock Screen/New Flock/CreateNewFlock';
import SetupChicks from './src/components/Screens/Flock Screen/Setup Chicks/SetupChicks';
import InsidePen from './src/components/Screens/Flock Screen/Setup Chicks Inside Pen/InsidePen';
import ProfileScreen from './src/components/Screens/Profile Screen/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#000E28' },
        headerTintColor: 'white'
      }}>

        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Dashboard' component={Dashboard}
          options={{
            title: 'Farm Festa', //Set Header Title
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: '#ECECEC', //Set Header color
            },
            headerTintColor: 'red', //Set Header text color

            headerRight: () => <NotiProf />,
          }} />
        <Stack.Screen name='MyFlock' component={MyFlock} options={{ headerShown: false }} />
        <Stack.Screen name='CreateNewFlock' component={CreateNewFlock} options={{ headerShown: false }} />
        <Stack.Screen name='SetupChicks' component={SetupChicks} options={{ headerShown: false }} />
        <Stack.Screen name='InsidePen' component={InsidePen} options={{ headerShown: false }} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App;