import React, {useMemo, useReducer, useContext, useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';

import reducer, {initialState} from '../reducers/auth';

const AuthContext = React.createContext();

const AuthProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState || {});
    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;
            try {
                userToken = await SecureStore.getItemAsync('userToken');
                await handleSignIn(userToken);
            } catch (e) {
                dispatch({type: 'SIGN_OUT'});
            }
        };
        bootstrapAsync();
    }, []);
    const handleSignIn = async token => {
        try {
            await SecureStore.setItemAsync('userToken', token);
            dispatch({type: 'SIGN_IN', token});
        } catch (e) {
            return handleSignOut();
        }
    };
    const handleSignOut = async () => {
        try {
            await SecureStore.deleteItemAsync('userToken');
            dispatch({type: 'SIGN_OUT'});
        } catch (e) {
            dispatch({type: 'SIGN_OUT'});
        }
    };
    const value = useMemo(() => {
        return {
            state,
            handleSignIn,
            handleSignOut,
        };
    }, [state]);
    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);
export {AuthContext, useAuth};
export default AuthProvider;