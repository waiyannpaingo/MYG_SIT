//import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Button, Text, View, StyleSheet, ActivityIndicator } from 'react-native';

const AuthLoadingScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size = "large"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    }
});

export default AuthLoadingScreen;