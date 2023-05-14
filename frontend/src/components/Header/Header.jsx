import React from 'react'
import Box from '../Box/Box'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import { HeaderContainer, NavMenu, Anchor } from './Header.styled'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderContainer>
            <Box
                id="HeaderBox"
                content={
                    <>
                        <Logo whiteLogo heightImage={48} />
                        <NavMenu>
                            <Anchor href="Home">
                                <Button herf="Home" id="header-button" textId="button-red-text" text="Início" />
                            </Anchor>
                            <Anchor href="Agenda">
                                <Button id="header-button" textId="button-red-text" text="Agenda" />
                            </Anchor>
                            <Link to="/ajuda" style={{ textDecoration: 'none' }}>
                                <Button id="header-button" textId="button-red-text" text="Ajuda" />
                            </Link>
                        </NavMenu>

                        <Button profileIcon id="profile-picture" text="" />
                    </>
                }></Box>
        </HeaderContainer>
    );
}

export default Header