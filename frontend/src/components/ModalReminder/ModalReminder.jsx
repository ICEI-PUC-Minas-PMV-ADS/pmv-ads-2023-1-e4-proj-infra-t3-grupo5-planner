import React, { useState } from "react";
import Box from "../Box/Box";
import { ModalRedBox, ModalWhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import { Line, WidthArea, Buttons } from "./ModalReminder.styled";
import FormContent from "../FormContent/FormContent";
import Button from "../Button/Button";
import moment from "moment";
import { useForm } from "react-hook-form";

const Reminder = ({ closeModal, onSaveReminder }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  //falta integrar com api

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    console.log(new Date());
    console.log(new Date(e.target.value));
    console.log(e.target.value);
  };
  const handleHourChange = (e) => {
    setHour(e.target.value);
  };

  const onSubmit = () => {
    const reminderData = {
      title: name,
      date: date,
      hour: hour,
    };
    onSaveReminder(reminderData);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <Box
      id="ModalBox"
      content={
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalRedBox>
            <Text id="title-container" text="Defina um lembrete"></Text>
          </ModalRedBox>
          <ModalWhiteBox>
            <Line>
              <WidthArea className="ThreePart">
                <FormContent
                  label="Nome"
                  type="Text"
                  onChange={handleNameChange}
                  error={
                    errors.Name?.type === "required" &&
                    "O nome do lembrete é obrigatório"
                  }
                  {...{ register: register("Name", { required: true }) }}
                ></FormContent>
              </WidthArea>
            </Line>
            <Line>
              <WidthArea className="TwoPart">
                <FormContent
                  label="Data"
                  type="Date"
                  error={
                    errors.Date &&
                    (errors.Date.type === "required"
                      ? "Data é obrigatória"
                      : "Você não pode definir um lembrete no passado")
                  }
                  {...{
                    register: register("Date", {
                      required: true,
                      validate: {
                        notPastDate: (value) => {
                          const currentDate = moment().format("YYYY-MM-DD");
                          return moment(value).isSameOrAfter(currentDate);
                        },
                      },
                    }),
                  }}
                  onChange={handleDateChange}
                ></FormContent>
              </WidthArea>
              <WidthArea className="OnePart">
                <FormContent
                  label="Hora"
                  type="Time"
                  error={
                    errors.Time &&
                    (errors.Time.type === "required"
                      ? "Hora é obrigatória"
                      : "A hora está incorreta")
                  }
                  {...{
                    register: register("Time", {
                      required: true,
                      validate: {
                        notPastTime: (value) => {
                          const selectedTime = new Date(
                            `${moment(date).format("YYYY-MM-DD")}T${value}`
                          );
                          const currentTime = new Date();
                          return selectedTime >= currentTime;
                        },
                      },
                    }),
                  }}
                  onChange={handleHourChange}
                ></FormContent>
              </WidthArea>
            </Line>
            <Buttons>
              <Button
                id="text-button"
                text="Cancelar"
                textId="button-black-text"
                onClick={closeModal}
              ></Button>
              <Button
                id="rectangular-black-button"
                textId="button-white-text"
                text="Criar lembrete"
                type="submit"
              ></Button>
            </Buttons>
          </ModalWhiteBox>
        </form>
      }
    ></Box>
  );
};

export default Reminder;
