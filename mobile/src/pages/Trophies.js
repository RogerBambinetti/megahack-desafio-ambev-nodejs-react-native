import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity,Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import ListItem from '../components/ListItem';

import Trophy1 from '../assets/trophy1.png';
import Trophy2 from '../assets/trophy2.png';
import Trophy3 from '../assets/trophy3.png';

export default function Home({ navigation }) {

    function handleHomeNavigation() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.trophyContainer}>
                  <Image source={Trophy2} style={styles.trophy}/>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <LinearGradient
                    style={styles.fader}
                    colors={['rgba(246, 242, 238, 1)', 'transparent']}
                    pointerEvents={'none'}
                />
                <ScrollView style={styles.bottom}>
                    <Text style={styles.divider}>Troféus</Text>
                    <ListItem icon='trophy' text='Lar doce bar' />
                    <ListItem icon='trophy' text='Explorador dos 7 bares' />
                    <ListItem icon='question' text='Troféu desconhecido' />
                    <ListItem icon='question' text='Troféu desconhecido' />
                    <ListItem icon='question' text='Troféu desconhecido' />
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
    trophy: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 100,
        margin: 25
    },
    trophyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        width: 200,
        height: 200,
        borderRadius: 100,
        margin: 25,
        
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