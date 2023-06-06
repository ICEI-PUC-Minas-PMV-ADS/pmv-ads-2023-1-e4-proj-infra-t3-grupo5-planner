import React from 'react'
import {ButtonStyled, ArrowStyled} from './Button.styled'
import Text from '../Text/Text'
import { GoPlus } from 'react-icons/go'
import { GrClose } from 'react-icons/gr'
import Avatar from '../../assets/Button/Avatar'
import Arrow from '../../assets/Button/Arrow'

const Button = ({ id, textId, text, plusIcon, plusButton, closeIcon, profileIcon, arrow, isSelected, onClick, type }) => {
    return (
        <ButtonStyled className={`${id}`} id={id} onClick={onClick} type={type}>
            {plusIcon && <GoPlus color={`${plusIcon}`} style={ { marginLeft: 32, marginRight: 16, width: 20, height: 20} }/>}
            {plusButton && <GoPlus color={`${plusButton}`} style={ { width: 20, height: 20 } }/>}
            {closeIcon && <GrClose color={`${closeIcon}`} style={ { fwidth: 20, height: 20 } }/>}
            {profileIcon && <Avatar/>}
            {arrow && <ArrowStyled isSelected={isSelected}><Arrow/></ArrowStyled>}
            <Text id={`${textId}`} text={`${text}`} />
        </ButtonStyled>
    )
}

export default Button