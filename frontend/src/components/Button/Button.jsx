import React from 'react'
import ButtonStyled from './Button.styled'
import Text from '../Text/Text'
import { GoPlus } from 'react-icons/go'
import { GrClose } from 'react-icons/gr'
import Avatar from '../../assets/Avatar'

const Button = ({ id, textId, text, plusIcon, plusButton, closeIcon, profileIcon }) => {
    return (
        <ButtonStyled className={`${id}`} id={id}>
            {plusIcon && <GoPlus color={`${plusIcon}`} style={ { marginLeft: 32, marginRight: 16, fontSize: 20} }/>}
            {plusButton && <GoPlus color={`${plusButton}`} style={ { fontSize: 20} }/>}
            {closeIcon && <GrClose color={`${closeIcon}`} style={ { fontSize: 20} }/>}
            {profileIcon && <Avatar/>}
            <Text id={`${textId}`} text={`${text}`} />
        </ButtonStyled>
    )
}

export default Button