import React, { Component } from 'react';
import { View, Text, Image, Animated, ScrollView, StyleSheet, Button, TextInput, Alert  } from 'react-native';
import { Card, Input, } from 'react-native-elements';
import RenderHeader from './HeaderComponent';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            text: ''
        };   
    }
    static navigationOptions = {
        title: 'Contact'
    }

    formAlert(){
        Alert.alert("Message sent!");
    }

    resetForm(){
        this.setState({
            name: '',
            email: '',
            text: ''
        })
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#ececec'}}>
                <RenderHeader title={'Contact Us'} />
                <View style={styles.container}>
                    <Card>
                        <Image style={styles.image} source={require('../shared/images/coffee-shop-indoor.jpg')} />
                    </Card>
                    <View style={{borderWidth: 2, borderColor: '#e0e1e2', alignContent: 'center', alignItems: 'center', backgroundColor: 'white', margin: 20}}>
                        <Text style={styles.panelText}>Feedback? Comments? Suggestions?{'\n'}Come meet us in-person or send as an email!</Text>
                        <Text style={styles.panelText}>123 N. Main St, Washington D.C., 12345</Text>
                        <View style={{justifyContent: 'center', margin: 20, width: 250}}>
                            <TextInput
                                placeholder='Name'
                                style={styles.textInput}
                                value={this.state.name}
                                onChangeText={value => this.setState({name: value})}
                            />
                            <TextInput
                                placeholder='Email'
                                style={styles.textInput}
                                value={this.state.email}
                                onChangeText={value => this.setState({email: value})}
                            />
                            <TextInput
                                placeholder='Comment'
                                style={styles.textInput}
                                multiline
                                numberOfLines={3}
                                value={this.state.text}
                                onChangeText={value => this.setState({text: value})}
                            />
                            <View style={{paddingTop: 50}}>
                                <Button
                                    color="#0f1933"
                                    title="Submit"
                                    onPress={() => {
                                        this.formAlert(),
                                        this.resetForm();
                                    }}
                                    
                                />
                            </View>
                        </View>
                    </View>

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
    image: {
        position: 'relative',
        height: 300,
        width: 350,
        padding: 5,
        borderWidth: 1,
    },
    panelText: {
        fontSize: 16,
        margin: 10,
        textAlign: 'center'
    },
    textInput: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e1e2'
    }

})

export default About;
