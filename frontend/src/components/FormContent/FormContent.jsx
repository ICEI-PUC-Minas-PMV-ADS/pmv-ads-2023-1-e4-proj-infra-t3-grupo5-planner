import React from "react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import FormContentStyled from "./FormContent.styled";

const FormContent = ({ label, type, error, placeholder, value, register }) => {
  switch (type) {
    default:
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label} />
          <Input id="Text" type={type} placeholder={placeholder} register={register} />
          <Text id="message-error" text={error} />
        </FormContentStyled>
      );
    case "Text":
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label} />
          <Input id="Text" type={type} placeholder={placeholder} register={register} />
          <Text id="message-error" text={error} />
        </FormContentStyled>
      );
    case "Password":
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label} />
          <Input id="Text" type={type} register={register} />
          <Text id="message-error" text={error} />
        </FormContentStyled>
      );
    case "Date":
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label} />
          <Input id="Text" type={type} register={register} />
          <Text id="message-error" text={error} />
        </FormContentStyled>
      );
    case "Time":
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label} />
          <Input id="Text" type={type} register={register} />
          <Text id="message-error" text={error} />
        </FormContentStyled>
      );
    case "Select":
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label} />
          <Input id="Select" type={type} value={value} register={register} />
          <Text id="message-error" text={error} />
        </FormContentStyled>
      );
  }
};

export default FormContent;
