import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import TemperatureCard from './components/TemperatureCard.js';
import HumidityCard from './components/HumidityCard.js';
import Map from './components/Map.js';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function Devices() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Home() {
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
      fontSize: 30,
    },
    refreshButton:{
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    cardView:{
      color: darkTheme ? 'black' : 'white',
      margin: 10,
      flexDirection: 'row',
      
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: 350,
    },
  });


  return (
    <View style={styles.container}>
    <Map></Map>
    <TouchableOpacity style={styles.refreshButton}>
    <EvilIcons name="refresh" size={30} color={darkTheme ? 'white' : 'black'} />
    </TouchableOpacity>


    <Entypo name="air" size={30} color="orange" />
    <View style ={styles.aqi}>
      <Text style={styles.aqiText}>{currentAqi}</Text>
    </View>

    <View style={styles.cardView}>
      <TemperatureCard backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'} temperature={'21°C'} icon={1} ></TemperatureCard>
      <HumidityCard backgroundColor={darkTheme ? '#D29600' : 'FCC63F' } humidity={'56%'} icon={1}></HumidityCard>
    </View>
  </View>
  );
}

function Personal() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Personal!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Thiết bị"
        component={Devices}
        options={{
          tabBarLabel: 'Thiết bị',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bluetooth-settings" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Trang chủ"
        component={Home}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cá nhân"
        component={Personal}
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



