import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaskInput, { Masks } from 'react-native-mask-input'

import InputStyled from './Input.styled'

const InputLabel = ({labelText, placeholder, inputSize = 280 , icon, errorMessage, labelStyle, MaskedInput}) => {
    
    const [masked, setMasked] = React.useState('')

    const getInputStyle = () => {
        switch (labelStyle){
            case 'textArea':
                return InputStyled.textArea;
            default:
                return InputStyled.standard;
        }
    }

    const getIcon = () => {
        switch (icon){
            case "schedule":
                return "calendar-month"
            case "clock":
                return "clock-outline"
            case "checkbox":
                return "checkbox-outline"
        }
    }
    
    const getMask = () => {
        switch(MaskedInput){
            case "date":
                return Masks.DATE_DDMMYYYY
            case "hour":
                return [/\d/, /\d/, ':', /\d/, /\d/]
            case "expense":
                return Masks.BRL_CURRENCY
        }
    }

    const textAreaStyled = labelStyle === 'textArea' ? {padding: 10} : {};

    return(
        <View>
            {labelText && <Text style={InputStyled.labelText}>{labelText}</Text>}
            <View style={InputStyled.container}>
                <MaskInput 
                    value={masked} 
                    onChangeText={(mask) => setMasked(mask)} 
                    mask={getMask()} 
                    style={[getInputStyle(), {width: inputSize}, textAreaStyled]} 
                    inputMode={MaskedInput ? 'numeric' : 'none'}
                    placeholder={placeholder}
                    multiline={labelStyle === 'textArea' ? true : false}
                    numberOfLines={labelStyle === 'textArea' ? 10 : null}
                    textAlignVertical={labelStyle === 'textArea' ? "top" : null}
                />
                {icon && <MaterialCommunityIcons name={getIcon()} size={24} color="black" style={InputStyled.icon}/>}
            </View>
            <Text style={InputStyled.errorText}>{errorMessage}</Text>
        </View>
    )
    
};

export default InputLabel;
