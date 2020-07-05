import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import ListItem from '../components/ListItem';

export default function Establishment({ navigation }) {

    function handleEstablishmentNavigation() {
        navigation.navigate('Establishment');
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.picture}>

                </View>
            </View>

            <View style={{ flex: 1 }}>
                <LinearGradient
                    style={styles.fader}
                    colors={['rgba(246, 242, 238, 1)', 'transparent']}
                    pointerEvents={'none'}
                />
                <ScrollView style={styles.bottom}>
                    <Text style={styles.divider}>Ranking</Text>
                    <View style={styles.rankingContainer}>
                        <View style={styles.rankingItem}>
                            <Text style={styles.rankingPosition}>#1</Text>
                            <View style={styles.rankingPicture}></View>
                            <Text style={styles.rankingName}>Zé do bar</Text>
                        </View>
                        <View style={styles.rankingItem}>
                        <Text style={styles.rankingPosition}>#2</Text>
                            <View style={styles.rankingPicture}></View>
                            <Text style={styles.rankingName}>zé do bar</Text>
                        </View>
                        <View style={styles.rankingItem}>
                        <Text style={styles.rankingPosition}>#3</Text>
                            <View style={styles.rankingPicture}></View>
                            <Text style={styles.rankingName}>Zé do bar</Text>
                        </View>
                    </View>
                    <ListItem icon='eye' text='Ver ranking completo' />
                    <Text style={styles.divider}>Diferenciais</Text>
                    <ListItem icon='music' text='Karaoke' />
                    <ListItem icon='bowling-ball' text='Boliche' />
                    <ListItem icon='tv' text='TV' />
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleEstablishmentNavigation}><FontAwesome5 name='arrow-left' size={30} color="#F2F2F2" /></TouchableOpacity>
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
    picture: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        borderRadius: 10,
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
    },
    rankingContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rankingPicture: {
        width: 110,
        height: 110,
        borderRadius: 10,
        backgroundColor: '#CCCCCC'
    },
    rankingItem:{
        alignItems: 'center'
    },
    rankingName:{
        fontSize: 13,
        color: '#4D4D4D',
    },
    rankingPosition:{
        fontSize: 20,
        color: '#fcd353',
    }
});