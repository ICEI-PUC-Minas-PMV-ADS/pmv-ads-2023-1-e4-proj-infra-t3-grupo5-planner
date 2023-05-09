import React from 'react'
import { IconStyled } from './Icon.styled.js';

const Icon = ({icon}) => {
  return (
    <IconStyled className='material-icons'>{icon}</IconStyled>
  )
}

export default Icon;
