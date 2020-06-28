import React from 'react';
import { StyleSheet, View} from 'react-native';

export default function Main() {
    return (
        <View>
            <Text>Main</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});