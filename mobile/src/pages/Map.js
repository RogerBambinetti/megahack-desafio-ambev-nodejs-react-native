import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
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

    function handleStablishmentNavigation(){
        navigation.navigate('Stablishment');
    }

    if (!currentPosition) {
        return null;
    }

    return (
        <>
            <MapView style={styles.map} initialRegion={currentPosition}>
                <Marker key={1} coordinate={{ latitude: currentPosition.latitude, longitude: currentPosition.longitude }}>
                    <FontAwesome5 name='map-marker' size={35} color="#fcd353" />
                    <Callout onPress={handleStablishmentNavigation}>
                        <View style={styles.callout}>
                            <Text style={styles.calloutTitle}>Bar</Text>
                            <Text style={styles.calloutDescription}>uwsuwgusw suwguswguwsg uwsuwsswgu</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleHomeNavigation}>
                    <FontAwesome5 name='arrow-left' size={30} color="#f6f2ee" />
                </TouchableOpacity>
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
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
    },
    callout:{
        width: 260,
        height: 150,
        borderRadius: 10,
        padding: 5
    },
    calloutTitle:{
        fontSize: 15,
        color: '#CCCCCC'
    },
    calloutDescription:{
        fontSize: 13,
        color: '#4D4D4D'
    }
});