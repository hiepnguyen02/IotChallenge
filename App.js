import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import TemperatureCard from './components/TemperatureCard.js';
import HumidityCard from './components/HumidityCard.js';
import MapView from 'react-native-maps';

export default function App() {



  
   const [darkTheme, setdarkTheme] = useState(true)
   const [currentAqi, setCurrentAqi] = useState('184')
   const [currentLocation, setCurrentLocation] = useState('Ha Noi')
   const [currentTemperature, setCurrentTemperature] = useState('27')
   const [currentHumidity, setCurrentHumidity] = useState('88')


   const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignItems: 'center',
    },
    aqi:{
      alignItems:'center',
      flexDirection:'row',
      marginTop:10,
    },
    aqiText:{
      color: darkTheme ? '#e0e0e0' : 'black',
      fontSize: 40,
    },
    refreshButton:{
        position: 'absolute',
        margin: 30,
        alignSelf: 'flex-start',
    },
    cardView:{
      color: darkTheme ? 'black' : 'white',
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
      <EvilIcons name="refresh" size={30} color={darkTheme ? 'white' : 'black'} />
      </TouchableOpacity>


      <Entypo name="air" size={40} style={{marginTop:55}} color="orange" />
      <View style ={styles.aqi}>
        <Text style={styles.aqiText}>{currentAqi}</Text>
      </View>

      <View style={styles.cardView}>
        <TemperatureCard backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'} temperature={'21°C'} icon={1} ></TemperatureCard>
        <HumidityCard backgroundColor={darkTheme ? '#D29600' : 'FCC63F' } humidity={'56%'} icon={1}></HumidityCard>
      </View>
      <View>
      <MapView style={styles.map} />
      </View>
    </View>
  );
}

