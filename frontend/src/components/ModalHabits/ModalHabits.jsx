import React from "react";
import Box from "../Box/Box";
import { ModalRedBox, ModalWhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { Buttons, Line, WidthArea } from "./ModalHabits.styled";
import FormContent from "../FormContent/FormContent";


const ModalHabits = () => {  
     
 
  return (
    <Box
      id="ModalBox"
      content={
        <form>
          <ModalRedBox>
            <Text id="title-modal" text="Defina um hábito" />
          </ModalRedBox>
          <ModalWhiteBox>
            <Line>
              <WidthArea className="TwoPart">
                <FormContent label="Nome" type="Text"></FormContent>
              </WidthArea>
              <WidthArea className="OnePart">
                <FormContent
                  label="Ícone"
                  type="Select"
                  >                                  
                </FormContent>
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
                text="Criar meta"
              ></Button>
            </Buttons>
          </ModalWhiteBox>
        </form>
      }
    ></Box>
  );
};

export default ModalHabits;
