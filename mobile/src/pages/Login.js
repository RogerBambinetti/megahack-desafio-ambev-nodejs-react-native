import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Login() {

    return (
       <View style={styles.container}>
           <View style={styles.top}></View>
           <View style={styles.bottom}></View>
       </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#2375FF'
    },
    top:{
        flex: 2
    },
    bottom:{
        backgroundColor: '#F2F2F2',
        flex: 3,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    }
});