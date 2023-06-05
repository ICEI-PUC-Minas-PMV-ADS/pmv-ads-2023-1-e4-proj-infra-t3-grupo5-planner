import { Image, StyleSheet, View } from 'react-native';
import Button from '../components/Buttons';
import AppText from '../components/AppText';
import ImgEmail from '../assets/email.png';
import InputLabel from '../components/Inputs';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';

const ForgotPassword = () => (
    <ScreenWrapper style={style.container}>
        <Image source={ImgEmail} style={style.ImgSize} />
        <AppText type="Subtitle">Insira o endereço de e-mail associado à sua conta MyPlan para enviarmos um link de redefinição</AppText>
        <ItemSeparator size="l" />
        <InputLabel placeholder="Digite seu e-mail" labelText="E-mail" errorMessage="Digite um e-mail válido" />
        <ItemSeparator size="l" />
        <Button title="Enviar e-mail" />
    </ScreenWrapper>
);

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ImgSize: {
        width: 204,
        height: 206,
    }
})

export default ForgotPassword;