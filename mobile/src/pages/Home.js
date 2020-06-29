import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import ListItem from '../components/ListItem';

export default function Home({ navigation }) {

    function handleScannerNavigation(){
        navigation.navigate('Scanner');
    }

    function handleMapNavigation(){
        navigation.navigate('Map');
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.circle}>
                    <Text style={styles.level}>Nível 1</Text>
                </View>
                <Text style={styles.score}>Você possui</Text>
                <Text style={styles.points}>135 pontos</Text>
            </View>
            <ScrollView style={styles.bottom}>
                <Text style={styles.divider}>Ganhe mais pontos</Text>
                <ListItem icon='qrcode' text='Scanear produto' function={handleScannerNavigation}/>
                <ListItem icon='flag' text='Realizar desafio' />
                <ListItem icon='question' text='Responder questionário' />
                <Text style={styles.divider}>Conquistas</Text>
                <ListItem icon='trophy' text='Troféus' />
                <ListItem icon='tag' text='Descontos' />
                <Text style={styles.divider}>Estabelecimentos</Text>
                <ListItem icon='map-marker' text='Procurar estabelecimentos' function={handleMapNavigation}/>
                <Text style={styles.divider}>Conta</Text>
                <ListItem icon='user' text='Editar perfil'/>
                <ListItem icon='sign-out' text='Sair'/>
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B6FFF'
    },
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    },
    bottom: {
        backgroundColor: '#F2F2F2',
        flex: 2,
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
        borderColor: '#FFD04D',
        margin: 25
    },
    score: {
        fontSize: 15,
        color: '#F2F2F2'
    },
    level: {
        fontSize: 25,
        color: '#F2F2F2',
    },
    points: {
        fontSize: 30,
        color: '#FFD04D',
    },
    divider: {
        fontSize: 15,
        color: '#CCCCCC',
        marginVertical: 15
    }
});