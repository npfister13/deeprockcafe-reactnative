import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createReactContainer } from 'react-navigation'; 
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Order from './OrderComponent';
import Contact from './ContactComponent';

const MainNavigator = createBottomTabNavigator(
    {
        Home: { 
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        //tintColor has grey for inactive and blue for active by default. it can be changed - check documentation
                        color={tintColor}
                    />
                ) ,
                
            }
        },
        Menu: { 
            screen: Menu,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='coffee'
                        type='font-awesome'
                        size={24}
                        //tintColor has grey for inactive and blue for active by default. it can be changed - check documentation
                        color={tintColor}
                    />
                ) 
            }
        },
        About: { 
            screen: About,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='info'
                        type='font-awesome'
                        size={24}
                        //tintColor has grey for inactive and blue for active by default. it can be changed - check documentation
                        color={tintColor}
                    />
                ) 
            }
        },
        Contact: { 
            screen: Contact,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='envelope'
                        type='font-awesome'
                        size={24}
                        //tintColor has grey for inactive and blue for active by default. it can be changed - check documentation
                        color={tintColor}
                    />
                ) 
            }
        },
        
        Order: { 
            screen: Order,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='cutlery'
                        type='font-awesome'
                        size={24}
                        //tintColor has grey for inactive and blue for active by default. it can be changed - check documentation
                        color={tintColor}
                    />
                ) 
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#461f1f',
            labelStyle: {
              fontSize: 12,
            },
            style: {
            //   backgroundColor: '#461f1f',
            },
        }
    }
)

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    

    render() {
        
        return (
            <View 
                style={{
                    flex: 1,
                    // you can specify values between OS in case theres are compatability or rendering differences
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}>
                <AppNavigator />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24

    }
});

export default Main;