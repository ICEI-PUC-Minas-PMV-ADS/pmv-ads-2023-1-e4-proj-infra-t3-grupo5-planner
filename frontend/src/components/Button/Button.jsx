import React from 'react'
import ButtonStyled from './Button.styled'
import Text from '../Text/Text'

const Button = ({ id, textId, text}) => {
    return (
        <ButtonStyled className={`${id}`} id={id}><Text id={`${textId}`} text={`${text}`}/></ButtonStyled>
    )
}

export default Button