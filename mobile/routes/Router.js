import * as React from 'react';


import { useAuth } from '../providers/auth';

import AuthStack from './AuthStack';
import GuestStack from './GuestStack';

const Router = () => {
    const auth = useAuth();
    const {userToken} = auth.state;

    return userToken !== null ? <AuthStack /> : <GuestStack />;
}

export default Router;