import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import OnboardScreen from './screens/onboard/onboard.screen';
import SaleScreen from './screens/sale/sale.screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AuthNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="welcome"
                    options={{ headerShown: false }}
                    component={OnboardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export function AppNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Sale">
                <Tab.Screen
                    name="Sale"
                    options={{ headerShown: false }}
                    component={SaleScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}