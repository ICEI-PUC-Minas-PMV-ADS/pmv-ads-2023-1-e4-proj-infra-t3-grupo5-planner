import React from "react";
import "../../index.css";
import SendEmail from "../../assets/PasswordRecovery/send-email.svg";
import { ImageStyled, LabelSize, PasswordRecoveryStyled, TextStyled } from "./PasswordRecovery.styled";
import Text from "../Text/Text";
import FormContent from "../FormContent/FormContent";
import Button from "../Button/Button";

export const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
      <PasswordRecoveryStyled>
        <ImageStyled src={SendEmail}></ImageStyled>
        <TextStyled>
          <Text id="big-title" text="Insira o endereço de e-mail associado à sua conta MyPlan para enviarmos um link de redefinição" />
        </TextStyled>
        <LabelSize>
          <FormContent type="Text" label="E-mail" error="Digite um e-mail válido"/>
        </LabelSize>
        <Button id="rectangular-black-button" textId="button-white-text" text="Enviar e-mail"></Button>
      </PasswordRecoveryStyled>
    </div>
  );
}

export default PasswordRecovery;
