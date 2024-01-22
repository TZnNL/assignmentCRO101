import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Cart from "./cart";
import Person from "./person";
import Home from "./home";

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="home">
                <Tab.Screen name="home" component={Home}/>
                <Tab.Screen name="cart" component={Cart}/>
                <Tab.Screen name="person" component={Person}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
