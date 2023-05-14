import React from 'react'
import {RedBoxStyled,GrayBoxStyled} from './PagesBox.styled'

export const PagesBox = ({RedContent, GrayContent}) => {
  
  return (
    <>
    <RedBoxStyled>{RedContent}</RedBoxStyled>
    <GrayBoxStyled>{GrayContent}</GrayBoxStyled>
    </>
  )
  }     


export default PagesBox;