import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RenderHeader({title}) {
    return (
        <View style={{backgroundColor: '#461f1f', height: 80, alignContent: 'center', alignItems: 'center', padding: 20}}>
            <Text style={styles.cafe}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cafe: {
        fontSize: 36,
        color: 'white'
    },
})

export default RenderHeader;