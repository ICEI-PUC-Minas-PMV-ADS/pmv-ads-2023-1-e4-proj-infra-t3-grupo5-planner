import React from "react";
import BoxStyled from "./Box.styled";

const Box = ({ id, content }) => {
  return (
    <BoxStyled className={`${id}`} id={id}>
      {content}
    </BoxStyled>
  );
};
export default Box;
