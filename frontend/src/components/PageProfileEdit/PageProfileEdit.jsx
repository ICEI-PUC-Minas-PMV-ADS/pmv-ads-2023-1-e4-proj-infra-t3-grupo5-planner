import React from "react";
import {
  ContainerProfileEdit,
  HeaderProfileEdit,
  Line,
  LineButton,
  WidthArea,
} from "./PageProfileEdit.styled";
import Text from "../Text/Text";
import FormContent from "../FormContent/FormContent";
import Button from "../Button/Button";

const PageProfileEdit = () => {
  return (
    <ContainerProfileEdit>
      <HeaderProfileEdit>
        <Text id="big-title" text="Edição de dados" />
      </HeaderProfileEdit>
      <Line>
        <WidthArea className="OnePart">
          <FormContent
            label="Nome"
            type="text"
            error=""
            placeholder="Pedro Thiago"
          ></FormContent>
        </WidthArea>
        <WidthArea className="TwoPart">
          <FormContent
            label="Nome"
            type="text"
            error=""
            placeholder="Rodrigues Santos"
          ></FormContent>
        </WidthArea>
      </Line>
      <Line>
        <WidthArea className="ThreePart">
          <FormContent
            label="E-mail"
            type="text"
            error=""
            placeholder=""
          ></FormContent>
        </WidthArea>
      </Line>
      <Line>
        <WidthArea className="ThreePart">
          <FormContent
            label="Confirmar e-mail"
            type="text"
            error=""
            placeholder=""
          ></FormContent>
        </WidthArea>
      </Line>
      <LineButton>
        <Button
          id="rectangular-black-button"
          textId="button-white-text"
          text="Editar dados"
        ></Button>
      </LineButton>
      <HeaderProfileEdit>
        <Text id="big-title" text="Edição de senha" />
      </HeaderProfileEdit>
      <Line>
        <WidthArea className="ThreePart">
          <FormContent
            label="Senha antiga"
            type="Password"
            error=""
            placeholder=""
          ></FormContent>
        </WidthArea>
      </Line>
      <Line>
        <WidthArea className="ThreePart">
          <FormContent
            label="Nova senha"
            type="Password"
            error=""
            placeholder=""
          ></FormContent>
        </WidthArea>
      </Line>
      <Line>
        <WidthArea className="ThreePart">
          <FormContent
            label="Confirmar senha"
            type="Password"
            error=""
            placeholder=""
          ></FormContent>
        </WidthArea>
      </Line>
      <LineButton id="downButton">
        <Button
          id="rectangular-black-button"
          textId="button-white-text"
          text="Editar senha"
        ></Button>
      </LineButton>
    </ContainerProfileEdit>
  );
};
export default PageProfileEdit;
