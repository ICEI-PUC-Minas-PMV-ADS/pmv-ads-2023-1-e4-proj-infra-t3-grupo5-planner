import React from "react";
import Box from "../Box/Box";
import {
  ModalRedBox,
  ModalWhiteBox,
  WidgetBox,
  RedBox,
  WhiteBox,
} from "../Box/Box.styled";
import Text from "../Text/Text";
import { ContainerReminderContent } from "./ContainerReminder.styled";
import FormContent from "../FormContent/FormContent";

const Reminder = () => {
  return (
    <ContainerReminderContent>
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
              <Text id="small-text" text=""></Text>
              <FormContent
                label="Nome"
                type="Text"
                placeholder="Escreva seu lembrete"
              ></FormContent>
              <FormContent
                label="Data"
                type="Date"
                error="Mensagem de erro"
              ></FormContent>
              <FormContent
                label="Data"
                type="Date"
                error="Mensagem de erro"
              ></FormContent>
            </ModalWhiteBox>
          </>
        }
      ></Box>
    </ContainerReminderContent>
  );
};

export default Reminder;
