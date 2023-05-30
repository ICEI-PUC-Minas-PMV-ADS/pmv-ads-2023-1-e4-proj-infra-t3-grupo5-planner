import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './providers/auth';
import Router from './routes/Router';

const App = () => (
    <AuthProvider>
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    </AuthProvider>
);

export default App;