import React from "react";
import { InputStyled, SelectStyled } from "./Input.Styled";

const Input = ({ id, type, placeholder, icon, value, register, onChange }) => {
  switch (type) {
    default:
      return (
        <InputStyled
          id={id}
          className={`${type}`}
          placeholder={placeholder}
          {...register}
          onChange={onChange}
        ></InputStyled>
      );

    case "Text":
      return (
        <InputStyled
          id={id}
          className={`${type}`}
          type={type}
          placeholder={placeholder}
          {...register}
          onChange={onChange}
        ></InputStyled>
      );

    case "Password":
      return (
        <InputStyled
          id={id}
          className={`${type}`}
          type={type}
          placeholder={placeholder}
          {...register}
          onChange={onChange}
        >
          {icon}
        </InputStyled>
      );

    case "Checkbox":
      return (
        <InputStyled
          className={`${type}`}
          id={id}
          placeholder={placeholder}
          type={type}
          {...register}
          onChange={onChange}
        ></InputStyled>
      );

    case "Date":
      return (
        <InputStyled
          className={`${type}`}
          id={id}
          type={type}
          {...register}
          onChange={onChange}
        ></InputStyled>
      );

    case "Time":
      return (
        <InputStyled
          className={`${type}`}
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
          onChange={onChange}
        ></InputStyled>
      );
    case "List":
      return (
        <InputStyled
          className={`${type}`}
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
          onChange={onChange}
        ></InputStyled>
      );
    case "Select":
      return (
        <SelectStyled
          className={`${type}`}
          id={id}
          value={value}
          {...register}
          onChange={onChange}
        ></SelectStyled>
      );
  }
};

export default Input;
