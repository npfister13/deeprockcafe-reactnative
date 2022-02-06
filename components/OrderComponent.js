import React, { Component } from 'react';
import { View, Text, Image, Animated, ScrollView, StyleSheet, Button, TextInput, Alert, TouchableOpacity, Modal  } from 'react-native';
import { Card, Input, } from 'react-native-elements';
import RenderHeader from './HeaderComponent';
import { DRINKS } from '../shared/drinks';
import { FOODS } from '../shared/foods';

function RenderFood(props) {

    const {foods} = props;

    const foodList = foods.map(food => {
        return (
            <View key={food.id} style={{flexDirection: 'row', padding: 10}}>
                <Image
                    style={styles.itemImage}
                    resizeMode="cover"
                    source={food.image}
                />
                <Text style={styles.name}>
                    {food.name}
                    <Text style={styles.price}>
                        {'\n' + food.price}
                    </Text>
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        props.onShowModal() 
                        props.onAddButton(food)
                    }}  
                    style={{width: 60, height: 40, backgroundColor: 'white', alignSelf: 'center'}}
                >
                    <Text 
                        style={styles.addButton}
                    >Add</Text>
                </TouchableOpacity>
            </View>
        )
    })
    return (
        <View style={{backgroundColor: '#ececec', borderWidth: 2, borderColor: '#e0e1e2', borderRadius: 5, margin: 10}}>{foodList}</View>
    )
}

class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
            // scaleValue: new Animated.Value(0),
            showModal: false,
            drinks: DRINKS,
            foods: FOODS,
            drinkList: [],
            foodList: [],
            orderArray: [{text:'my obj', otherText:'second part of obj'}],
            
        };   
    }
    
    addToOrder(food){
        this.setState({orderArray: [...this.state.orderArray, food]});
        console.log(this.state.orderArray)
    };

    toggleModal() {
        this.setState({showModal: !this.state.showModal})
    }

    static navigationOptions = {
        title: 'Order'
    }
    
    render() {
        return (
            <ScrollView style={{backgroundColor: '#ececec'}}>
                <RenderHeader title={"Order"} />
                <View style={styles.container}>
                    <Card style={styles.orderCard}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.toggleModal()}
                        >
                            <Text>Start order</Text>
                        </TouchableOpacity>
                    </Card>
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={this.state.showModal}
                        onRequestClose={() => this.toggleModal()} 
                    >
                        
                            <ScrollView>
                                <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Food</Text>
                                <RenderFood 
                                    foods={this.state.foods} 
                                    onShowModal={() => this.toggleModal()}
                                    orderArray={this.state.orderArray} 
                                    onAddButton={() => this.addToOrder()}
                                />
                            </ScrollView>
                    </Modal>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        textAlign: 'center',
        padding: 10,
    },
    orderCard: {
        alignContent: 'center',
        alignItems: 'center',
        width: 260,
        height: 200
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
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
    menuItem: {
        flexDirection: 'row',
        marginTop: 6,
        marginBottom: 6,
        alignItems: 'center'
    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    name: {
        fontSize: 22,
        flex: 1,
        flexWrap: 'wrap',
    },
    price: {
        fontSize: 20,
    },
    addButton: {
        alignSelf: 'center',
        alignItems: 'center', 
        padding: 10, 
        fontSize: 16
    }
})

export default Order;
