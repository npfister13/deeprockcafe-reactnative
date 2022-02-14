import React, { Component, useState } from 'react';
import { View, Text, Image, Animated, ScrollView, StyleSheet, Alert, TouchableOpacity, Modal  } from 'react-native';
import { Card, Input, Icon, CheckBox } from 'react-native-elements';
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
                        {'\n$' + foodItem.price.toFixed(2)}
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
                        {'\n$' + drinkItem.price.toFixed(2)}
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
                        {'\n$' + orderItem.price.toFixed(2)}
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
                                order.onShowCustomizeModal(orderItem)
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
    
    const {customizeItem} = item;
    const renderedItem = customizeItem[0]
    
    // if (renderedItem.bagelType) {
    //     const bagelTypeList = renderedItem.bagelType.map((bagel, i) => {
    //         const [checked, toggleChecked] = useState(bagel.checked);
    //         return (
    //             <View key={i}>
    //                 <CheckBox
    //                     key={Math.random()}
    //                     title={bagel.name}
    //                     checked={checked}
    //                     onPress={() => {
    //                         toggleChecked(!checked)
    //                         bagel.checked = !checked;
    //                     }}
    //                     containerStyle={styles.formCheckbox}
    //                 />
    //             </View>
    //         )
    //     })
    //     return(
    //         <ScrollView>
    //             <Card style={styles.orderCard}>
    //                 <Image
    //                     style={{width: 325, height: 300, alignSelf: 'center'}}
    //                     source={renderedItem.image}
    //                 />
    //                 <Text
    //                     style={{fontSize: 22, alignSelf: 'center'}}
    //                 >{renderedItem.name}</Text>
    //                 <Text>Total price: ${renderedItem.price.toFixed(2)}</Text>
    //             </Card>
    //             {bagelTypeList}
    //         </ScrollView>
    //     )
    // }

    if (renderedItem.extras) {
        const extraList = renderedItem.extras.map((extraItem, i) => {
            const [checked, toggleChecked] = useState(extraItem.checked);
            return(
                <View key={i}>
                    <CheckBox 
                        key={Math.random()}
                        title={extraItem.name}
                        checked={checked}
                        onPress={() => {
                            toggleChecked(!checked)
                            extraItem.checked = !checked;
                            if (extraItem.checked === true) {
                                item.onAdjustPrice(renderedItem.price * -1)
                                renderedItem.price += extraItem.price
                                item.onAdjustPrice(renderedItem.price)
                            } else {
                                item.onAdjustPrice(renderedItem.price * -1)
                                renderedItem.price -= extraItem.price
                                item.onAdjustPrice(renderedItem.price)
                            }
                        }}
                        containerStyle={styles.formCheckbox}
                    />
                </View>
            )
        })
        
        return(
            <ScrollView>
                <Card style={styles.orderCard}>
                    <Image
                        style={{width: 325, height: 300, alignSelf: 'center'}}
                        source={renderedItem.image}
                    />
                    <Text
                        style={{fontSize: 22, alignSelf: 'center'}}
                    >{renderedItem.name}</Text>
                    <Text>Price: ${renderedItem.price.toFixed(2)}</Text>
                </Card>
                {extraList}
            </ScrollView>
        )
    } else {
        return (
            <ScrollView>
                <Card style={styles.orderCard}>
                    <Image
                        style={{width: 325, height: 300, alignSelf: 'center'}}
                        source={renderedItem.image}
                    />
                    <Text
                        style={{fontSize: 22, alignSelf: 'center'}}
                    >
                        {renderedItem.name}
                    </Text>
                    <Text>Total price: ${renderedItem.price.toFixed(2)}</Text>
                </Card>
            </ScrollView>
        )
    }
}

function RadioButton(props) {
    return (
        <View style={[{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }, props.style]}>
          {
            props.selected ?
              <View style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#000',
              }}/>
              : null
          }
        </View>
    );
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
            customizeItem: [],
            totalPrice: 0,
        };   
    }

    removeFromOrder(item){
        this.setState({orderArray: this.state.orderArray.filter((orderArray) => {
            return orderArray !== item
        })});
        this.setState({totalPrice: this.state.totalPrice -= item.price})
    }
    
    addToOrder(item){
        const oldItem = cloneDeep(item)   
        this.setState({orderArray: [...this.state.orderArray, oldItem]});
        this.setState({totalPrice: this.state.totalPrice += oldItem.price})
    };

    toggleOrderModal() {
        this.setState({showOrderModal: !this.state.showOrderModal})
    }

    toggleCustomizeModal(item) {
        // console.log(JSON.stringify(item))
        this.setState({showCustomizeModal: !this.state.showCustomizeModal})
        this.setState({customizeItem: [...this.state.customizeItem, item]})
    }

    adjustPrice(item) {
        this.setState({totalPrice: this.state.totalPrice += item})
    }

    resetOrder(){
        this.setState({
            totalPrice: 0,
            orderArray: [],
            customizeItem: [],
        })
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
                        onShowCustomizeModal={(order) => this.toggleCustomizeModal(order)}
                    />
                    <Card style={styles.orderCard}>
                        <Text>Total price: ${this.state.totalPrice.toFixed(2)}</Text>
                    </Card>
                    <Card style={styles.orderCard}>
                        <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.toggleOrderModal()
                                }}
                            >
                            <Text>Order more</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            style={styles.button}
                            onPress={() => console.log(this.state.orderArray)}
                        >
                            <Text>Console.log</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                Alert.alert(
                                    'Your order has been placed!',
                                    `You total is $${this.state.totalPrice.toFixed(2)} at time of checkout`,
                                    [
                                        {
                                            text: 'OK',
                                        }
                                    ]
                                )
                                this.resetOrder();
                            }}
                        >
                            <Text>Check out</Text>
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
                        onRequestClose={() => {
                            this.toggleCustomizeModal()
                            this.setState({customizeItem: this.state.customizeItem.filter((customizeItem) => {
                                return customizeItem !== this.state.customizeItem[0]
                            })});
                        }} 
                    >
                        <View>
                            <RenderItem 
                                onAdjustPrice={(item) => this.adjustPrice(item)}
                                customizeItem={this.state.customizeItem}
                                onShowCustomizeModal={(order) => this.toggleCustomizeModal(order)}
                            />
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
                        {/* <TouchableOpacity
                            style={styles.button}
                            onPress={() => console.log(this.state.orderArray)}
                        >
                            <Text>Console.log</Text>
                        </TouchableOpacity> */}
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
    },
    formCheckbox: {
        margin: 8,
        backgroundColor: null
    },
    
})

export default Order;
