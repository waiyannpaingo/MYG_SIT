/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { useEffect } from 'react';
import { AppNav, AuthNav } from './app/app.navigator'
import { isLoggedIn, onLogout } from './app/auth/auth.service'
import { AuthContext } from './app/auth/auth.service';

import AuthLoadingScreen from './app/auth/auth.loading.screen'
import { GestureHandlerRootView } from 'react-native-gesture-handler';




const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    login: () => {
      setUserToken('demo_token');
      setIsLoading(false);
    },
    logout: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    register: () => {
      setUserToken('demo_token');
      setIsLoading(false);
    }
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <AuthLoadingScreen />
    )
  }

  return (
    <GestureHandlerRootView>
      <AuthContext.Provider value={authContext}>
        {userToken !== null ? (
          <AppNav />
        )
          :
          <AuthNav />
        }
      </AuthContext.Provider>
    </GestureHandlerRootView>

  )
}

export default App

