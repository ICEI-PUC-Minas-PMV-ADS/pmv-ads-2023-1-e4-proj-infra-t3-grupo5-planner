import React from "react";
import BoxStyled from "./Box.styled";

const Box = ({ id }) => {
  return <BoxStyled className={`${id}`} id={id}></BoxStyled>;
};
export default Box;
