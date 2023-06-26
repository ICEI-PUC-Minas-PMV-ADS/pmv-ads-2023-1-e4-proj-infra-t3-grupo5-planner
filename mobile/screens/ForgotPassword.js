import { Image, StyleSheet, Alert } from 'react-native';
import Button from '../components/Buttons';
import AppText from '../components/AppText';
import ImgEmail from '../assets/email.png';
import InputLabel from '../components/Inputs';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => Alert.alert(`E-mail enviado com sucesso!`);

    const validateEmail = (value) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(value)) {
            return "Digite um e-mail válido";
        }
        return true;
    };

    return (
        <ScreenWrapper style={style.container}>
            <Image source={ImgEmail} style={style.ImgSize} />
            <AppText textAlign={style.Text} type="Subtitle">Insira o endereço de e-mail associado à sua conta MyPlan para enviarmos um link de redefinição</AppText>
            <ItemSeparator size="l" />
            <InputLabel
                id="email"
                placeholder="Digite seu e-mail"
                labelText="E-mail"
                errorMessage={errors?.email && "Digite um e-mail válido"}
                onChangeText={text => setValue("email", text)}
                {...{
                    register: register("email", {
                        required: true,
                        validate: validateEmail
                    })
                }}
            />
            <ItemSeparator size="l" />
            <Button title="Enviar" fontColor='white' onPress={handleSubmit(onSubmit)} />
        </ScreenWrapper>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ImgSize: {
        width: 204,
        height: 206,
    },

    Text: {
        textAlign: 'center'
    }
})

export default ForgotPassword;
