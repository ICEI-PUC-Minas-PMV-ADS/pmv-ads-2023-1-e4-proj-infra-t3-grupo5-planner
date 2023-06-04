import { Image, StyleSheet, View } from 'react-native';
import Button from '../components/Buttons';
import AppText from '../components/AppText';
import ImgEmail from '../assets/email.png';
import InputLabel from '../components/Inputs';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';

const ResetPassword = () => (
    <ScreenWrapper style={style.container}>
        <Image source={ImgEmail} style={style.ImgSize} />
        <ItemSeparator size="l" />
        <InputLabel placeholder="Digite seu e-mail" labelText="E-mail" errorMessage="Digite um e-mail válido" />
        <ItemSeparator size="s" />
        <InputLabel placeholder="Digite a nova senha" labelText="Nova Senha" errorMessage="Digite uma senha válida" />
        <ItemSeparator size="s" />
        <InputLabel placeholder="Repita a nova senha" labelText="Confirmar Senha" errorMessage="As senhas não são iguais" />
        <ItemSeparator size="l" />
        <Button title="Recuperar Senha" />
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

export default ResetPassword;