import React from "react";
import "../../index.css";
import SendEmail from "../../assets/PasswordRecovery/send-email.svg";
import { ImageStyled, Form, PasswordRecoveryStyled, TextStyled, ButtonContainer } from "./PasswordRecovery.styled";
import Text from "../Text/Text";
import FormContent from "../FormContent/FormContent";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";

export const PasswordRecovery = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  const onInvalid = (errors) => console.error(errors)

  const validateEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(value)) {
      return "Digite um e-mail válido";
    }
    return true;
  };

  return (
    <div className="PasswordRecovery">
      <PasswordRecoveryStyled>
        <ImageStyled src={SendEmail}></ImageStyled>
        <TextStyled>
          <Text id="big-title" text="Insira o endereço de e-mail associado à sua conta MyPlan para enviarmos um link de redefinição" />
        </TextStyled>
        <Form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <FormContent id="email" type="text" label="E-mail"
            error={errors.email && "Digite um e-mail válido"}
            placeholder="Seu e-mail"
            {...{
              register: register("email", {
                required: true,
                validate: validateEmail
              })
            }}
          />
          <ButtonContainer>
            <Button id="rectangular-black-button" textId="button-white-text" text="Enviar" type="submit"></Button>
          </ButtonContainer>
        </Form>
      </PasswordRecoveryStyled>
    </div>
  );
}

export default PasswordRecovery;
