import React from "react";
import { InputStyled, SelectStyled} from "./Input.Styled";

const Input = ({ id, type, placeholder, icon, value }) => {
  switch (type) {

    default:
      return (
        <InputStyled
          id={id}    
          className={`${type}`}       
          placeholder={placeholder}
        ></InputStyled>
      );

    case "Text":
      return (
        <InputStyled
          id={id}
          className={`${type}`}  
          type={type}   
          placeholder={placeholder}
        ></InputStyled>
      );

    case "Password":
      return (
        <InputStyled
          id={id}
          className={`${type}`}  
          type={type}          
          placeholder={placeholder}
        >{icon}</InputStyled>
      );
      
      case "Checkbox":
        return (
          <InputStyled
            className={`${type}`}  
            id={id}
            placeholder={placeholder}
            type={type}        
          ></InputStyled>
        );

         case "Date":          
            return (
              <InputStyled
               className={`${type}`}  
                id={id}
                type={type}           
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
            ></InputStyled>
          );
          case "Select":         
          return (
            <SelectStyled
              className={`${type}`}  
              id={id}               
              value={value}
            ></SelectStyled>
          );                          
  }
};

export default Input;
