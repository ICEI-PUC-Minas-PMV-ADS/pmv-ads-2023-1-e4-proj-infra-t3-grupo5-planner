import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import Button from "../components/Buttons";
import InputLabel from "../components/Inputs";
import ItemSeparator from "../components/ItemSeparator";
import RegisterContainerBox from "../components/RegisterContainerBox";
import ScreenWrapper from "../components/ScreenWrapper";

import * as Yup from 'yup';
import { Formik } from 'formik';

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('O campo de nome deve ser preenchido'),
    surname: Yup.string().required('O campo de sobrenome deve ser preenchido'),
    email: Yup.string().required('O campo de email deve ser preenchido')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Deve ser fornecido um email válido'),
    birthdate: Yup.date()
    .required('O campo de data de aniversário deve ser preenchido.')
    .typeError('Data de nascimento inválida.')
    ,
    password: Yup.string()
    .required('Preencha este campo.')
    .min(8, 'Sua senha deve ter pelo menos 8 caracteres.'),
    passwordConfirm: Yup.string().required('O campo deve ser preenchido').oneOf([Yup.ref('password'),null], 'Senhas não conhecidem')   
});

const Register = () => {
  return (
      
          <Formik
              initialValues={{ name: '', surname: '', email: '', birthdate: '',password: '', passwordConfirm: '',}}
              validationSchema={RegisterSchema}
              onSubmit={() => true}
          >
              {({ handleSubmit, values, errors, handleChange}) => (
                
                <ScreenWrapper style={styles.centeredContainer}>
                  <RegisterContainerBox title="Cadastro" 
                    content={
                      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10}>
                        <ItemSeparator size="s" />
                        <InputLabel
                          placeholder="Digite o seu nome"
                          labelText="Nome"
                          labelStyle="standard"
                          errorMessage={errors.name}
                          value={values.name}
                          onChangeText={handleChange('name')}
                        />          
                        <ItemSeparator size="s" />
                        <InputLabel
                          placeholder="Digite o seu sobrenome"
                          labelText="Sobrenome"
                          labelStyle="standard"
                          errorMessage={errors.surname}
                          value={values.surname}
                          onChangeText={handleChange('surname')}
                        />     
                        <ItemSeparator size="s" />
                        <InputLabel
                          placeholder="Digite o seu email"
                          labelText="Email"
                          labelStyle="standard"
                          errorMessage={errors.email}
                          value={values.email}
                          onChangeText={handleChange('email')}
                        />   
                        <ItemSeparator size="s" />
                        <InputLabel
                          placeholder="Digite a sua data de nascimento"
                          labelText="Data de nascimento"
                          labelStyle="standard"
                          MaskedInput="date"
                          errorMessage={errors.birthdate}
                          value={values.birthdate}
                          onChangeText={handleChange('birthdate')}
                        />   
                        <ItemSeparator size="s" />
                        <InputLabel
                          placeholder="Digite a sua senha"
                          labelText="Senha"
                          labelStyle="standard"
                          MaskedInput="password"
                          errorMessage={errors.password}
                          value={values.password}
                          onChangeText={handleChange('password')}
                        /> 
                        <ItemSeparator size="s" />   
                        <InputLabel
                          placeholder="Confirme a sua senha"
                          labelText="Confirmação de senha"
                          labelStyle="standard"
                          MaskedInput="password"
                          errorMessage={errors.passwordConfirm}
                          value={values.passwordConfirm}
                          onChangeText={handleChange('passwordConfirm')}
                        /> 
                        <ItemSeparator size="s" />
                        <Button title="Cadastrar" fontColor="white" onPress={handleSubmit}/>            
                      </KeyboardAvoidingView>
                    }
                  />        
                </ScreenWrapper>
              )}
          </Formik>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Register;
