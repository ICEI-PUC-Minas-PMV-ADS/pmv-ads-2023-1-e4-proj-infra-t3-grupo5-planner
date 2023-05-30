import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import Error from '../screens/Error';

const Stack = createNativeStackNavigator();

const GuestStack = () => (
    <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} />
            <Stack.Screen name='Error' component={Error} />
        </Stack.Group>
    </Stack.Navigator>
);

export default GuestStack;