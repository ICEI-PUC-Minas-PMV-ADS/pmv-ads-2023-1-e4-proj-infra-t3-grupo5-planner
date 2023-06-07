import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {useAuth} from '../providers/auth';

import Button from '../components/Buttons'
import InputLabel from '../components/Inputs';
import ItemSeparator from '../components/ItemSeparator';
import ScreenWrapper from '../components/ScreenWrapper';
import Logo from '../components/Logo';
import AppText from '../components/AppText';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
});

const Login = ({ navigation }) => {
    const {handleSignIn} = useAuth();

    const handleLogin = async () => {
        await handleSignIn('token');
    };
    
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
        >
            {({ handleSubmit, values, errors, handleChange}) => (
                <ScreenWrapper style={styles.loginContainer}>
                    <Logo blackLogo size='m' />
                    <ItemSeparator size='l' />
                    <InputLabel labelText="Email" labelStyle="standard" errorMessage={errors.email} value={values.email} onChangeText={handleChange('email')}/>
                    <ItemSeparator size='s' />
                    <InputLabel labelText="Senha" labelStyle="standard" MaskedInput="password" errorMessage={errors.password} value={values.password} onChangeText={handleChange('password')}/>
                    <ItemSeparator size='xl' />
                    <Button title="Entrar" fontColor='white' onPress={handleSubmit} style={{width:'80%'}}/>
                    <Button title="Esqueci a senha" buttonType="transparentStandard" fontColor={"black"} onPress={() => navigation.navigate('ForgotPassword')}/>
                    <ItemSeparator size='l' />
                    <AppText type='MediumTextBold'> Não tem registro? </AppText>
                    <Button title="Registrar" buttonType="transparentStandard" fontColor={"black"} onPress={() => navigation.navigate('Register')} />
                </ScreenWrapper>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
});

export default Login;
