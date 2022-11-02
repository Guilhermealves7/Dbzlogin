import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {} from 'react';
import Welcome from '../pages/welcome';
import Login from '../pages/login';

const Stack= createNativeStackNavigator();

export default  function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{headerShown: false}}
            
            
            />
            <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown: false}}
            
            />

        </Stack.Navigator>
    )
}
