import React, { useState } from "react";
import Box from "../Box/Box";
import { RedBox, WhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { WidgetContent } from "../WidgetContent/WidgetContent";
import { ScrollBox, DownRow } from "./ConteinerReminder.styled";
import ModalReminder from "../ModalReminder/ModalReminder";

const ContainerReminder = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [reminders, setReminders] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onSaveReminder = (reminderData) => {
    setReminders([...reminders, reminderData]);
    closeModal();
  };

  return (
    <Box
      id="WidgetBox"
      content={
        <div>
          <RedBox>
            <Text id="big-title" text="Lembretes" />
          </RedBox>
          <WhiteBox>
            <ScrollBox>
              {reminders.map((reminder, index) => (
                <div key={index}>
                  <WidgetContent
                    id="ReminderContent"
                    textDescription={reminder.title}
                    ReminderDate={reminder.date}
                    ReminderHour={reminder.hour}
                  ></WidgetContent>
                </div>
              ))}
            </ScrollBox>
            <DownRow>
              <Button
                plusButton
                id="pink-button"
                text=""
                textId="button-black-text"
                onClick={openModal}
              ></Button>
            </DownRow>
          </WhiteBox>
          {isModalOpen && (
            <ModalReminder
              closeModal={closeModal}
              onSaveReminder={onSaveReminder}
            />
          )}
        </div>
      }
    ></Box>
  );
};

export default ContainerReminder;
