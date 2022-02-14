import React, { Component } from 'react';
import { View, Text, Animated, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { DRINKS } from '../shared/drinks';
import { FOODS } from '../shared/foods';
import RenderHeader from './HeaderComponent';

function FavoriteItem(props) {

    const {item} = props;

    if (item.favorite) {
        return (
            // <Text>Staff Favorite!</Text>
            <View>
                <Text style={styles.favorite}>
                    
                    <Icon
                        name="star"
                        type="font-awesome"
                        color="gold"
                        size={16}
                    />
                    Staff favorite! {'\t'}
                </Text>
            </View>
        )
    }
    return <Text />
}

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            // scaleValue: new Animated.Value(0)
            drinks: DRINKS,
            foods: FOODS
        };   
    }
    static navigationOptions = {
        title: 'Menu'
    }

    render() {
        return (
            
            <ScrollView>
                <RenderHeader title={"Menu"} />
                <View style={styles.container}>
                    <Card   
                        title={'Drinks'}
                    >
                        <ScrollView>
                            {
                                this.state.drinks.map((u, i) => {
                                    return(
                                        <View key={i} style={styles.menuItem}>
                                            <Image
                                                style={styles.itemImage}
                                                resizeMode="cover"
                                                source={u.image}
                                            />
                                            <Text style={styles.name}>
                                                {u.name}
                                                <Text style={styles.description}>
                                                    {'\n' + u.description}
                                                </Text>
                                                <Text style={{textAlign: 'right'}}>
                                                    <FavoriteItem item={u}/>
                                                </Text>
                                            </Text>
                                        </View>
                                    );
                                })
                            }
                        </ScrollView>
                    </Card>
                    <Card   
                        title={'Foods'}
                    >
                        <ScrollView>
                            {
                                this.state.foods.map((u, i) => {
                                    return(
                                        <View key={i} style={styles.menuItem}>
                                            <Image
                                                style={styles.itemImage}
                                                resizeMode="cover"
                                                source={u.image}
                                            />
                                            <Text style={styles.name}>
                                                {u.name}
                                                <Text style={styles.description}>
                                                    {'\n' + u.description}
                                                </Text>
                                                <Text style={{textAlign: 'right'}}>
                                                    <FavoriteItem item={u}/>
                                                </Text>
                                            </Text>
                                        </View>
                                    );
                                })
                            }
                        </ScrollView>
                        
                    </Card>
                    <Card 
                        title={'Extras'}
                    >

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
    description: {
        fontSize: 14,
    },
    favorite: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'right'
    }

})

export default Menu;
