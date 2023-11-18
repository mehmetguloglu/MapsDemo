import {LatLng} from 'react-native-maps';

export default interface ILocation {
  name: string;
  coordinate: LatLng;
  pinColor: string;
}
