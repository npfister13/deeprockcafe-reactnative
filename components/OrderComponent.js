import React, { Component } from 'react';
import { View, Text, Image, Animated, ScrollView, StyleSheet, Button, TextInput, Alert, TouchableOpacity, Modal  } from 'react-native';
import { Card, Input, Icon } from 'react-native-elements';
import RenderHeader from './HeaderComponent';
import { DRINKS } from '../shared/drinks';
import { FOODS } from '../shared/foods';
import cloneDeep from 'lodash/cloneDeep';

function RenderFood(food) {

    const {foods} = food;

    const foodList = foods.map((foodItem, i) => {
        return (
            <View key={i} style={{flexDirection: 'row', padding: 10}}>
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
                        food.onShowOrderModal() 
                        food.onAddButton(foodItem)
                    }}  
                    style={{width: 60, height: 40, backgroundColor: 'white', alignSelf: 'center'}}
                >
                    <Text 
                        style={styles.addText}
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

    const drinkList = drinks.map((drinkItem, i) => {
        return (
            <View key={i} style={{flexDirection: 'row', padding: 10}}>
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
                        drink.onShowOrderModal() 
                        drink.onAddButton(drinkItem)
                    }}  
                    style={{width: 60, height: 40, backgroundColor: 'white', alignSelf: 'center'}}
                >
                    <Text 
                        style={styles.addText}
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

    const orderList = orderArray.map((orderItem, i) => {
        return (
            <View key={i} style={{flexDirection: 'row', padding: 10}}>
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
                <View>
                    <View
                        style={{width: 30, height: 35, backgroundColor: 'lightgrey', borderRadius: 5, borderColor: 'white', alignSelf: 'center', justifyContent: 'center', margin: 2}}
                    >
                        <Icon
                           name='pencil'
                           type="font-awesome"
                           size={26}
                           color={'gray'}
                           onPress={() => {
                                // const item = orderItem;
                                order.onShowCustomizeModal()
                            }}
                        />
                    </View>
                    <View
                        style={{width: 30, height: 35, backgroundColor: '#de4747', borderRadius: 5, alignSelf: 'center', justifyContent: 'center', margin: 2 }}
                    >
                        <Icon
                           name='trash-o'
                           type="font-awesome"
                           color='white'
                           size={26}
                           onPress={() => {
                                order.onRemoveItem(orderItem)
                            }}
                        />
                    </View>
                    
                </View>
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

function RenderItem(item) {
    
    console.log(item)

    return(
        <Card style={styles.orderCard}>
            {/* {the} */}
        </Card>
    )
}

class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
            // scaleValue: new Animated.Value(0),
            showOrderModal: false,
            showCustomizeModal: false,
            drinks: DRINKS,
            foods: FOODS,
            drinkList: [],
            foodList: [],
            orderArray: [],
            
        };   
    }

    removeFromOrder(item){
        this.setState({orderArray: this.state.orderArray.filter((orderArray) => {
            return orderArray !== item
        })});
    }
    
    addToOrder(item){
        const oldItem = cloneDeep(item)
        const index = this.state.orderArray.findIndex((findItem) => findItem.id === oldItem.id)
        
        
        this.setState({orderArray: [...this.state.orderArray, oldItem]});

    };

    toggleOrderModal() {
        this.setState({showOrderModal: !this.state.showOrderModal})
    }

    toggleCustomizeModal() {
        this.setState({showCustomizeModal: !this.state.showCustomizeModal})
    }

    static navigationOptions = {
        title: 'Order'
    }
    
    render() {
        if (this.state.orderArray.length > 0) {
            return (
                <ScrollView style={{backgroundColor: '#ececec'}}>
                    <RenderHeader title={"Order"} />
                    <RenderOrderArray
                        orderArray={this.state.orderArray}
                        onRemoveItem={(item) => this.removeFromOrder(item)}
                        onShowCustomizeModal={() => this.toggleCustomizeModal()}
                    />
                    <Card style={styles.orderCard}>
                        <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.toggleOrderModal()
                                }}
                            >
                            <Text>Order more</Text>
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
                        visible={this.state.showOrderModal}
                        onRequestClose={() => this.toggleOrderModal()} 
                    >
                        <ScrollView>
                            <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Foods</Text>
                            <RenderFood 
                                foods={this.state.foods} 
                                onShowOrderModal={() => this.toggleOrderModal()}
                                onAddButton={food => this.addToOrder(food)}
                            />
                            <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Drinks</Text>
                            <RenderDrinks 
                                drinks={this.state.drinks} 
                                onShowOrderModal={() => this.toggleOrderModal()}
                                onAddButton={drink => this.addToOrder(drink)}
                            />
                        </ScrollView>
                    </Modal>
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={this.state.showCustomizeModal}
                        onRequestClose={() => this.toggleCustomizeModal()} 
                    >
                        <View>
                            {/* <RenderItem 
                                // item={(item)}
                                onShowCustomizeModal={() => this.toggleCustomizeModal()}
                            /> */}
                        </View>
                    </Modal>
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
                            onPress={() => this.toggleOrderModal()}
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
                        visible={this.state.showOrderModal}
                        onRequestClose={() => this.toggleOrderModal()} 
                    >
                            <ScrollView>
                                <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Foods</Text>
                                <RenderFood 
                                    foods={this.state.foods} 
                                    onShowOrderModal={() => this.toggleOrderModal()}
                                    onAddButton={food => this.addToOrder(food)}
                                />
                                <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Drinks</Text>
                                <RenderDrinks 
                                    drinks={this.state.drinks} 
                                    onShowOrderModal={() => this.toggleOrderModal()}
                                    onAddButton={drink => this.addToOrder(drink)}
                                />
                            </ScrollView>
                    </Modal>
                </View>
                {/* <RenderTotalOrder 
                    foods={this.state.foods}
                    drinks={this.state.drinks}
                    onShowOrderModal={() => this.toggleOrderModal()}
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
        flexWrap: 'wrap',
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
    addText: {
        alignSelf: 'center',
        alignItems: 'center', 
        padding: 10, 
        fontSize: 16
    },
    removeText: {
        alignSelf: 'center',
        alignItems: 'center', 
        padding: 10, 
        fontSize: 16
    }
    
})

export default Order;
