import {StyleSheet,SafeAreaView} from 'react-native';
import Button from '../components/Buttons'
import InputLabel from '../components/Inputs';
import ContainerBox from '../components/ContainerBox';
import Header from '../components/Header';

const Login = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <Header />
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