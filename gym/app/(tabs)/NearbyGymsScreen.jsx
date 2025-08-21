import React, {useEffect, useState} from "react";
import {View, StyleSheet, ActivityIndicator, Alert} from 'react-native'
import MapView, {Marker} from "react-native-maps"
import * as Location from "expo-location"

export default function NearbyGymsScreen({theme}){
    
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        "Boa noite"
    })

}