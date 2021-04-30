// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Home from './app/home/Home';
import Login from './app/home/Login';
import Reg from './app/home/Reg'
import HomePage from './app/home/HomePage'
import Add from './app/home/Add'
import Chat from './app/home/Chat'
import My from './app/my/My'
import Homexq from './app/home/Homexq'
// import tab  from './app/router'


export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator>

       <Stack.Screen name="Home" component={Home}  
        options={{ title: '' }}
       />
       <Stack.Screen name="Login" component={Login}  
        options={{ title: 'LOG IN' }}
       />
       <Stack.Screen name="Reg" component={Reg}  
        options={{ title: 'REGISTER' }}
       />
       <Stack.Screen name="HomePage" component={HomePage}  
        options={{ title: '' }}
       />
       <Stack.Screen name="Add" component={Add}  
        options={{ title: '' }}
       />
        <Stack.Screen name="Chat" component={Chat}  
        options={{ title: '' }}
       />
 
      </Stack.Navigator>
  
    </NavigationContainer>
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
