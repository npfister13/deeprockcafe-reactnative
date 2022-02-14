import React, { Component } from 'react';
import { View, ScrollView, Text, Animated, StyleSheet, Image, Button } from 'react-native';
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
            <ScrollView style={{backgroundColor: '#ececec'}}>
                <View style={{backgroundColor: '#461f1f', height: 180, alignContent: 'center', alignItems: 'center', padding: 20}}>
                    <Text style={styles.deepRock}>Deep Rock</Text>
                    <Text style={styles.cafe}>Café</Text>
                </View>
                    
                <View style={{height: 200}}>
                    <Image style={styles.coffeePlant} source={require('../shared/images/coffee-plant-01.jpg')} />
                </View>
                <View>
                    <View style={{padding: 20}}>
                        <Image style={{maxHeight: '100%', maxWidth: '100%', width: 400, height: 200}} source={require('../shared/images/coffee-stock-photo-02.jpg')} />
                        <View style={{borderWidth: 1, borderColor: 'grey', alignContent: 'center', alignItems: 'center', backgroundColor: 'white', marginBottom: 20}}>
                            <Text style={styles.infoPanelHeader}>Featured Item</Text>
                            <Text style={styles.infoPanelText}>{'\t\t'}Try a hot cup of coffee, freshly made, always!</Text>
                        </View>
                    
                        <Image style={{maxHeight: '100%', maxWidth: '100%', width: 400, height: 200}} source={require('../shared/images/coffee-stock-photo-03.jpg')} />
                        <View style={{borderWidth: 1, borderColor: 'grey', alignContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                            <Text style={styles.infoPanelHeader}>Staff Favorites</Text>
                            <Text style={styles.infoPanelText}>{'\t\t'}Some of our products are so good, our staff have their own favorites! Check them out today</Text>
                        </View>
                    </View>
                </View>
{/* 
                <Card 
                    image={require('./images/coffee-stock-photo-01.jpg')}
                    style={{borderColor: 'red'}}>
                    <Text style={styles.infoPanelText}>
                        Our coffee is taken straight from the ancient coffee beans from the Ethiopian plateau and light roasted to perfection.
                    </Text>
                </Card>
                <Card 
                    image={require('./images/coffee-stock-photo-03.jpg')}
                    style={{}}>
                    <Text style={styles.infoPanelText}>
                        Our brewistas know exactly how to make your coffee your way, just let them know your combination and they'll perfect it.
                    </Text>
                </Card> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    infoPanelHeader: {
        fontFamily: 'Roboto',
        fontSize: 26,
        textAlign: 'center'
    },
    infoPanelText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    coffeePlant: {
        position: 'relative',
        height: '100%',
        width: '200%',
        left: '-45%',
        // top: '-10%',
        zIndex: -1
    },
    deepRock: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 64,
        color: 'white'
    },
    cafe: {
        fontSize: 36,
        fontFamily: 'serif',
        color: 'white'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
})

export default Home;