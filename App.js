import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MapScreen from './src/screens/MapScreen';
import MapListScreen from './src/screens/MapListScreen';
import { setNavigator } from './src/screens/navigationRef';
import UserToMeet from './src/components/UserToMeet'

const switchNavigator = createBottomTabNavigator({
  FindMyMate: createBottomTabNavigator({
    UserLocations: MapScreen,
    Users: MapListScreen,
    UserAmMeeting: UserToMeet
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <App  
    ref={navigator => {
      setNavigator(navigator)
    }}
    />
  );    
}

