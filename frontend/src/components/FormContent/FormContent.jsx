import React from "react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import FormContentStyled from "./FormContent.styled";

const FormContent = ({ label, type, error, placeholder, value, register}) => {
  switch (type) {
    default:
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label}></Text>
          <Input id="Text" type={type} placeholder={placeholder} {...register}></Input>
          <Text id="message-error" text={error}></Text>
        </FormContentStyled>
      );
    case "Text":
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label}></Text>
          <Input id="Text" type={type} placeholder={placeholder} {...register}></Input>
          <Text id="message-error" text={error}></Text>
        </FormContentStyled>
      );
    case "Password":
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label}></Text>
          <Input id="Text" type={type} {...register}></Input>
          <Text id="message-error" text={error}></Text>
        </FormContentStyled>
      );
    case "Date":
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label}></Text>
          <Input id="Text" type={type} {...register}></Input>
          <Text id="message-error" text={error}></Text>
        </FormContentStyled>
      );
    case "Time":
      return (
        <FormContentStyled>
          <Text id="label-styled" text={label}></Text>
          <Input id="Text" type={type} {...register}></Input>
          <Text id="message-error" text={error}></Text>
        </FormContentStyled>
      );
      case "Select":
        return (
          <FormContentStyled>
            <Text id="label-styled" text={label}></Text>
            <Input id="Select" type={type} value={value} {...register}></Input>
            <Text id="message-error" text={error}></Text>
          </FormContentStyled>
        );
  }
};

export default FormContent;
