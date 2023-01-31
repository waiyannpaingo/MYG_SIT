import React from 'react';

export const AuthContext = React.createContext();
/*
import AsyncStorage from '@react-native-async-storage/async-storage';
export const USER_KEY = "userToken"

export const onLogin = () => AsyncStorage.setItem(USER_KEY, "true");

export const onLogout = () => AsyncStorage.removeItem(USER_KEY);

export const isLoggedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
        .then(res => {
            if(res !== null){
                resolve(true);
            }else{
                resolve(false);
            }
        })
        .catch(err => reject(err));
    });
};*/
