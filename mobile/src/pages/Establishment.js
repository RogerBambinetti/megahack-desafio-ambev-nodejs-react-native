import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import ListItem from '../components/ListItem';

import Picture from '../assets/baiucas.jpg';

import Profile1 from '../assets/profile1.png';
import Profile2 from '../assets/profile2.png';
import Profile3 from '../assets/profile3.png';

export default function Establishment({ navigation }) {

    function handleMapNavigation() {
        navigation.navigate('Map');
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.pictureContainer}>
                    <Image source={Picture} style={styles.picture} />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <LinearGradient
                    style={styles.fader}
                    colors={['rgba(246, 242, 238, 1)', 'transparent']}
                    pointerEvents={'none'}
                />
                <ScrollView style={styles.bottom}>
                    <Text style={styles.divider}>Avaliação de "Baiuca's"</Text>
                    <View style={styles.evaluationContainer}>
                        <FontAwesome5 name='star' size={30} color="#fcd353" style={styles.evaluationIcon}/>
                        <FontAwesome5 name='star' size={30} color="#fcd353" style={styles.evaluationIcon}/>
                        <FontAwesome5 name='star' size={30} color="#fcd353" style={styles.evaluationIcon}/>
                        <FontAwesome5 name='star' size={30} color="#CCCCCC" style={styles.evaluationIcon}/>
                        <FontAwesome5 name='star' size={30} color="#CCCCCC" style={styles.evaluationIcon}/>
                    </View>
                    <Text style={styles.divider}>Ranking</Text>
                    <View style={styles.rankingContainer}>
                        <View style={styles.rankingItem}>
                            <Text style={styles.rankingPosition}>1</Text>
                            <Image source={Profile1} style={styles.rankingPicture} />
                            <Text style={styles.rankingName}>Caleb Brito</Text>
                        </View>
                        <View style={styles.rankingItem}>
                            <Text style={styles.rankingPosition}>2</Text>
                            <Image source={Profile3} style={styles.rankingPicture} />
                            <Text style={styles.rankingName}>Isa Moraes</Text>
                        </View>
                        <View style={styles.rankingItem}>
                            <Text style={styles.rankingPosition}>3</Text>
                            <Image source={Profile2} style={styles.rankingPicture} />
                            <Text style={styles.rankingName}>Nathan Breno</Text>
                        </View>
                    </View>
                    <ListItem icon='eye' text='Ver ranking completo' />
                    <Text style={styles.divider}>Diferenciais</Text>
                    <ListItem icon='music' text='Karaokê' />
                    <ListItem icon='bowling-ball' text='Boliche' />
                    <ListItem icon='tv' text='TV' />
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleMapNavigation}><FontAwesome5 name='arrow-left' size={30} color="#F2F2F2" /></TouchableOpacity>
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
    pictureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        borderRadius: 10,
        margin: 25,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    picture: {
        width: 400,
        resizeMode: 'contain',
        alignSelf: 'center'
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
        backgroundColor: '#CCCCCC',
        marginBottom: 5,
    },
    rankingItem: {
        alignItems: 'center'
    },
    rankingName: {
        fontSize: 13,
        color: '#4D4D4D',
    },
    rankingPosition: {
        fontSize: 20,
        color: '#008dd3',
        fontWeight: 'bold'
    },
    evaluationContainer:{
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    evaluationIcon:{

    }
});