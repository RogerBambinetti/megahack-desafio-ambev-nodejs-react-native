import React from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({ navigation }) {

    function handleLogin() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Usuário</Text>
                <TextInput style={styles.input} />
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.button} onPress={handleLogin}><FontAwesome name='arrow-right' size={30} color="#F2F2F2" /></TouchableOpacity>
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
        borderRadius: 25,
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
        width: '100%',
        height: 60,
        backgroundColor: '#fcd353',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        alignSelf: 'center'
    }
});