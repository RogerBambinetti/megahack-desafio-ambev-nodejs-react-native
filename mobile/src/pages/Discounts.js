import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { QRCode } from 'react-native-custom-qr-codes-expo';

import ListItem from '../components/ListItem';

export default function Discounts({ navigation }) {

    const [code, setCode] = useState(null);

    function handleHomeNavigation() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.discount}>
                    {code &&
                        <QRCode content={code} color='#4D4D4D' size={200} />
                    }
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <LinearGradient
                    style={styles.fader}
                    colors={['rgba(246, 242, 238, 1)', 'transparent']}
                    pointerEvents={'none'}
                />
                <ScrollView style={styles.bottom}>
                    <Text style={styles.divider}>Descontos</Text>
                    <ListItem icon='tag' text='10% de desconto em qualquer cerveja da Skol lata (Custo de 200 pontos)' function={() => setCode('123:AEIO')} />
                    <ListItem icon='tag' text='5% de desconto em qualquer Guaraná Antárctica (Custo 100 pontos)' function={() => setCode('356:AEIO')}/>
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleHomeNavigation}><FontAwesome5 name='arrow-left' size={30} color="#F2F2F2" /></TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008dd3'
    },
    top: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    },
    bottom: {
        backgroundColor: '#f6f2ee',
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 25,
    },
    discount: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        borderRadius: 10,
        margin: 25,
        backgroundColor: 'white'
    },
    divider: {
        fontSize: 15,
        color: '#CCCCCC',
        marginVertical: 25,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCCCCC'
    },
    fader: {
        position: 'absolute',
        width: '100%',
        height: 40,
        zIndex: 5,
        borderRadius: 25
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        zIndex: 5,
        flexDirection: 'row'
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