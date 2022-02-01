import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { Card } from 'react-native-elements';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            scaleValue: new Animated.Value(0)
        };   
    }
    static navigationOptions = {
        title: 'About'
    }

    render() {
        return (
            //scrollview loads all child components at once;
            //FlatList uses Lazy Loading - only part of the list is rendered at a time (whats on the screen and whats about to be)
            //FlatList is good for performance, but ScrollView is good for smaller lists
            <View>
                <Text>About</Text>
            </View>
        );
    }
}

export default About;
