import React from "react";
import PagesBox from "../PagesBox/PagesBox";
import { LoginContainer, FormStyled, InfoContainer, ButtonContainer, LogoContainer,RegisterContainer } from "./PageLogin.styled";
import { useForm } from "react-hook-form";
import FormContent from "../FormContent/FormContent";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Text from "../Text/Text";

const PageLogin = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <LoginContainer>
      <PagesBox id="Login" RedContent="Criar Login" GrayContent={
        <>
       <LogoContainer> 
       <Logo blackLogo heightImage={65}/> 
       </LogoContainer>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>      
      <InfoContainer>
        <FormContent label="Nome" error={errors.firstName?.type === 'required' && "Digite um nome válido"} placeholder="Seu nome" {...register("firstName", { required: true })}/>             
        </InfoContainer>        
        <InfoContainer>
        <FormContent label="Email" type="Email" error={errors.email?.type === 'required' &&"Digite um email válido"} placeholder="seuemail@email.com" {...register("email", { required: true })}/>
        </InfoContainer>      
        <ButtonContainer>
       <Button id="text-button" textId="button-black-text" text="Esqueci minha senha" type="button"/>
       <Button id="rectangular-black-button" textId="button-white-text" text="Enviar" type="submit"/>
       <RegisterContainer>
       <Text id="label-styled" text="Não tem registro?"/>
       <Button id="text-button" textId="button-red-text" text="Cadastre-se" type="button"/>
       </RegisterContainer>
       </ButtonContainer>
      </FormStyled>
      </>
    }/>
    </LoginContainer>    
  );
};

export default PageLogin;
