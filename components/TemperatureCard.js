import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const TemperatureCard = (props) => {

    const styles = StyleSheet.create({
        card:{
            backgroundColor: props.backgroundColor,
            justifyContent:'center',
            alignItems:'center',
            margin:10,
            width:160,
            height:150,
            borderRadius:10,
            marginBottom:10,

        },
        Text:{
            color: 'white',
            margin: 5,
            fontSize: 20,
        },
        cardIcon:{
            color:'white',
            margin:15,
        },
    });
    return (
        <View style={styles.card}>
            <Text style={styles.Text}>Ha Noi</Text>
            <FontAwesome5 name="sun" style={styles.cardIcon} size={40} />
            <Text style={styles.Text}>{props.temperature}</Text>
        </View>
    )
}
export default TemperatureCard