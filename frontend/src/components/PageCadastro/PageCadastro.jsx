import React from "react";
import PagesBox from "../PagesBox/PagesBox";
import { CadastroContainer, FormStyled, InfoContainer, ButtonContainer } from "./PageCadastro.styled";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import FormContent from "../FormContent/FormContent";
import { useEffect } from "react";

const PageCadastro = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const onSubmit = (data) => console.log(data) ;
    const onInvalid = (errors) => console.error(errors)

    useEffect(()=> {
      register("password");
    }, [register]);

    const passwordValue= watch("password");
    const validateConfirmPassword = (value)=> {
      return value === passwordValue || "A senha digitada é diferente da senha fornecida";
    }

  return (
    <CadastroContainer>
      <PagesBox RedContent="Criar Cadastro" GrayContent={
      <FormStyled onSubmit={handleSubmit(onSubmit,onInvalid)}>      
      <InfoContainer>
        <FormContent id="firstName" type="text" label="Nome" error={errors.firstName?.type === 'required' && "Digite um nome válido"} placeholder="Seu nome" {...{register: register("firstName", { required: true })}}/>      
        <FormContent id="lastName"type="text" label="Sobrenome" error={errors.lastName?.type === 'required' && "Digite um sobrenome válido"} placeholder="Seu sobrenome" {...{register:register("lastName", { required: true })}}/>        
        </InfoContainer>        
        <InfoContainer>
        <FormContent id="email"label="Email" type="Email" error={errors.email?.type === 'required' &&"Digite um email válido"} placeholder="seuemail@email.com" {...{register:register("email", { required: true })}}/>
        <FormContent id="birthday" label="Data de Nascimento" type="Date" error={errors.birthday?.type === 'required' && "Digite um nome válido"}  {...{register:register("birthday", { required: true })}}/>
        </InfoContainer>
        <InfoContainer>
        <FormContent id="password"label="Senha" type="Password" error={errors.password?.type === 'required' && "Digite uma senha válida"} placeholder="*********"{...{register:register("password", { required: true })}}/>
        <FormContent id="confirmPassword" label="Confirme a senha" type="Password" error={errors.confirmPassword?.message} placeholder="*********"{...{register:register("confirmPassword", { required: true, validate: validateConfirmPassword })}}/>        
        </InfoContainer>
        <ButtonContainer>
       <Button id="rectangular-black-button" textId="button-white-text" text="Enviar" type="submit"/>
       </ButtonContainer>
      </FormStyled>
    }/>
    </CadastroContainer>
  );
};

export default PageCadastro;
