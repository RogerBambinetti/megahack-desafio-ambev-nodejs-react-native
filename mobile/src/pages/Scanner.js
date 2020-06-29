import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Data: ${data}`);
    };

    function handleHomeNavigation() {
        navigation.navigate('Home');
    }

    return (
        <>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.scanner}
            />
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleHomeNavigation}><FontAwesome name='arrow-left' size={30} color="#F2F2F2" /></TouchableOpacity>
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
    scanner: {
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