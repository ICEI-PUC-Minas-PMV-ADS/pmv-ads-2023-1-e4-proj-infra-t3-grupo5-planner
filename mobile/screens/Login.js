import {Button, SafeAreaView, Text} from 'react-native';

const Login = ({ navigation }) => (
    <SafeAreaView>
        <Text>Login</Text>
        <Button title='Registro' onPress={() => navigation.navigate('Register')} />
    </SafeAreaView>
);

export default Login;