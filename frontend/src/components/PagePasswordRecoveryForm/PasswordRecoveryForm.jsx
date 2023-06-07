import React from "react";
import "../../index.css";
import SendEmail from "../../assets/PasswordRecovery/send-email.svg";
import { ImageStyled, Form, PasswordRecoveryStyled, ButtonContainer } from "./PasswordRecoveryForm.styled";
import FormContent from "../FormContent/FormContent";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";

export const PasswordRecoveryForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const onInvalid = (errors) => console.error(errors)

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
    <div className="PasswordRecovery">
      <PasswordRecoveryStyled>
        <ImageStyled src={SendEmail}></ImageStyled>
        <Form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <FormContent id="email" type="Text" label="E-mail" error={errors.email && "Digite um e-mail válido"}
            {...{
              register: register("email", {
                required: true,
                validate: validateEmail
              })
            }} />
          <FormContent id="newPassword" type="Password" label="Nova senha" error={errors.newPassword && "Digite uma senha válida"}
            {...{
              register: register("newPassword", {
                required: true,
              })
            }}
          />
          <FormContent id="confirmPassword" type="Password" label="Confirmar nova senha" error={errors.confirmPassword && "As senhas não são iguais"}
            {...{
              register: register("confirmPassword", {
                required: true,
                validate: validateConfirmPassword
              })
            }} />
          <ButtonContainer>
            <Button id="rectangular-black-button" textId="button-white-text" text="Recuperar Senha" type="submit"></Button>
          </ButtonContainer>
        </Form>
      </PasswordRecoveryStyled>
    </div>
  );
}

export default PasswordRecoveryForm;
