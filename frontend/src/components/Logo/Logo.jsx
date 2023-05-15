import React from 'react'
import { LogoStyled, ImageStyled } from './Logo.styled';
import BlackColorLogo from '../../assets/black-logo.svg';
import WhiteColorLogo from '../../assets/white-logo.svg';

const Logo = ({ blackLogo, whiteLogo, heightImage }) => {
  return (
    <LogoStyled>
        {blackLogo && <ImageStyled heightImage={heightImage} src={BlackColorLogo} alt="Logo preta" />}
        {whiteLogo && <ImageStyled heightImage={heightImage} src={WhiteColorLogo} alt="Logo branca" />} 
    </LogoStyled> 
  );
}

export default Logo



