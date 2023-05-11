import React from 'react'
import { IconStyled } from './Icon.styled.js';

const Icon = ({icon, id}) => {
  return (
    <IconStyled id={id} className={`material-icons ${id}`}>{icon}</IconStyled>
  )
}

export default Icon;
