import React from 'react'
import ButtonStyled from './Button.styled'
import Text from '../Text/Text'
import { GoPlus } from 'react-icons/go'
import { GrClose } from 'react-icons/gr'

const Button = ({ id, textId, text, plusIcon, plus, close }) => {
    return (
        <ButtonStyled className={`${id}`} id={id}>
            {plusIcon && <GoPlus color={`${plusIcon}`} style={ { marginLeft: 32, marginRight: 16, fontSize: 20} }/>}
            {plus && <GoPlus color={`${plus}`} style={ { fontSize: 20} }/>}
            {close && <GrClose color={`${plus}`} style={ { fontSize: 20} }/>}
            <Text id={`${textId}`} text={`${text}`} />
        </ButtonStyled>
    )
}

export default Button