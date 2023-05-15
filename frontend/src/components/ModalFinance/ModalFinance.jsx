import React from "react";
import Box from "../Box/Box";
import { ModalRedBox, ModalWhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Buttons, Line, Label, WidthArea } from "./ModalFinance.styled";
import FormContent from "../FormContent/FormContent";

const ModalFinance = () => {
  return (
    <Box
      id="ModalBox"
      content={
        <div>
          <ModalRedBox>
            <Text id="title-modal" text="Defina uma finança" />
          </ModalRedBox>
          <ModalWhiteBox>
            <Line>
              <WidthArea className="TwoPart">
                <FormContent label="Nome" type="Text"></FormContent>
              </WidthArea>
              <WidthArea className="OnePart">
                <FormContent label="Tipo" type="Text"></FormContent>
              </WidthArea>
            </Line>
            <Line>
              <WidthArea className="ThreePart">
                <FormContent
                  label="Valor"
                  type="Text"
                  placeholder="R$ 000,00"
                ></FormContent>
              </WidthArea>
            </Line>
            <Buttons>
              <Button
                id="text-button"
                text="Cancelar"
                textId="button-black-text"
              ></Button>
              <Button
                id="rectangular-black-button"
                textId="button-white-text"
                text="Criar hábito"
              ></Button>
            </Buttons>
          </ModalWhiteBox>
        </div>
      }
    ></Box>
  );
};

export default ModalFinance;
