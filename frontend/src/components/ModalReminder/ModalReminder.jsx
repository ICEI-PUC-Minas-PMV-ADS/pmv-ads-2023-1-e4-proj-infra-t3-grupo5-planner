import React from "react";
import Box from "../Box/Box";
import { ModalRedBox, ModalWhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import { Line, WidthArea, Buttons } from "./ModalReminder.styled";
import FormContent from "../FormContent/FormContent";
import Button from "../Button/Button";

const Reminder = () => {
  return (
    <Box
      id="ModalBox"
      content={
        <>
          <ModalRedBox>
            {" "}
            <Text id="title-container" text="Defina um lembrete"></Text>
          </ModalRedBox>
          <ModalWhiteBox>
            {" "}
            <Line>
              <WidthArea className="ThreePart">
                <FormContent label="Nome" type="Text"></FormContent>
              </WidthArea>
            </Line>
            <Line>
              <WidthArea className="TwoPart">
                {" "}
                <FormContent label="Data" type="Date" error=""></FormContent>
              </WidthArea>
              <WidthArea className="OnePart">
                {" "}
                <FormContent label="Hora" type="Time" error=""></FormContent>
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
                text="Criar lembrete"
              ></Button>
            </Buttons>
          </ModalWhiteBox>
        </>
      }
    ></Box>
  );
};

export default Reminder;
