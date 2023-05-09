import React from 'react'
import {ImageEmailStyled, ImageStyled} from './ImageEmail.styled';
import ImagemEmail from './assets/ImagemEmail.svg'

const ImgEmail = ({ImageEmail}) => {
    return (
        <ImageEmailStyled div="styled.div">
           <ImageStyled src={ImagemEmail} alt="ImagemEmail"/>
        </ImageEmailStyled>
    );
  }
  
  export default ImgEmail