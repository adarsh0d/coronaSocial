import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Picker, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ContactsScreen from './screens/ContactsScreen';
import HealthLog from './screens/Statistics';
import FAQScreen from './screens/FAQScreen';
const Tab = createMaterialTopTabNavigator();

export default function Navigator() {

  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Contacts') {
              iconName = 'ios-home';
            } else if (route.name === 'Statistics') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'FAQs') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
          <Tab.Screen name="Contacts" component={ContactsScreen} />
          <Tab.Screen name="Statistics" component={HealthLog} />
          <Tab.Screen name="FAQs" component={FAQScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
