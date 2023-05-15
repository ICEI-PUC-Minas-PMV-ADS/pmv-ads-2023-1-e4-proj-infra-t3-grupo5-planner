import React from "react";
import "../../index.css";
import SendEmail from "../../assets/PasswordRecovery/send-email.svg";
import { ImageStyled, LabelSize, PasswordRecoveryStyled } from "./PasswordRecoveryForm.styled";
import FormContent from "../FormContent/FormContent";
import Button from "../Button/Button";

export const PasswordRecoveryForm = () => {
  return (
    <div className="PasswordRecovery">
      <PasswordRecoveryStyled>
        <ImageStyled src={SendEmail}></ImageStyled>
        <LabelSize>
          <FormContent type="Text" label="E-mail" error="Digite um e-mail válido"/>
        </LabelSize>
        <LabelSize>
          <FormContent type="Text" label="Nova senha" error="Digite uma senha válida"/>
        </LabelSize>
        <LabelSize>
          <FormContent type="Text" label="Confirmar nova senha" error="As senhas não são iguais"/>
        </LabelSize>
        <Button id="rectangular-black-button" textId="button-white-text" text="Recuperar Senha"></Button>
      </PasswordRecoveryStyled>
    </div>
  );
}

export default PasswordRecoveryForm;
