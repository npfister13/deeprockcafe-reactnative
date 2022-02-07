import React, { Component } from 'react';
import { View, Text, Image, Animated, ScrollView, StyleSheet, Button, TextInput, Alert, TouchableOpacity, Modal  } from 'react-native';
import { Card, Input, } from 'react-native-elements';
import RenderHeader from './HeaderComponent';
import { DRINKS } from '../shared/drinks';
import { FOODS } from '../shared/foods';

function RenderFood(food) {

    const {foods} = food;

    const foodList = foods.map(foodItem => {
        return (
            <View key={foodItem.id} style={{flexDirection: 'row', padding: 10}}>
                <Image
                    style={styles.itemImage}
                    resizeMode="cover"
                    source={foodItem.image}
                />
                <Text style={styles.name}>
                    {foodItem.name}
                    <Text style={styles.price}>
                        {'\n' + foodItem.price}
                    </Text>
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        food.onShowModal() 
                        food.onAddButton(foodItem)
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

function RenderDrinks(drink) {

    const {drinks} = drink;

    const drinkList = drinks.map(drinkItem => {
        return (
            <View key={drinkItem.id} style={{flexDirection: 'row', padding: 10}}>
                <Image
                    style={styles.itemImage}
                    resizeMode="cover"
                    source={drinkItem.image}
                />
                <Text style={styles.name}>
                    {drinkItem.name}
                    <Text style={styles.price}>
                        {'\n' + drinkItem.price}
                    </Text>
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        drink.onShowModal() 
                        drink.onAddButton(drinkItem)
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
        <View style={{backgroundColor: '#ececec', borderWidth: 2, borderColor: '#e0e1e2', borderRadius: 5, margin: 10}}>{drinkList}</View>
    )
}

function RenderOrderArray(order) {

    const {orderArray} = order;

    const orderList = orderArray.map(orderItem => {
        return (
            <View key={orderItem.id} style={{flexDirection: 'row', padding: 10}}>
                <Image
                    style={styles.itemImage}
                    resizeMode="cover"
                    source={orderItem.image}
                />
                <Text style={styles.name}>
                    {orderItem.name}
                    <Text style={styles.price}>
                        {'\n' + orderItem.price}
                    </Text>
                </Text>
                <TouchableOpacity
                    // onPress={() => {
                    //     drink.onAddButton(orderItem)
                    // }}  
                    style={{width: 60, height: 40, backgroundColor: 'white', alignSelf: 'center'}}
                >
                    <Text 
                        style={styles.addButton}
                    >Remove</Text>
                </TouchableOpacity>
            </View>
        )
    })

    return (
        <ScrollView>
            <View>
                <Card style={styles.orderCard}>
                    {orderList}
                </Card>
            </View>
        </ScrollView>
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
            orderArray: [],
            
        };   
    }

    removeFromOrder(item){

    }
    
    addToOrder(item){
        this.setState({orderArray: [...this.state.orderArray, item]});
    };

    toggleModal() {
        this.setState({showModal: !this.state.showModal})
    }

    static navigationOptions = {
        title: 'Order'
    }
    
    render() {
        console.log(this.state.orderArray.length)
        if (this.state.orderArray.length > 0) {
            return (
                <ScrollView style={{backgroundColor: '#ececec'}}>
                    <RenderHeader title={"Order"} />
                    <RenderOrderArray
                        orderArray={this.state.orderArray}
                    />
                </ScrollView>
            )
        }

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
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => console.log(this.state.orderArray)}
                        >
                            <Text>Console.log</Text>
                        </TouchableOpacity>
                    </Card>
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={this.state.showModal}
                        onRequestClose={() => this.toggleModal()} 
                    >
                            <ScrollView>
                                <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Foods</Text>
                                <RenderFood 
                                    foods={this.state.foods} 
                                    onShowModal={() => this.toggleModal()}
                                    onAddButton={food => this.addToOrder(food)}
                                />
                                <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Drinks</Text>
                                <RenderDrinks 
                                    drinks={this.state.drinks} 
                                    onShowModal={() => this.toggleModal()}
                                    onAddButton={drink => this.addToOrder(drink)}
                                />
                            </ScrollView>
                    </Modal>
                </View>
                {/* <RenderTotalOrder 
                    foods={this.state.foods}
                    drinks={this.state.drinks}
                    onShowModal={() => this.toggleModal()}
                    orderArray={this.state.orderArray}
                    onAddButton={item => this.addToOrder(item)}
                /> */}
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
