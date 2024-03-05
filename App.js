/*npx expo start --tunnel*/

import * as React from 'react';
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import Favoris from "./src/components/Favoris";
import Home from "./src/components/Home";
import Details from "./src/components/Details";
import Profil from "./src/components/Profil";

export default function App() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    function HomeStack(){
        return(
            <Stack.Navigator initialRouteName={'Home'}
                             screenOptions={{
                                 headerShown: false
                             }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Details} />
            </Stack.Navigator>
        )
    }

    function FavoriteStack(){
        return(
            <Stack.Navigator initialRouteName={'Favoris'}
                             screenOptions={{
                                 headerShown: false
                             }}>
                <Stack.Screen name="Favoris" component={Favoris} />
                <Stack.Screen name="Detail" component={Details} />
            </Stack.Navigator>
        )
    }
    function MyTabs() {
        return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tab.Screen name="Home" component={HomeStack} options={{
                    tabBarIcon:({color, size}) => {
                        return <Icon name={'home'} size={size} color={color} />
                    },
                    tabBarActiveTintColor: '#6390F0'
                }} />


                <Tab.Screen name="Favoris" component={FavoriteStack} options={
                    {
                        tabBarIcon:({color, size}) => {
                            return <Icon name={'heart'} size={size} color={color} />
                        },
                        tabBarActiveTintColor: '#EE8130'
                    }
                } />
                <Tab.Screen name="Profil" component={Profil} options={
                    {
                        tabBarIcon:({color, size}) => {
                            return <Icon name={'account'} size={size} color={color} />
                        },
                        tabBarActiveTintColor: '#7AC74C'
                    }
                } />
            </Tab.Navigator>
        );
    }

    return (
        <View style={styles.container}>
            <NavigationContainer >
            <MyTabs  />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
    },
});