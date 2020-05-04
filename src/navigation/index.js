
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {UserContext} from '../context/user';
import SignIn from '../pages/signin';
import Home from '../pages/home';
import Scheduler from '../pages/scheduler';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const LoginStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

const MainNavigation = () => {
    return (
        <BottomTab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#11B22B',
          }}>
        
            <BottomTab.Screen 
              name="Home" 
              component={Home}
              options={{
                  tabBarLabel: 'Principal',
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                  ),
              }}
            />
            
            <BottomTab.Screen 
              name="Scheduler" 
              component={Scheduler}
              options={{
                  tabBarLabel: 'Calendário',
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="calendar" color={color} size={size} />
                  ),
              }}
            />

            <BottomTab.Screen 
              name="Perfil" 
              component={Scheduler}
              options={{
                  tabBarLabel: 'Perfil',
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="user" color={color} size={size} />
                  ),
              }}
            />
        </BottomTab.Navigator>
    )
}

export default () => {
    const { userInfo } = useContext(UserContext);

    return (
        <NavigationContainer>
            {userInfo ? <MainNavigation /> : <MainNavigation />}
        </NavigationContainer>
    )
}