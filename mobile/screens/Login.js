import {StyleSheet} from 'react-native';
import Button from '../components/Buttons'
import InputLabel from '../components/Inputs';
import ItemSeparator from '../components/ItemSeparator';
import ScreenWrapper from '../components/ScreenWrapper';
import Logo from '../components/Logo';
import AppText from '../components/AppText';


const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Endereço de e-mail inválido.')
      .required('Preencha este campo.'),
    password: Yup.string().required('Preencha este campo.'),
});

const Login = ({ navigation }) => (

    <ScreenWrapper style={styles.loginContainer}>
    
        <Logo blackLogo size='m'/>
        <ItemSeparator size={24}/>
        <InputLabel labelText="Email" labelStyle="standard" />
        <ItemSeparator size={8}/>
        <InputLabel labelText="Senha" labelStyle="standard" MaskedInput="password"/>
        <ItemSeparator size={64}/>
        <Button title="Entrar" fontColor='white'/>
        <ItemSeparator size={24}/>
        <AppText type='MediumTextBold'> Não tem registro? </AppText>
        <Button title="Registrar" buttonType="transparentStandard" fontColor={"black"} onPress={() => navigation.navigate('Register')}/>

    </ScreenWrapper>
);

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'column',
    },
});
export default Login;