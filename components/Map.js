import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Map = () => {
    const [pin, setPin] = useState({
        latitude: 37.78825,
        longitude: -122.4324
       })

    const styles = StyleSheet.create({
         map: {
            width: Dimensions.get('window').width,
            height: 350,
          },
    });
    return (
        <View style={styles.map}>
             <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDI9zxx3UCDJ28-iykL3qndwulf1AblEGs',
        language: 'en',
      }}
    />
            <MapView style={styles.map} 
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
    }} 
        provider="google"
      >
          <Marker 
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }}
            pinColor="black"
            draggable={true}
            onDragStart = {(e) => {
                console.log("Drag start". e.nativeEvent.coordinate)
            }}
            onDragEnd = {(e) => {
                setPin({
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude
                })
            }}
            
            
          >
            <Callout>
              <Text>I'm Here</Text>
            </Callout>
          </Marker>
          <Circle
            center = {pin} radius={1000}/>
      </MapView>
        </View>
    )
}
export default Map