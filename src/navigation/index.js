
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {UserContext} from '../context/user';
import SignIn from '../pages/signin';
import Home from '../pages/home';


const Stack = createStackNavigator();


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
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}

export default () => {
    const { userInfo } = useContext(UserContext);

    return (
        <NavigationContainer>
            {userInfo ? <MainNavigation /> : <LoginStackNavigation />}
        </NavigationContainer>
    )
}