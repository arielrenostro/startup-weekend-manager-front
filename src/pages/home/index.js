import React from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();


const EventNotStarted = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Event not started yet :(</Text>
        </View>
    )
}

const Home = () => {
    return (
        <Stack.Navigator>      
            <Stack.Screen
                name="EventNotStarted"
                component={EventNotStarted}
                options={{
                    headerTitle: 'O evento ainda não começou :(',
                    headerStyle: {
                        backgroundColor: '#11B22B',
                      },
                      headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    )
}

export default Home;