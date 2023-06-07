import { Image, StyleSheet, Alert } from 'react-native';
import Button from '../components/Buttons';
import ImgEmail from '../assets/email.png';
import InputLabel from '../components/Inputs';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {

    const { register, setValue, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => Alert.alert(`Senha alterada com sucesso!`);

    const validateEmail = (value) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(value)) {
            return "Digite um e-mail válido";
        }
        return true;
    };

    const passwordValue = watch("newPassword");
    const validateConfirmPassword = (value) => {
      return value === passwordValue || "A senha digitada é diferente da senha fornecida";
    }

    return (
        <ScreenWrapper style={style.container}>
            <Image source={ImgEmail} style={style.ImgSize} />
            <ItemSeparator size="l" />
            <InputLabel
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
            <ItemSeparator size="s" />
            <InputLabel
                placeholder="Digite a nova senha"
                labelText="Nova Senha"
                errorMessage={errors?.newPassword && "Digite uma senha válida"}
                onChangeText={text => setValue("newPassword", text)}
                MaskedInput="password"
                {...{
                    register: register("newPassword", {
                        required: true,
                    })
                }}
            />
            <ItemSeparator size="s" />
            <InputLabel
                placeholder="Repita a nova senha"
                labelText="Confirmar Senha"
                errorMessage={errors?.confirmPassword && "As senhas não são iguais"}
                onChangeText={text => setValue("confirmPassword", text)}
                MaskedInput="password"
                {...{
                    register: register("confirmPassword", {
                        required: true,
                        validate: validateConfirmPassword
                    })
                }}
            />
            <ItemSeparator size="l" />
            <Button title="Recuperar Senha" fontColor='white' onPress={handleSubmit(onSubmit)} />
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
    }
})

export default ResetPassword;
