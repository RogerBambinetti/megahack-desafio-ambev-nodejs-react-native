import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ListItem(props) {

    return (
        <TouchableOpacity style={styles.item} onPress={props.function}>
            <View style={styles.itemIcon}>
                <FontAwesome name={props.icon} size={30} color="#008dd3" />
            </View>
            <Text style={styles.itemText}>{props.text}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    item: {
        height: 70,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemIcon: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 13,
        color: '#4D4D4D',
        marginHorizontal: 15
    }
});