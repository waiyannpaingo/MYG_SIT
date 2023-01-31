import React from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../app/auth/auth.service';

import {AppNav, AuthNav} from './app.navigator'

const AppRoot = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ userToken, setUserToken ] = React.useState(null);
  
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
  
    /*if(isLoading){
      return(
        <AuthLoadingScreen/>
      )
    }*/
  
    return (
      <AuthContext.Provider value={authContext}>
        { userToken !== null ? (
          <AppNav/>
        )
      :
        <AuthNav/>
      }
      </AuthContext.Provider>
    )
  }
  
  export default AppRoot