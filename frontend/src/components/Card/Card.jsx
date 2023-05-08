import React from "react";
import CardStyled from "./Card.styled";
import Card from "./Card.styled";

const Card = ({ id }) => {
  return <CardStyled className={`${id}`} id={id}></CardStyled>;
};
export default Card;
