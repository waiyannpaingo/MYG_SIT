import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './auth/onBoard/welcome.screen';
import LoginScreen from './auth/login/login.screen';
import RegisterScreen from './auth/register/register.screen';

import SaleScreen from './screens/sale/sale.screen';

import InventoryScreen from './screens/inventory/inventory.screen';
import AddProductScreen from './screens/inventory/add.product.screen';
import AddCategoryScreen from './screens/inventory/add.category.screen';

import ManageScreen from './screens/manage/manage.screen';
import NotificationScreen from './screens/notification/notification.screen';

import ProfileScreen from './screens/profile/profile.screen';
import SettingScreen from './screens/profile/settings.screen';
import AccountSettingScreen from './screens/profile/accountsetting.screen';
import PrintersScreen from './screens/profile/printers.screen';
import AddPrintersScreen from './screens/profile/add.printer.screen';
import LanguageScreen from './screens/profile/language.screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AuthNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function AppNav() {
  return (

      <Tab.Navigator headerMode="none" initialRouteName="Manage">
        <Tab.Screen name="Sale" component={SaleScreen} />
        <Tab.Screen name="Inventory" component={InventoryScreen} />
        <Tab.Screen name="Manage" component={ManageScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

  );
}

export function RootNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="App">

        <Stack.Screen name="App" component={AppNav} />
        <Stack.Screen name="Settings" component={SettingNav} />
        <Stack.Screen name="Product" component={ProductNav} />
        <Stack.Screen name="Category" component={CategoryNav} />

  </Stack.Navigator>
    </NavigationContainer>
  );
}

function ProductNav() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
    </Stack.Navigator>
  );
}
function CategoryNav() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AddCategory" component={AddCategoryScreen} />
    </Stack.Navigator>
  );
}

function SettingNav() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="AccountSettings" component={AccountSettingScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Printers" component={PrintersScreen} />
      <Stack.Screen name="AddPrinters" component={AddPrintersScreen} />
  </Stack.Navigator>
  );
}