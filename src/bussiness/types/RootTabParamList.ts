import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {LatLng} from 'react-native-maps';

export type RootTabParamList = {
  AddLocationScreen:
    | {
        editName: string;
        editCoordinate: LatLng;
        editColor: string;
        index: number;
      }
    | undefined;
  SavedLocationsScreen: undefined;
  DirectionsScreen: undefined;
};

export type AddLocationScreenNavigationProps = BottomTabNavigationProp<
  RootTabParamList,
  'AddLocationScreen'
>;

export type SavedLocationsScreenNavigationProps = BottomTabNavigationProp<
  RootTabParamList,
  'SavedLocationsScreen'
>;
export type DirectionsScreenNavigationProps = BottomTabNavigationProp<
  RootTabParamList,
  'DirectionsScreen'
>;

export type AddLocationScreenRouteProp = RouteProp<
  RootTabParamList,
  'AddLocationScreen'
>;
