import React, { Component } from 'react';
import { View, Text, Animated, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { DRINKS } from '../shared/drinks';

function RenderDrinkMenu(drinks) {
    return(
        <View>
            
        </View>
    )
}

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            // scaleValue: new Animated.Value(0)
            drinks: DRINKS
        };   
    }
    static navigationOptions = {
        title: 'Menu'
    }

    render() {
        return (
            
            <ScrollView>
                <View style={{backgroundColor: '#461f1f', height: 80, alignContent: 'center', alignItems: 'center', padding: 20}}>
                    <Text style={styles.cafe}>Menu</Text>
                </View>
                <View style={styles.container}>
                    <Card   
                        title={'Drinks'}
                        style={{marginBottom: 0}}
                    >
                    <Divider style={{padding: 0, backgroundColor: 'grey'}}/>
                        {
                            this.state.drinks.map((u, i) => {
                                return(
                                    <View key={i} style={styles.user}>
                                        <Image 
                                            style={styles.image}
                                            resizeMode="cover"
                                            source={u.image}
                                        />
                                        <Text style={styles.name}>{u.name}</Text>
                                    </View>
                                );
                            })
                        }
                        
                        
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cafe: {
        fontSize: 36,
        color: 'white'
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
})

export default Menu;
