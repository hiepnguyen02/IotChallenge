import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

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
    }
  });


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
      <EvilIcons name="refresh" size={24} color="black" />
      </TouchableOpacity>


      <Entypo name="air" size={40} style={{marginTop:40}} color="orange" />
      <View style ={styles.aqi}>
        <Text style={styles.aqiText}>{currentAqi}</Text>

      </View>
    </View>
  );
}

