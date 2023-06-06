import { SafeAreaView, StyleSheet, View } from "react-native";
import Button from "../components/Buttons";
import InputLabel from "../components/Inputs";
import ItemSeparator from "../components/ItemSeparator";
import RegisterContainerBox from "../components/RegisterContainerBox";

const Register = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.centeredContainer}>
      <RegisterContainerBox
      title="Cadastro"
      content={  
        <>         
          <InputLabel
            placeholder="Digite seu nome"
            labelText="Nome"
            errorMessage="Digite um nome válido"
          />
          <ItemSeparator size="s" />
          <InputLabel
            placeholder="Digite o seu sobrenome"
            labelText="Sobrenome"
            errorMessage="Digite um sobrenome válido"
          />
          <ItemSeparator size="s" />
          <InputLabel
            placeholder="Digite seu e-mail"
            labelText="E-mail"
            errorMessage="Digite um e-email válido"
          />
             <ItemSeparator size="s" />
          <InputLabel            
            labelText="Data de Nascimento"
            errorMessage="Insira uma data válida"
          />          
            <ItemSeparator size="s" />
          <InputLabel
            placeholder="Digite sua senha"
            labelText="senha"
            errorMessage="Digite uma senha válida"
          />
          <ItemSeparator size="s" />
          <InputLabel
            placeholder="Confirme sua senha"
            labelText="senha"
            errorMessage="A confirmação de senha não é igual a senha cadastrada."
          />
           <ItemSeparator size="s" />
          <Button title="Cadastrar" fontColor="white" />
        </>
      }>
      </RegisterContainerBox>
    </View>
  </SafeAreaView>
);

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
