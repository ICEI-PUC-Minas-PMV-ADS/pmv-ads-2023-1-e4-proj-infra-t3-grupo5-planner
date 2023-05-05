import React from 'react'
import TextStyled from './Text.styled';

const Text = ({ id, text }) => {
  return (
    <TextStyled id={id}>{text}</TextStyled>
  );
}

export default Text
