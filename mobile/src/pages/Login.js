import React from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Logo from  '../assets/logo.png';

export default function Login({ navigation }) {

    function handleLogin() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.label}>Usuário</Text>
                <TextInput style={styles.input} />
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.button} onPress={handleLogin}><FontAwesome5 name='arrow-right' size={30} color="#F2F2F2" /></TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008dd3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderWidth: 1.5,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 15
    },
    form: {
        width: '80%'
    },
    label: {
        fontSize: 13,
        color: '#f6f2ee'
    },
    button: {
        width: 70,
        height: 70,
        backgroundColor: '#fcd353',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        alignSelf: 'center'
    },
    logo:{
        width: 200,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});