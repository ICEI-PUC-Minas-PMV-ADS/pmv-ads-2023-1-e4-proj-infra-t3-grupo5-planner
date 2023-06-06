import React from "react";
import { InputStyled, SelectStyled} from "./Input.Styled";

const Input = ({ id, type, placeholder, icon, value, register }) => {
  switch (type) {

    default:
      return (
        <InputStyled
          id={id}    
          className={`${type}`}       
          placeholder={placeholder}
          {...register}
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
        >{icon}</InputStyled>
      );
      
      case "Checkbox":
        return (
          <InputStyled
            className={`${type}`}  
            id={id}
            placeholder={placeholder}
            type={type}       
          {...register}
          ></InputStyled>
        );

         case "Date":          
            return (
              <InputStyled
               className={`${type}`}  
                id={id}
                type={type}   
              {...register}
              ></InputStyled>
            );

        case "Time":         
          return (
            <InputStyled
              className={`${type}`}  
              id={id}
              type={type}          
              placeholder={placeholder}
   
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
            ></InputStyled>
          );
          case "Select":         
          return (
            <SelectStyled
              className={`${type}`}  
              id={id}               
              value={value}
            {...register}
            ></SelectStyled>
          );                          
  }
};

export default Input;
