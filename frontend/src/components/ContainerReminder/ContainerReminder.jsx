import React from "react";
import Box from "../Box/Box";
import { RedBox, WhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { WidgetContent } from "../WidgetContent/WidgetContent";
import { ScrollBox, DownRow } from "./ConteinerReminder.syled";
const ContainerReminder = () => {
  return (
    <Box
      id="WidgetBox"
      content={
        <downRow>
          <RedBox>
            <Text id="big-title" text="Lembretes" />
          </RedBox>

          <WhiteBox>
            <ScrollBox>
              <WidgetContent
                id="ReminderContent"
                textDescription="Lembrete A"
                ReminderDate="00/00/0000"
                ReminderHour="00:00"
              ></WidgetContent>
              <WidgetContent
                id="ReminderContent"
                textDescription="Lembrete A"
                ReminderDate="00/00/0000"
                ReminderHour="00:00"
              ></WidgetContent>
              <WidgetContent
                id="ReminderContent"
                textDescription="Lembrete B"
                ReminderDate="00/00/0000"
                ReminderHour="00:00"
              ></WidgetContent>
              <WidgetContent
                id="ReminderContent"
                textDescription="1234123412341234123412344"
                ReminderDate="00/00/0000"
                ReminderHour="00:00"
              ></WidgetContent>
            </ScrollBox>
            <DownRow>
              <Button
                plusButton
                id="pink-button"
                text=""
                textId="button-black-text"
              ></Button>
            </DownRow>
          </WhiteBox>
        </downRow>
      }
    ></Box>
  );
};

export default ContainerReminder;
