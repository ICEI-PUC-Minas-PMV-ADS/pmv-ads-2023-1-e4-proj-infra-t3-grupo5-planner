import React from 'react'
import Box from '../Box/Box'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import { HeaderContainer, NavMenu, Anchor } from './Header.styled'

const Header = () => {
  return (
    <HeaderContainer>
        <Box 
        id="HeaderBox"
        content={
            <>
                <Logo whiteLogo heightImage={48}/>
                <NavMenu>
                    <Anchor href="Home">
                        <Button herf="Home" id="text-button" textId="button-red-text" text="Início"/>
                    </Anchor>
                    <Anchor href="Ajuda">
                       <Button id="text-button" textId="button-red-text" text="Ajuda"/>
                    </Anchor>
                    
                </NavMenu>
                <Button profileIcon id="profile-picture" text=""/>
            </>            
        }></Box>
    </HeaderContainer>
  );
}

export default Header