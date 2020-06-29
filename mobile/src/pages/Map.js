import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

export default function Map({ navigation }) {

    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        async function loadInitialLocation() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });

                const { latitude, longitude } = coords;

                setCurrentPosition({ latitude, longitude, latitudeDelta: 0.04, longitudeDelta: 0.04 });
            }

        }

        loadInitialLocation();
    }, []);

    function handleHomeNavigation() {
        navigation.navigate('Home');
    }

    if (!currentPosition) {
        return null;
    }

    return (
        <>
            <MapView style={styles.map} initialRegion={currentPosition}>
                <Marker key={1} coordinate={{ latitude: currentPosition.latitude, longitude: currentPosition.longitude }} />
            </MapView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleHomeNavigation}>
                    <FontAwesome name='arrow-left' size={30} color="#F2F2F2" />
                </TouchableOpacity>
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
    },
    map: {
        flex: 1
    },
    button: {
        width: 70,
        height: 70,
        backgroundColor: '#fcd353',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
});