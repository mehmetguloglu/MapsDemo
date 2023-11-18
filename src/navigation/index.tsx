import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddLocationScreen from '../screens/AddLocationScreen';
import SavedLocationsScreen from '../screens/SavedLocationsScreen';
import DirectionsScreen from '../screens/DirectionsScreen';
import HeaderRight from '../components/locations/HeaderRight';
import {BadgePlus, MapPin, MapPinned} from 'lucide-react-native';

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
            tabBarIcon: ({focused, color}) => (
              <BadgePlus color={focused ? color : 'gray'} />
            ),
          }}
        />
        <Tab.Screen
          name="SavedLocationsScreen"
          component={SavedLocationsScreen}
          options={{
            tabBarLabel: 'Konumlarım',
            headerShown: true,
            headerTitle: 'Konumlarım',
            tabBarIcon: ({focused, color}) => (
              <MapPin color={focused ? color : 'gray'} />
            ),
            headerTitleAlign: 'center',
            headerRight: () => <HeaderRight />,
          }}
        />
        <Tab.Screen
          name="DirectionsScreen"
          component={DirectionsScreen}
          options={{
            tabBarLabel: 'Rota Oluştur',
            tabBarIcon: ({focused, color}) => (
              <MapPinned color={focused ? color : 'gray'} />
            ),
            headerShown: true,
            headerTitle: 'Rota Oluştur',
            headerTitleAlign: 'center',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
