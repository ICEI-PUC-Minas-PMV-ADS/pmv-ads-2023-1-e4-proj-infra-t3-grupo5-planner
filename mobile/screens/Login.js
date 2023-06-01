import {StyleSheet,SafeAreaView} from 'react-native';
import Button from '../components/Buttons'
import InputLabel from '../components/Inputs';
import ContainerBox from '../components/ContainerBox';

const Login = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        {/*
            <Text>Login</Text>
            <InputLabel labelText="Email" labelStyle="standard" />
            <InputLabel labelText="Senha" labelStyle="standard" MaskedInput="password"/>
            <Button title="Entrar" />
            <Button title="Registrar" buttonType="transparentStandard" fontColor={"black"} onPress={() => navigation.navigate('Register')}/>
        */}
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container:{
        padding:150,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Login;