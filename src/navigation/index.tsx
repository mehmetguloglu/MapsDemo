import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LocationScreen from '../screens/LocationScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="LocationScreen" component={LocationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
