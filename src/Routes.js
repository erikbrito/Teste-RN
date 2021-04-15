import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from './Components/Splashscreen/Splash';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

const Tab = createBottomTabNavigator();

const Routes = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);

  return (
    <NavigationContainer>
      {
        load ? (
          <Splash />
        ) : (
        <Tab.Navigator
          tabBarOptions={{
          activeTintColor: '#4175c5',
          labelStyle: {
            fontSize: 25,
            padding: 5,
          },
        }}
        >
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
        )
      }
    </NavigationContainer>
  );
};

export default Routes;