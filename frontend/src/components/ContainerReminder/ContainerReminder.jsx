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

const Reminder = () => {
  return (
    <ContainerReminderContent>
      <Box
        id="ModalBox"
        content={
          <>
            <ModalRedBox
              content={<Text id="big-title" text="Defina um lembrete"></Text>}
            />
            <ModalWhiteBox
              content={
                <Box
                  id="WidgetContentBox"
                  content={
                    <>
                      <Text id="small-text" text="aa"></Text>
                    </>
                  }
                ></Box>
              }
            />
          </>
        }
      ></Box>
    </ContainerReminderContent>
  );
};

export default Reminder;
