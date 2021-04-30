import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import Home from '../home/Home';
import My from '../my/My';

const TabNavigator=createBottomTabNavigator(
  {
    Home: Home,
     My:My,
  },
  
)
export default TabNavigator