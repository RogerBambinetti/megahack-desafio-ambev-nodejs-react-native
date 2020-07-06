import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import ListItem from '../components/ListItem';

export default function Home({ navigation }) {

    function handleScannerNavigation() {
        navigation.navigate('Scanner');
    }

    function handleMapNavigation() {
        navigation.navigate('Map');
    }

    function handleTrophiesNavigation() {
        navigation.navigate('Trophies');
    }

    function handleDiscountsNavigation() {
        navigation.navigate('Discounts');
    }

    function handleChallengeNavigation() {
        navigation.navigate('Challenges');
    }

    function handleLogout() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.circle}>
                    <Text style={styles.score}>Você possui</Text>
                    <Text style={styles.points}>135 pontos</Text>
                    <Text style={styles.score}>em "Baiuca's"</Text>
                </View>
            </View>

            <View style={{flex:1}}>
                <LinearGradient
                    style={styles.fader}
                    colors={['rgba(246, 242, 238, 1)', 'transparent']}
                    pointerEvents={'none'}
                />
                <ScrollView style={styles.bottom}>
                    <Text style={styles.divider}>Ganhe mais pontos</Text>
                    <ListItem icon='qrcode' text='Scanear produto' function={handleScannerNavigation} />
                    <ListItem icon='flag' text='Realizar desafio' function={handleChallengeNavigation}/>
                    <ListItem icon='question' text='Responder questionário' />
                    <Text style={styles.divider}>Conquistas</Text>
                    <ListItem icon='trophy' text='Troféus' function={handleTrophiesNavigation}/>
                    <ListItem icon='tags' text='Descontos' function={handleDiscountsNavigation}/>
                    <Text style={styles.divider}>Estabelecimentos</Text>
                    <ListItem icon='map' text='Procurar estabelecimentos' function={handleMapNavigation} />
                    <Text style={styles.divider}>Conta</Text>
                    <ListItem icon='user' text='Editar perfil' />
                    <ListItem icon='sign-out-alt' text='Sair' function={handleLogout}/>
                </ScrollView>
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
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#fcd353',
        margin: 25
    },
    score: {
        fontSize: 15,
        color: '#f6f2ee'
    },
    level: {
        fontSize: 25,
        color: '#f6f2ee',
    },
    points: {
        fontSize: 20,
        color: '#fcd353',
    },
    divider: {
        fontSize: 15,
        color: '#CCCCCC',
        marginVertical: 25,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCCCCC'
    },
    fader:{
        position: 'absolute', 
        width: '100%', 
        height: 40, 
        zIndex: 5, 
        borderRadius: 25
    }
});