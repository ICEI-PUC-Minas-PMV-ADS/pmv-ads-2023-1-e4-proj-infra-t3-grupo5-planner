import React from "react";
import { TouchableOpacity, Text, View } from "react-native"
import { Octicons } from '@expo/vector-icons'
import ButtonStyled from './Button.styled';

const Button = ({ 
  title, 
  onPress, 
  buttonStyled,
  fontColor = "white",
}) => {

  const getButtonStyle = () => {
      switch (buttonStyled){
        case 'smallStandard':
          return ButtonStyled.smallStandard
        case 'transparentStandard':
          return ButtonStyled.transparentButton
        case 'circleAddButton':
          return ButtonStyled.circleAddButton
        case 'whiteRoundedButton':
          return [ButtonStyled.RoundedButton,{backgroundColor:"white",borderWidth:2,borderColor: "black",}]
        case 'redRoundedButton':
          return [ButtonStyled.RoundedButton,{backgroundColor:"#ED4B58"}]
        case 'blackRoundedButton':
          return [ButtonStyled.RoundedButton,{backgroundColor:"black"}]
        default:
          return ButtonStyled.standard
      }
    }

    return(
      <TouchableOpacity onPress={onPress} style={getButtonStyle()}>

        {buttonStyled === 'circleAddButton' &&  
          <View style={ButtonStyled.styleIcon}>
            <Octicons name="plus" size={44} color={fontColor}/>
          </View>}
        {buttonStyled && buttonStyled.includes('RoundedButton') &&
          <View style={ButtonStyled.smallIconContainer}>
            <Octicons name="plus" size={16} color={fontColor} />
          </View>}

        <Text style={[ButtonStyled.standardText, {color: fontColor}]}>{title}</Text>
      </TouchableOpacity>
    );
};
export default Button;
