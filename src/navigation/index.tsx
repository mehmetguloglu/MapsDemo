import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddLocationScreen from '../screens/AddLocationScreen';
import SavedLocationsScreen from '../screens/SavedLocationsScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SavedLocationsScreen"
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="AddLocationScreen"
          component={AddLocationScreen}
          options={{
            tabBarLabel: 'Konum Ekle',
          }}
        />
        <Tab.Screen
          name="SavedLocationsScreen"
          component={SavedLocationsScreen}
          options={{
            tabBarLabel: 'Konumlarım',
            headerShown: true,
            headerTitle: 'Konumlarım',
            headerTitleAlign: 'center',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
