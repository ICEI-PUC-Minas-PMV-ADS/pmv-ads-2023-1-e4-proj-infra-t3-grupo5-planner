import React from "react";
import PagesBox from "../PagesBox/PagesBox";
import { CadastroContainer, FormStyled, InfoContainer, ButtonContainer } from "./PageCadastro.styled";
import { useForm } from "react-hook-form";
import FormContent from "../FormContent/FormContent";
import Button from "../Button/Button";

const PageCadastro = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <CadastroContainer>
      <PagesBox RedContent="Criar Cadastro" GrayContent={
      <FormStyled onSubmit={handleSubmit(onSubmit)}>      
      <InfoContainer>
        <FormContent label="Nome" error={errors.firstName?.type === 'required' && "Digite um nome válido"} placeholder="Seu nome" {...register("firstName", { required: true })}/>      
        <FormContent label="Sobrenome" error={errors.lastName?.type === 'required' && "Digite um sobrenome válido"} placeholder="Seu sobrenome" {...register("lastName", { required: true })}/>        
        </InfoContainer>        
        <InfoContainer>
        <FormContent label="Email" type="Email" error={errors.email?.type === 'required' &&"Digite um email válido"} placeholder="seuemail@email.com" {...register("email", { required: true })}/>
        <FormContent label="Data de Nascimento" type="Date" error={errors.birthday?.type === 'required' && "Digite um nome válido"}  {...register("birthday", { required: true })}/>
        </InfoContainer>
        <InfoContainer>
        <FormContent label="Senha" type="Password" error={errors.password?.type === 'required' && "Digite uma senha válida"} placeholder="*********"{...register("password", { required: true })}/>
        <FormContent label="Confirme a senha" type="Password" error={errors.confirmPassword?.type === 'required' && "A senha digitada é diferente da senha fornecida"} placeholder="*********"{...register("confirmPassword", { required: true })}/>        
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
