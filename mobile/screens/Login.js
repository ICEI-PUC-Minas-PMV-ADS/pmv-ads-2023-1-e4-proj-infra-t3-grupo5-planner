import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

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
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (values) => {
        if (!values.email) {
            setErrorMessage('Por favor, preencha o campo de email');
            return;
        }
        if (!values.password) {
            setErrorMessage('Por favor, preencha o campo de senha');
            return;
        }
        
        // Lógica de login
        
    };
    
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
        >
            {({ handleSubmit, values, handleChange }) => (
                <ScreenWrapper style={styles.loginContainer}>
                    <Logo blackLogo size='m' />
                    <ItemSeparator size={24} />
                    <InputLabel labelText="Email" labelStyle="standard" errorMessage={errorMessage}/>
                    <ItemSeparator size={8} />
                    <InputLabel labelText="Senha" labelStyle="standard" MaskedInput="password" errorMessage={errorMessage}/>
                    <ItemSeparator size={48} />
                    <Button title="Entrar" fontColor='white' onPress={() => handleSubmit()} />
                    <Button title="Esqueci a senha" buttonType="transparentStandard" fontColor={"black"} />
                    <ItemSeparator size={24} />
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