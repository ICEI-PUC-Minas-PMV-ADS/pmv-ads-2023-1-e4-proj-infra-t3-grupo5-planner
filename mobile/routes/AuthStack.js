import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Help from '../screens/Help';
import Profile from '../screens/Profile';
import Widgets from '../screens/Widgets';
import Checklist from '../screens/Checklist';
import Expenses from '../screens/Expenses';
import Goals from '../screens/Goals';
import Habits from '../screens/Habits';
import Notes from '../screens/Notes';
import Reminder from '../screens/Reminder';
import Error from '../screens/Error';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{header: () => <Header/>}} />
        <Stack.Screen name='Help' component={Help} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Widgets' component={Widgets} />
        <Stack.Screen name='Checklist' component={Checklist} />
        <Stack.Screen name='Expenses' component={Expenses} />
        <Stack.Screen name='Goals' component={Goals} />
        <Stack.Screen name='Habits' component={Habits} />
        <Stack.Screen name='Notes' component={Notes} />
        <Stack.Screen name='Reminder' component={Reminder} />
        <Stack.Screen name='Error' component={Error} />
    </Stack.Navigator>
);

export default AuthStack;