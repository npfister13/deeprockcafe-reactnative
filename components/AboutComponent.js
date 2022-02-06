import React, { Component } from 'react';
import { View, Text, Image, Animated, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import RenderHeader from './HeaderComponent';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            // scaleValue: new Animated.Value(0)
        };   
    }
    static navigationOptions = {
        title: 'About'
    }

    render() {
        return (
            <ScrollView>
                <RenderHeader title={'About Us'} />
                <View style={styles.container}>
                    <Card>
                        <Image style={styles.aboutImage} source={require('../shared/images/cafe-baristas-2.jpeg')} />
                        <Text>
                            We love coffee
                        </Text>
                    </Card>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    aboutImage: {
        position: 'relative',
        height: 300,
        width: 325,
        padding: 5,
        borderWidth: 1,
    },
    name: {
        fontSize: 22,
        flex: 1,
        flexWrap: 'wrap',
    },
    description: {
        fontSize: 14,
    },
    favorite: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'right'
    }

})

export default About;
