import React, { Component } from 'react';
import { View, ScrollView, Text, Animated, StyleSheet } from 'react-native';

import { Card } from 'react-native-elements';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            scaleValue: new Animated.Value(0)
        };   
    }
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <View style={{backgroundColor: '#461f1f', height: 160, alignContent: 'center', alignItems: 'center', padding: 20}}>
                    <Text style={styles.deepRock}>Deep Rock</Text>
                    <Text style={styles.cafe}>Café</Text>
                </View>
                <View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    deepRock: {
        fontFamily: 'Roboto',
        fontSize: 64,
        // fontWeight: 'bold',
        color: 'white'
    },
    cafe: {
        fontSize: 36,
        color: 'white'
    }
})

export default Home;