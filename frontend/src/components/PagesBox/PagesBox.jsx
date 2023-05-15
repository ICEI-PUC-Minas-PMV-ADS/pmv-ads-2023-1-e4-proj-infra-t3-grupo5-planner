import React from 'react'
import {RedBoxStyled,GrayBoxStyled} from './PagesBox.styled'

export const PagesBox = ({id, RedContent, GrayContent}) => {
  
  return (
    <>
    <RedBoxStyled id={id}  className={`${id}`}>{RedContent}</RedBoxStyled>
    <GrayBoxStyled id={id}  className={`${id}`}>{GrayContent}</GrayBoxStyled>
    </>
  )
  }     


export default PagesBox;